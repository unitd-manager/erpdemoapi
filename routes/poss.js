const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/Database.js");
const userMiddleware = require("../middleware/UserModel.js");
const md5 = require("md5");
const fileUpload = require("express-fileupload");
const _ = require("lodash");
const mime = require("mime-types");
const bodyParser = require("body-parser");
const cors = require("cors");
const session = require("express-session");
const util = require("util");

const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(
  fileUpload({
    createParentPath: true,
  })
);

app.use(
  session({
    secret: "your-secret-key",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false },
  })
);

// Promisify the db.query method
const query = util.promisify(db.query).bind(db);

app.get('/createNewOrder', (req, res) => {
  query(`
    SELECT MAX(CONVERT(bill_number, UNSIGNED INTEGER)) AS bill_number
    FROM \`orders\`
    WHERE order_status != 'Cancelled'
  `)
  .then(result => {
    // Assuming result is an array with the first element containing the required data
    const bill_number = (result[0]?.bill_number || 0) + 1;

    const fa = {
      order_status: 'New',
      record_type: 'POS',
      order_date: new Date().toISOString().split('T')[0],
      bill_number: bill_number,
      link_stock: 1,
    };

    return query('INSERT INTO `orders` SET ?', fa);
  })
  .then(insertResult => {
    const order_id = insertResult.insertId;
    req.session.order_id = order_id;
    res.send(`New order created with ID: ${order_id}`);
  })
  .catch(error => {
    console.error(error);
    res.status(500).send("An error occurred while creating the order.");
  });
});

app.post("/cancelOrder", async (req, res) => {
  try {
    const session_order_id = req.body.order_id || '';

    if (!session_order_id) {
      return res.status(400).send("No order ID in session.");
    }

    await query(`
      UPDATE \`orders\`
      SET order_status = 'Cancelled'
      WHERE order_id = ?
    `, [session_order_id]);

    await query(`
      UPDATE \`invoice\`
      SET status = 'Cancelled'
      WHERE order_id = ?
    `, [session_order_id]);

    await query(`
      UPDATE \`receipt\`
      SET receipt_status = 'Cancelled'
      WHERE order_id = ?
    `, [session_order_id]);

    req.session.order_id = '';

    res.send("Order, invoice, and receipt cancelled successfully.");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while cancelling the order.");
  }
});

app.get('/getOrders', (req, res, next) => {
  db.query(`
    SELECT 
      o.*
   
     
    FROM 
      orders o 

    WHERE 
      o.order_id != ''
    ORDER BY 
      o.order_id DESC
    LIMIT 1
  `,
  (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: 'Failed'
      });
    } else {
      return res.status(200).send({
        data: result,
        msg: 'Success'
      });
    }
  });
});

app.post("/cancelOrderandNew", async (req, res) => {
  try {
    const session_order_id = req.body.order_id || '';

    if (!session_order_id) {
      return res.status(400).send("No order ID in session.");
    }

    // Cancel the order, invoice, and receipt in a transaction
    await query('START TRANSACTION');

    await query(`
      UPDATE \`orders\`
      SET order_status = 'Cancelled'
      WHERE order_id = ?
    `, [session_order_id]);

    await query(`
      UPDATE \`invoice\`
      SET status = 'Cancelled'
      WHERE order_id = ?
    `, [session_order_id]);

    await query(`
      UPDATE \`receipt\`
      SET receipt_status = 'Cancelled'
      WHERE order_id = ?
    `, [session_order_id]);

    req.session.order_id = '';

    // Create a new order
    const newOrderResult = await query(`
      SELECT MAX(CONVERT(bill_number, UNSIGNED INTEGER)) AS bill_number
      FROM \`orders\`
      WHERE order_status != 'Cancelled'
    `);

    const newBillNumber = (newOrderResult[0]?.bill_number || 0) + 1;

    const newOrderData = {
      order_status: 'New',
      record_type: 'POS',
      order_date: new Date().toISOString().split('T')[0],
      bill_number: newBillNumber,
      link_stock: 1,
    };

    const insertResult = await query('INSERT INTO `orders` SET ?', newOrderData);

    const newOrderId = insertResult.insertId;
    req.session.order_id = newOrderId;

    // Commit the transaction
    await query('COMMIT');

    res.send(`Order, invoice, and receipt cancelled successfully. New order created with ID: ${newOrderId}`);
  } catch (error) {
    // Rollback the transaction in case of an error
    await query('ROLLBACK');
    console.error(error);
    res.status(500).send("An error occurred while cancelling the order and creating a new one.");
  }
});


