const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/Database.js');
const userMiddleware = require('../middleware/UserModel.js');
var md5 = require('md5');
const fileUpload = require('express-fileupload');
const _ = require('lodash');
const mime = require('mime-types')
var bodyParser = require('body-parser');
var cors = require('cors');
var app = express();
app.use(cors());

app.use(fileUpload({
  createParentPath: true
}));

app.get('/getProjectSalesOrder', (req, res, next) => {
  db.query(`SELECT o.project_order_id
  ,o.order_date
  ,o.project_enquiry_id
  ,o.project_type
  ,q.project_enquiry_id
  ,q.project_quote_id
  ,c.company_id
  ,c.company_name
  ,c.company_name_arb
  ,o.creation_date
  ,o.order_status
  ,o.order_status_arb
  ,o.invoice_terms
  ,o.notes
  ,o.order_code
  ,o.shipping_first_name
  ,o.cust_address1 AS shipping_address1
  ,o.shipping_address2
  ,o.shipping_address_country
  ,o.shipping_address_po_code 
  ,q.quote_code 
  FROM project_orders o 
  LEFT JOIN project_quote q ON o.project_quote_id = q.project_quote_id 
  LEFT JOIN project_enquiry opt ON (opt.project_enquiry_id = q.project_enquiry_id) 
  LEFT JOIN company c ON (c.company_id = opt.company_id) WHERE o.project_order_id !=''
  GROUP BY o.project_order_id 
  ORDER BY o.project_order_id DESC`,
  (err, result) => {
    if (err) {
      console.log('error: ', err)
      return res.status(400).send({
        data: err,
        msg: 'failed',
      })
    } else {
      return res.status(200).send({
        data: result,
        msg: 'Success',
})
}
  }
);
});
app.post('/getOrdersByIds', (req, res, next) => {
  db.query(`SELECT DISTINCT r.project_order_item_id 
  ,r.record_id
  ,r.project_order_id
  ,o.order_code
  ,r.qty
  ,r.qty_arb
  ,r.unit_price
  ,r.item_title
  ,r.item_title_arb
  ,r.model
  ,r.module
  ,r.supplier_id 
  ,r.invoice_id 
  ,r.cost_price
  ,r.unit
  ,r.unit_arb
  ,r.project_quote_id
  ,r.project_order_id 
  FROM project_order_item r  
 LEFT JOIN project_orders o ON (o.project_order_id = r.project_order_id) WHERE o.project_order_id = ${db.escape(req.body.project_order_id)}`,
    (err, result) => {

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

    }
  );
});
app.get('/getProjectQuote', (req, res, next) => {
  db.query(`SELECT q.project_quote_id ,
  q.project_enquiry_id,
  q.project_enquiry_id,
  q.quote_code,
  q.quote_code_arb,
  q.quote_date,
  q.quote_date_arb,
  q.quote_status,
  q.quote_status_arb,
  q.creation_date,
  q.modification_date,
  q.currency_item,
  q.note,
  q.company_id,
  q.contact_id      
FROM project_quote q
WHERE q.project_quote_id != '' 
 AND q.quote_status != 'Cancelled' `,
    (err, result) => {
      if (err) {
        return res.status(400).send({
              data: err,
              msg:'Failed'
            });
      } else {
            return res.status(200).send({
              data: result,
              msg:'Success'
            });

      }

    }
  );
});

