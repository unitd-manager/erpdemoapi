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

app.get('/createNewOrder', async (req, res) => {
  try {
    const result = await query(`
      SELECT MAX(CONVERT(bill_number, UNSIGNED INTEGER)) AS bill_number
      FROM \`orders\`
      WHERE order_status != 'Cancelled'
    `);

    const bill_number = (result[0]?.bill_number || 0) + 1;

    await query('UPDATE setting SET value = (value + 1) WHERE key_text = "nextOrderCode"');

    const receipt_code_result = await query('SELECT value FROM setting WHERE key_text = "nextOrderCode"');

    if (!receipt_code_result || !receipt_code_result[0] || !receipt_code_result[0].value) {
      throw new Error('Failed to retrieve nextOrderCode value');
    }

    const order_code = `ORD - ${receipt_code_result[0].value}`;

    const fa = {
      order_status: 'New',
      record_type: 'POS',
      gst_status: 'ON',
      order_date: new Date().toISOString().split('T')[0],
      bill_number: bill_number,
      link_stock: 1,
      order_code,
    };

    const insertResult = await query('INSERT INTO `orders` SET ?', fa);

    const order_id = insertResult.insertId;
    req.session.order_id = order_id;
    res.send(`New order created with ID: ${order_id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the order.");
  }
});

app.post("/cancelOrder", async (req, res) => {
  try {
    const session_order_id = req.body.order_id || '';

    if (!session_order_id) {
      return res.status(400).send("No order ID in session.");
    }

    console.log(`Cancelling order with ID: ${session_order_id}`);

    const orderUpdateResult = await query(`
      UPDATE orders
      SET order_status = 'Cancelled'
      WHERE order_id = ?
    `, [session_order_id]);

    console.log(`Order update result: ${JSON.stringify(orderUpdateResult)}`);

    const invoiceUpdateResult = await query(`
      UPDATE invoice
      SET status = 'Cancelled'
      WHERE order_id = ?
    `, [session_order_id]);

    console.log(`Invoice update result: ${JSON.stringify(invoiceUpdateResult)}`);

    const receiptUpdateResult = await query(`
      UPDATE receipt
      SET receipt_status = 'Cancelled'
      WHERE order_id = ?
    `, [session_order_id]);

    console.log(`Receipt update result: ${JSON.stringify(receiptUpdateResult)}`);

    res.send("Order, invoice, and receipt cancelled successfully.");
  } catch (error) {
    console.error("Error occurred while cancelling the order:", error);
    res.status(500).send("An error occurred while cancelling the order.");
  }
});

app.get('/getOrders', (req, res, next) => {
  db.query(`
    SELECT 
      o.*
   
     ,co.company_name
    FROM 
      orders o 
  LEFT JOIN (company co) ON (co.company_id = o.company_id)

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

app.post("/updateDiscountCharge", (req, res, next) => {
  const discount = req.body.discount; // Assuming the new status is provided in the request body
  const order_id = req.body.order_id;

  // Construct the SQL query
  let sql = "UPDATE `orders` SET discount = ? WHERE order_id = ?";
  let query = db.query(sql, [discount, order_id], (err, result) => {
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


app.get("/getClientsByName", (req, res, next) => {
  const { keyword } = req.query; // Extract query parameters

  db.query(
    `SELECT p.company_id
 
  ,p.company_name
  

  FROM company p 

    where p.company_name LIKE CONCAT('%',  ${db.escape(keyword)}, '%')
     GROUP BY p.company_id`,
    (err, result) => {
      if (err) {
        console.log("error: ", err);
        return res.status(400).send({
          data: err,
          msg: "failed",
        });
      } else {
        return res.status(200).send({
          data: result,
          msg: "Success",
        });
      }
    }
  );
});



app.post("/updateClientId", (req, res, next) => {
  const company_id = req.body.company_id; // Assuming the new status is provided in the request body
  const order_id = req.body.order_id;

  // Construct the SQL query
  let sql = "UPDATE `orders` SET company_id = ? WHERE order_id = ?";
  let query = db.query(sql, [company_id, order_id], (err, result) => {
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

app.post("/removeClientId", (req, res, next) => {
  const order_id = req.body.order_id;

  // Construct the SQL query
  let sql = "UPDATE `orders` SET company_id = NULL WHERE order_id = ?";
  let query = db.query(sql, [ order_id], (err, result) => {
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

app.post('/generateBillAndCreateOrder', async (req, res) => {
  try {
    // Extract request body parameters
    const { mode_of_payment, gst_selected, order_date, subtotal_amount, order_id, amount_given } = req.body;

    // Create a new order
    const newOrderResult = await queryDB(`
      SELECT MAX(CONVERT(bill_number, UNSIGNED INTEGER)) AS bill_number
      FROM \`orders\`
      WHERE order_status != 'Cancelled'
    `);

    const bill_number = (newOrderResult[0]?.bill_number || 0) + 1;

    const newOrder = {
      order_status: 'New',
      record_type: 'POS',
      gst_status: 'ON',
      order_date: new Date().toISOString().split('T')[0],
      bill_number,
      link_stock: 1,
    };

    const insertOrderResult = await queryDB('INSERT INTO `orders` SET ?', newOrder);
    const newOrderId = insertOrderResult.insertId;

    // Continue with bill generation using the new order ID if order_id is not provided
    const session_order_id = order_id || newOrderId;
    const receipt_amount = amount_given;
    const invoice_amount = Math.round(subtotal_amount); // Use subtotal_amount for invoice_amount
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
      invoice_amount, // Set invoice_amount to subtotal_amount
      invoice_code,
      invoice_date: new Date().toISOString().split('T')[0],
      order_id: session_order_id,
      invoice_source_id: session_order_id,
      discount: 0,
      gst_status: gst_selected,
      creation_date: new Date(),
      source_type: 'POS',
      vat: 1,
      mode_of_payment
    };

    fa.status = invoice_amount <= rounded_receipt_amount ? 'Paid' : 'Partial Payment';

    const existing_invoice = await queryDB('SELECT * FROM invoice WHERE order_id = ?', [session_order_id]);

    if (existing_invoice.length > 0) {
      const invoiceRec = existing_invoice[0];
      await queryDB('UPDATE invoice SET ? WHERE order_id = ?', [fa, session_order_id]);
      await completeOrder(session_order_id, invoiceRec.invoice_id, rounded_receipt_amount, invoice_amount,mode_of_payment, res);
    } else {
      fa.invoice_code = invoice_code;
      const insert_result = await queryDB('INSERT INTO invoice SET ?', [fa]);
      const invoice_id = insert_result.insertId;
      await completeOrder(session_order_id, invoice_id, rounded_receipt_amount, invoice_amount,mode_of_payment, res);
    }
  } catch (err) {
    res.status(600).send(err.toString());
  }
});

const completeOrder = async (order_id, invoice_id, receipt_amount, invoice_amount,mode_of_payment, res) => {
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
        receipt_code,
        mode_of_payment 
      };


      let receipt_id;
      if (existing_receipt.length > 0) {
        receipt_id = existing_receipt[0].receipt_id;
        await queryDB('UPDATE receipt SET ? WHERE order_id = ?', [fa, order_id]);
      } else {
        fa.receipt_code = `RCPT - ${receipt_code}`;

        const [result] = await queryDB('INSERT INTO receipt SET ?', [fa]);
        receipt_id = result.insertId;
      }

      const receiptHistoryData = {
        invoice_id,
        receipt_id,
        amount: recpInvAmount,
        creation_date: new Date()
      };
      const existingReceiptHistory = await queryDB('SELECT * FROM invoice_receipt_history WHERE invoice_id = ? AND receipt_id = ?', [invoice_id, receipt_id]);
      if (existingReceiptHistory.length > 0) {
        await queryDB('UPDATE invoice_receipt_history SET ? WHERE invoice_receipt_history_id = ?', [receiptHistoryData, existingReceiptHistory[0].invoice_receipt_history_id]);
      } else {
        await queryDB('INSERT INTO invoice_receipt_history SET ?', [receiptHistoryData]);
      }
    }

    let orderStatus = receipt_amount > 0 ? 'Paid' : 'Due';
    await queryDB('UPDATE `orders` SET order_status = ?, order_date = ? WHERE order_id = ?', [orderStatus, new Date(), order_id]);
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