app.post('/insertorder_item', (req, res, next) => {

  let data = {qty: req.body.qty,
              unit_price: req.body.unit_price,
              order_id: req.body.order_id,
              item_title: req.body.item_title,
              model: req.body.model,
              module: req.body.module,
              cost_price: req.body.cost_price,
              discount_percentage: req.body.discount_percentage,
              mark_up: req.body.mark_up,
              qty_for_invoice: req.body.qty_for_invoice,
              mark_up_type: req.body.mark_up_type,
              item_code: req.body.item_code,
              price_from_supplier: req.body.price_from_supplier,
              ref_code: req.body.ref_code,
              discount_type: req.body.discount_type,
              vat: req.body.vat,
              record_id: req.body.record_id,
              quote_items_id: req.body.quote_items_id,
              item_code_backup: req.body.item_code_backup,
              unit: req.body.unit,
              description: req.body.description,
              remarks: req.body.remarks,
              month: req.body.month,
              year: req.body.year,
              ot_hourly_rate: req.body.ot_hourly_rate,
              ph_hourly_rate: req.body.ph_hourly_rate,
              employee_ot_hours: req.body.employee_ot_hours,
              employee_ph_hours: req.body.employee_ph_hours,
              part_no: req.body.part_no,
              admin_charges: req.body.admin_charges,
              transport_charges: req.body.transport_charges,
              quote_id: req.body.quote_id,
              drawing_number: req.body.drawing_number,
              drawing_title: req.body.drawing_title,
              drawing_revision: req.body.drawing_revision,
            
            };

  let sql = "INSERT INTO order_item SET ?";
  let query = db.query(sql, data,(err, result) => {
    if (err) {
      return res.status(400).send({
              data: err,
              msg:'failed'
            });
    } else {
          return res.status(200).send({
            data: result,
            msg:'Success'
          });
    }
  });
});


app.post("/updateOrderItem", (req, res, next) => {
  const qty = req.body.qty; // Assuming the new status is provided in the request body
  const order_item_id = req.body.order_item_id;
  // Construct the SQL query
  let sql = "UPDATE order_item SET qty = ? WHERE order_item_id = ?";
  let query = db.query(sql, [qty, order_item_id], (err, result) => {
    if (err) {
      console.log("Error updating order status:", err);
      return res.status(500).send({ error: "Internal server error" });
    } else {
      if (result.affectedRows === 0) {
        return res.status(404).send({ error: "Enquiry not found" });
      }
      return res.status(200).send({
        message: "Order status updated successfully",
        data: result,
      });
    }
  });
});

app.post("/updateDiscount", (req, res, next) => {
  const discounted_amount = req.body.discounted_amount; // Assuming the new status is provided in the request body
  const order_item_id = req.body.order_item_id;
  // Construct the SQL query
  let sql = "UPDATE order_item SET discounted_amount = ? WHERE order_item_id = ?";
  let query = db.query(sql, [discounted_amount, order_item_id], (err, result) => {
    if (err) {
      console.log("Error updating order status:", err);
      return res.status(500).send({ error: "Internal server error" });
    } else {
      if (result.affectedRows === 0) {
        return res.status(404).send({ error: "Enquiry not found" });
      }
      return res.status(200).send({
        message: "Order status updated successfully",
        data: result,
      });
    }
  });
});