app.post('/getProjectOrderById', (req, res, next) => {
  db.query(`SELECT o.project_order_id
  ,o.order_date
  ,o.project_enquiry_id
  ,o.project_type
  ,q.project_enquiry_id
  ,opt.office_ref_no
  ,c.company_id
  ,c.company_name
  ,c.company_name_arb
  ,o.creation_date
  ,o.order_status
  ,o.order_status_arb
  ,o.invoice_terms
  ,o.modification_date
  ,o.created_by
  ,o.modified_by
  ,o.notes
  ,o.order_code
  ,o.shipping_first_name
  ,o.cust_address1 AS shipping_address1
  ,o.shipping_address2
  ,o.shipping_address_country
  ,o.shipping_address_po_code 
  ,q.quote_code 
  ,q.quote_code_arb
  ,(select(sum(poi.cost_price)))as netAmount
  FROM project_orders o 
  LEFT JOIN project_quote q ON o.project_quote_id = q.project_quote_id 
  LEFT JOIN project_enquiry opt ON (opt.project_enquiry_id = q.project_enquiry_id) 
  LEFT JOIN project_order_item poi ON (o.project_order_id = poi.project_order_id) 
  LEFT JOIN company c ON (c.company_id = opt.company_id) WHERE o.project_order_id = ${db.escape(req.body.project_order_id)} `,
    (err, result) => {
      if (err) {
         return res.status(400).send({
              data: err,
              msg:'Failed'
            });
      } else {
            return res.status(200).send({
              data: result[0],
              msg:'Success'
            });

      }

  }
 );
});
app.post('/insertorder_item', (req, res, next) => {

  let data = {qty: req.body.qty,
              unit_price: req.body.unit_price,
              project_order_id: req.body.project_order_id,
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
              project_quote_id: req.body.project_quote_id,
              drawing_number: req.body.drawing_number,
              drawing_title: req.body.drawing_title,
              drawing_revision: req.body.drawing_revision,
            
            };

  let sql = "INSERT INTO project_order_item SET ?";
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

app.get('/checkOrderItems', (req, res, next) => {
  db.query(
    `SELECT project_quote_id FROM project_order_item WHERE project_quote_id !=''`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
          msg: 'Failed'
        });
      } else {
        const quoteItemsIds = result.map((row) => row.quote_id);
        return res.status(200).send({
          data: quoteItemsIds,
          msg: 'Success'
        });
      }
    }
  );
});

app.post('/editFinances', (req, res, next) => {
  db.query(`UPDATE project_orders
            SET invoice_terms=${db.escape(req.body.invoice_terms)}
            ,notes=${db.escape(req.body.notes)}
             ,modified_by=${db.escape(req.body.modified_by)}
            ,company_id=${db.escape(req.body.company_id)}
            ,order_status=${db.escape(req.body.order_status)}
            ,order_date=${db.escape(req.body.order_date)}
            ,shipping_first_name=${db.escape(req.body.shipping_first_name)}
            ,shipping_address1=${db.escape(req.body.shipping_address1)}
            ,shipping_address2=${db.escape(req.body.shipping_address2)}
            ,shipping_address_country=${db.escape(req.body.shipping_address_country)}
            ,shipping_address_po_code=${db.escape(req.body.shipping_address_po_code)}
            ,delivery_date=${db.escape(req.body.delivery_date)}
            ,creation_date=${db.escape(req.body.creation_date)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,delivery_terms=${db.escape(req.body.delivery_terms)}
            WHERE project_order_id =  ${db.escape(req.body.project_order_id)}`,
    (err, result) => {
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
     }
  );
});