app.post("/updateDiscountType", (req, res, next) => {
  const discount_type = req.body.discount_type;
  const order_item_id = req.body.order_item_id;
  let discounted_amount = req.body.discounted_amount;

  // Check if the discount type is "no discount", if so, set the discounted amount to 0
  if (discount_type === "No discount") {
    discounted_amount = 0;
  }

  // Construct the SQL query
  let sql = "UPDATE order_item SET discount_type = ?, discounted_amount = ? WHERE order_item_id = ?";
  let query = db.query(sql, [discount_type, discounted_amount, order_item_id], (err, result) => {
    if (err) {
      console.log("Error updating order status:", err);
      return res.status(500).send({ error: "Internal server error" });
    } else {
      if (result.affectedRows === 0) {
        return res.status(404).send({ error: "Enquiry not found" });
      }
      return res.status(200).send({
        message: "Order status updated successfully",
        data: result,
      });
    }
  });
});


app.post("/updateGSTStatus", (req, res, next) => {
  const gst_status = req.body.gst_status; // Assuming the new status is provided in the request body
  const order_id = req.body.order_id;

  // Construct the SQL query
  let sql = "UPDATE `orders` SET gst_status = ? WHERE order_id = ?";
  let query = db.query(sql, [gst_status, order_id], (err, result) => {
    if (err) {
      console.log("Error updating order status:", err);
      return res.status(500).send({ error: "Internal server error" });
    } else {
      if (result.affectedRows === 0) {
        return res.status(404).send({ error: "Enquiry not found" });
      }
      return res.status(200).send({
        message: "Order status updated successfully",
        data: result,
      });
    }
  });
});

app.post("/updateShippingCharge", (req, res, next) => {
  const shipping_charge = req.body.shipping_charge; // Assuming the new status is provided in the request body
  const order_id = req.body.order_id;

  // Construct the SQL query
  let sql = "UPDATE `orders` SET shipping_charge = ? WHERE order_id = ?";
  let query = db.query(sql, [shipping_charge, order_id], (err, result) => {
    if (err) {
      console.log("Error updating order status:", err);
      return res.status(500).send({ error: "Internal server error" });
    } else {
      if (result.affectedRows === 0) {
        return res.status(404).send({ error: "Enquiry not found" });
      }
      return res.status(200).send({
        message: "Order status updated successfully",
        data: result,
      });
    }
  });
});

app.post('/generateBill', async (req, res) => {
  try {
    const {
      mode_of_payment,
      gst_selected,
      order_date
    } = req.body;
    const receipt_amount = req.body.subtotal_amount;

    const session_order_id = req.body.order_id || '';

  //  let invoice_amount = await getTotalAmount(session_order_id);
  const  invoice_amount = Math.round(receipt_amount);
    const rounded_receipt_amount = Math.round(receipt_amount);

    // Get the next invoice code based on GST selection
    const invoice_code_query = gst_selected === 'ON' ? `
      SELECT MAX(CONVERT(REPLACE(invoice_code, 'INV - ', ''), UNSIGNED INTEGER)) AS invoice_code
      FROM invoice
      WHERE status != 'Cancelled' AND gst_status = 'ON'
    ` : `
      SELECT MAX(CONVERT(REPLACE(invoice_code, 'INV - ', ''), UNSIGNED INTEGER)) AS invoice_code
      FROM invoice
      WHERE status != 'Cancelled'
    `;

    const invoice_code_result = await queryDB(invoice_code_query);
    let invoice_code = (invoice_code_result[0].invoice_code || 1000) + 1;
    invoice_code = `INV - ${invoice_code.toString().padStart(3, '0')}`;

    let fa = {
      invoice_amount,
      invoice_date: order_date,
      order_id: session_order_id,
      discount: 0,
      gst_status: gst_selected,
      creation_date: new Date(),
      vat: 1,
      mode_of_payment
    };

    fa.status = invoice_amount <= rounded_receipt_amount ? 'Paid' : 'Partial Payment';

    const existing_invoice = await queryDB('SELECT * FROM invoice WHERE order_id = ?', [session_order_id]);

    if (existing_invoice.length > 0) {
      const invoiceRec = existing_invoice[0];
      await queryDB('UPDATE invoice SET ? WHERE order_id = ?', [fa, session_order_id]);
      completeOrder(session_order_id, invoiceRec.invoice_id, rounded_receipt_amount, invoice_amount, res);
    } else {
      fa.invoice_date = invoice_code;
      fa.invoice_date = 'Client';
      const insert_result = await queryDB('INSERT INTO invoice SET ?', [fa]);
      const invoice_id = insert_result.insertId;
      completeOrder(session_order_id, invoice_id, rounded_receipt_amount, invoice_amount, res);
    }
  } catch (err) {
    res.status(500).send(err.toString());
  }
});