app.post('/insertOrder', (req, res, next) => {

  let data = {order_status: req.body.order_status,
    payment_method: req.body.payment_method,
    shipping_first_name: req.body.cust_company_name,
    shipping_last_name: req.body.shipping_last_name,
    shipping_email: req.body.shipping_email,
    shipping_address1: req.body.cust_address1,
    shipping_address2: req.body.cust_address2,
    shipping_address_city: req.body.cust_address_city,
    shipping_address_area: req.body.shipping_address_area,
    shipping_address_state: req.body.cust_address_state,
    shipping_address_country_code: req.body.shipping_address_country_code,
    shipping_address_po_code: req.body.cust_address_po_code,
    shipping_phone: req.body.shipping_phone,
    cust_first_name: req.body.cust_first_name,
    cust_last_name: req.body.cust_last_name,
    cust_email: req.body.cust_email,
    cust_address1: req.body.cust_address1,
    cust_address2: req.body.cust_address2,
    cust_address_city: req.body.cust_address_city,
    cust_address_area: req.body.cust_address_area,
    cust_address_state: req.body.cust_address_state,
    cust_address_country: req.body.cust_address_country,
    cust_address_po_code: req.body.cust_address_po_code,
    cust_phone: req.body.cust_phone,
    memo: req.body.memo,
    project_quote_id: req.body.project_quote_id,
    creation_date: new Date().toISOString().slice(0, 19).replace('T', ' '),
    modification_date: req.body.modification_date,
    flag: req.body.flag,
    record_type: req.body.record_type,
    module: req.body.module,
    currency: req.body.currency,
    order_date: new Date().toISOString().split('T')[0],
    order_code: req.body.order_code,
    shipping_charge: req.body.shipping_charge,
    add_gst_to_total: req.body.add_gst_to_total,
    invoice_terms: req.body.invoice_terms,
    notes: req.body.notes,
    shipping_address_country: req.body.cust_address_country,
    address_country: req.body.address_country,
    delivery_to_text: req.body.delivery_to_text,
    created_by: req.body.created_by,
    modified_by: req.body.modified_by,
    discount: req.body.discount,
    name_of_company: req.body.name_of_company,
    vat: req.body.vat,
    cust_company_name: req.body.cust_company_name,
    site_id: req.body.site_id,
    manual_invoice: req.body.manual_invoice,
    apply_general_vat: req.body.apply_general_vat,
    link_stock: req.body.link_stock,
    selling_company: req.body.selling_company,
    link_account: req.body.link_account,
    project_enquiry_id: req.body.project_enquiry_id,
    start_date : req.body. start_date ,
    end_date: req.body.end_date,
    auto_create_invoice: req.body.auto_create_invoice,
    delivery_date: req.body.delivery_date,
    delivery_terms: req.body.delivery_terms,
    quote_title: req.body.quote_title,
    project_type: req.body.project_type,
    cust_fax: req.body.cust_fax,
    created_by: req.body.created_by,
   shipping_fax: req.body.shipping_fax};

  let sql = "INSERT INTO project_orders SET ?";
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

app.delete('/deleteorder_item/:quoteId', (req, res) => {
  const quoteId = req.params.quoteId;

  // Construct and execute the SQL query to delete old order items by quote_id
  const sql = "DELETE FROM project_order_item WHERE project_quote_id = ?";
  db.query(sql, [quoteId], (err, result) => {
    if (err) {
      console.error('Error deleting order items:', err);
      return res.status(500).json({
        error: 'Failed to delete order items',
      });
    }

    console.log(`Deleted old order items with quote_id ${quoteId}`);
    return res.status(200).json({
      message: 'Order items deleted successfully',
    });
  });
});

app.post('/getReceiptByIds', (req, res, next) => {
  db.query(`SELECT DISTINCT r.receipt_id
  ,r.project_receipt_id 
  ,o.project_order_id
  ,r.receipt_code
  ,r.receipt_status
  ,r.amount
  ,r.receipt_date
  ,r.mode_of_payment
  ,r.remarks
  ,r.creation_date
  ,r.created_by
  ,r.modification_date
  ,r.modified_by 
  FROM project_receipt r  
   LEFT JOIN project_invoice i ON (i.project_invoice_id = ih.project_invoice_id) 
 LEFT JOIN project_orders o ON (o.project_order_id = i.project_order_id) WHERE o.project_order_id = ${db.escape(req.body.project_order_id)}`,
    (err, result) => {

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

    }
  );
});

app.post('/getInvoiceById', (req, res, next) => {
  db.query(`SELECT i.project_invoice_id
  ,i.project_invoice_code
  ,co.company_name
  ,i.status
  ,i.project_invoice_date
  ,i.project_invoice_amount
  ,i.project_invoice_due_date
  ,o.project_order_id
  ,o.order_code
  ,(select sum(it.total_cost)) as InvoiceAmount
  from project_invoice i
  LEFT JOIN project_orders o ON (o.project_order_id = i.project_order_id) 
   LEFT JOIN project_invoice_item it ON (it.project_invoice_id = i.project_invoice_id) 
  LEFT JOIN company co ON (co.company_id = o.company_id) 
  WHERE i.project_order_id = ${db.escape(req.body.project_order_id)} 
  Group by i.project_invoice_id`,
    (err, result) => {

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

    }
  );
});
app.post('/getQuoteLineItemsById', (req, res, next) => {
  db.query(`SELECT
            qt.* 
            FROM project_quote_items qt 
             WHERE qt.project_quote_id =  ${db.escape(req.body.project_quote_id)}`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          msg: 'No result found'
        });
      }else {
            return res.status(200).send({
              data: result,
              msg:'Success'
            });
        }
 
    }
  );
});
app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;