// const getTotalAmount = async (order_id) => {
//   return new Promise((resolve, reject) => {
//     db.query('SELECT SUM(qty*unit_price) AS total FROM order_item WHERE order_id = ?', [order_id], (err, result) => {
//       if (err) return reject(err);
//       resolve(result[0].total || 0);
//     });
//   });
// };

const completeOrder = async (order_id, invoice_id, receipt_amount, invoice_amount, res) => {
  try {
    const items = await queryDB('SELECT * FROM order_item WHERE order_id = ?', [order_id]);

    for (const item of items) {
      let fa = {
        invoice_id,
        record_id: item.record_id,
        qty: item.qty,
        unit_price: item.unit_price,
        cost_price: item.cost_price,
        item_title: item.item_title,
        item_code: item.item_code,
        model: item.model,
        order_item_id: item.order_item_id,
        vat: item.vat,
        discount_type: item.discount_type,
        discount_percentage: item.discount_percentage,
      };

      const existing_invoice_item = await queryDB('SELECT * FROM invoice_item WHERE invoice_id = ? AND record_id = ?', [invoice_id, item.record_id]);

      if (existing_invoice_item.length > 0) {
        await queryDB('UPDATE invoice_item SET ? WHERE invoice_item_id = ?', [fa, existing_invoice_item[0].invoice_item_id]);
      } else {
        await queryDB('INSERT INTO invoice_item SET ?', [fa]);
      }
    }

    if (receipt_amount > 0) {
      await queryDB('UPDATE setting SET value = (value + 1) WHERE key_text = "nextReceiptCode"');
      const receipt_code_result = await queryDB('SELECT value FROM setting WHERE key_text = "nextReceiptCode"');
      let receipt_code = receipt_code_result[0].value;

      const existing_receipt = await queryDB('SELECT * FROM receipt WHERE order_id = ?', [order_id]);

      let recpInvAmount = invoice_amount <= receipt_amount ? invoice_amount : receipt_amount;
      let fa = {
        amount: recpInvAmount,
        order_id,
        receipt_date: new Date(),
        receipt_status: 'Paid',
        creation_date: new Date(),
      };

      if (existing_receipt.length > 0) {
        await queryDB('UPDATE receipt SET ? WHERE order_id = ?', [fa, order_id]);
      } else {
        fa.receipt_code = `RCPT - ${receipt_code}`;
        await queryDB('INSERT INTO receipt SET ?', [fa]);
      }
    }

    updateOrderStatus(order_id, invoice_id,receipt_amount, res);
  } catch (err) {
    res.status(500).send(err.toString());
  }
};

const updateOrderStatus = async (order_id, invoice_id,receipt_amount, res) => {
  try {
    let orderStatus = receipt_amount > 0 ? 'Paid' : 'Due';
    await queryDB('UPDATE `orders` SET order_status = ?,order_date = ? WHERE order_id = ?', [orderStatus, new Date(), order_id]);
    res.send({ order_id });
  } catch (err) {
    res.status(500).send(err.toString());
  }
};

// Helper function to use promises with db.query
const queryDB = (query, params) => {
  return new Promise((resolve, reject) => {
    db.query(query, params, (err, result) => {
      if (err) return reject(err);
      resolve(result);
    });
  });
};


app.get("/secret-route", userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send("This is the secret content. Only logged in users can see that!");
});

module.exports = app;
