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


app.post('/getSalesReturnId', (req, res, next) => {
  db.query(`SELECT o.proj_sales_return_id  
  ,o.return_date
  , o.creation_date
  ,o.modification_date
  ,o.project_invoice_id
  ,i.project_invoice_code
  ,o.status
  ,i.project_invoice_code
  ,(select sum(total_cost)) as InvoiceAmount
  ,o.created_by
  ,o.modified_by
  from proj_sales_return o
  LEFT JOIN project_invoice i ON i.project_invoice_id = o.project_invoice_id
  LEFT JOIN project_invoice_item it ON it.project_invoice_id = i.project_invoice_id
   WHERE o.proj_sales_return_id = ${db.escape(req.body.proj_sales_return_id)}`,
          (err, result) => {
       
      if (result.length === 0) {
        return res.status(400).send({
          msg: 'No result found'
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
app.get('/getSalesReturns', (req, res, next) => {
    db.query(`SELECT o.proj_sales_return_id  
    ,o.return_date
    , o.creation_date
    ,o.modification_date
    ,o.project_invoice_id
    ,i.project_invoice_code
    ,o.status
    ,i.project_invoice_code
    ,(select sum(total_cost)) as InvoiceAmount
    from proj_sales_return o
    LEFT JOIN project_invoice i ON i.project_invoice_id = o.project_invoice_id
    LEFT JOIN project_invoice_item it ON it.project_invoice_id = i.project_invoice_id
     WHERE o.proj_sales_return_id !=''
     Group by o.proj_sales_return_id
     ORDER BY o.proj_sales_return_id DESC`,
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

  app.get('/getTranslationforTradingProjSalesReturn', (req, res, next) => {
    db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdTradingSalesReturn%'`,
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
  

  app.post('/getSalesReturnId', (req, res, next) => {
    db.query(`SELECT o.proj_sales_return_id 
    ,o.return_date
    , o.creation_date
    ,o.created_by
    ,o.modified_by
    ,o.modification_date
    ,o.project_invoice_id
    ,i.project_invoice_code
    ,i.status AS invoice_status
    ,i.status AS invoice_status_arb
    ,o.order_id
    ,o.status
    ,o.status_arb
    ,i.project_invoice_code
    ,(select sum(total_cost)) as InvoiceAmount
    from proj_sales_return o
    LEFT JOIN project_invoice i ON i.project_invoice_id = o.project_invoice_id
    LEFT JOIN project_invoice_item it ON it.project_invoice_id = i.project_invoice_id
     WHERE o.proj_sales_return_id = ${db.escape(req.body.proj_sales_return_id)}`,
            (err, result) => {
         
              if (err) {
                console.error('Database error:', err);
                return res.status(500).send({
                    error: 'Database error occurred'
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
  app.get('/getInvoice', (req, res, next) => {
    db.query(`SELECT
    i.project_invoice_id,
    i.project_invoice_code,
    i.project_invoice_due_date,
    i.project_invoice_date,
    i.project_invoice_amount,
    i.selling_company,
    i.start_date,
    i.end_date,
    i.quote_code,
    i.po_number,
    i.project_location,
    i.project_reference,
    i.so_ref_no,
    i.code,
    i.reference,
    i.project_invoice_terms,
    i.attention,
    i.status,
    c.company_name,
    c.company_id
  FROM
  project_invoice i
  LEFT JOIN
  proj_sales_return sr ON i.project_invoice_id = sr.project_invoice_id
    LEFT JOIN (company c) ON (c.company_id=i.company_id)    
  
    
  WHERE
    i.project_invoice_id != '' AND
    i.status != LOWER('Paid') AND
    sr.project_invoice_id IS NULL
  ORDER BY
    i.project_invoice_date DESC`,
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
  

  app.post('/getInvoiceItemsById', (req, res, next) => {
    db.query(`SELECT it.item_title,
    it.project_invoice_item_id,
  i.project_invoice_id,
  it.description,
  it.description_arb,
  it.total_cost,
  it.unit,
  it.qty,
  it.qty_returned,
  it.unit_price,
  it.remarks,
  o.project_order_id
  FROM project_invoice_item it
  LEFT JOIN (project_invoice i) ON (i.project_invoice_id=it.project_invoice_id)
  LEFT JOIN (project_orders o) ON (o.project_order_id=i.project_invoice_source_id)
  WHERE i.project_invoice_id = ${db.escape(req.body.project_invoice_id)}`,
            (err, result) => {
         
        if (err) {
          return res.status(400).send({
            msg: 'No result found'
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

 app.post('/getReturnInvoiceItemsById', (req, res, next) => {
    db.query(`SELECT it.proj_sales_return_history_id ,
    it.return_date,
  i.project_invoice_id,
  it.project_invoice_item_id,
  it.price,
  it.notes,
  it.qty_return,
  it.project_order_id,
  iv.item_title,
  iv.item_title_arb
  FROM proj_sales_return_history it
  LEFT JOIN (proj_sales_return i) ON (i.project_invoice_id=it.project_invoice_id)
  LEFT JOIN (project_invoice_item iv) ON (iv.project_invoice_item_id=it.project_invoice_item_id)
  WHERE i.project_invoice_id =${db.escape(req.body.project_invoice_id)}`,
            (err, result) => {
         
              if (err) {
                console.error('Database error:', err);
                return res.status(500).send({
                    error: 'Database error occurred'
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

  app.post('/insertSalesReturn', (req, res, next) => {

    let data = {
      // proj_sales_return_id : req.body.proj_sales_return_id 
       return_date: req.body.return_date
      , creation_date: req.body.creation_date
      , modification_date: req.body.modification_date
      , project_invoice_id: req.body.project_invoice_id
      ,project_order_id: req.body.project_order_id
      ,status: req.body.status
      ,created_by: req.body.created_by
   };
    let sql = "INSERT INTO proj_sales_return SET ?";
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
  
  app.post('/editSalesReturn', (req, res, next) => {
    db.query(`UPDATE proj_sales_return
              SET return_date = ${db.escape(req.body.return_date)}
              ,modification_date = ${db.escape(req.body.modification_date)}
              ,modified_by = ${db.escape(req.body.modified_by)}
              ,status=${db.escape(req.body.status)}
              ,status_arb=${db.escape(req.body.status_arb)}
  
               WHERE proj_sales_return_id =  ${db.escape(req.body.proj_sales_return_id)}`,
      (err, result) => {
        if (err) {
          console.log("error: ", err);
          return; 
        } else {
              return res.status(200).send({
                data: result,
                msg:'Success'
              });
        }
       }
    );
  });

  app.get('/checkInvoiceItem', (req, res, next) => {
    db.query(
      `SELECT project_invoice_item_id FROM proj_sales_return_history`,
      (err, result) => {
        if (err) {
          return res.status(400).send({
            data: err,
            msg: 'Failed'
          });
        } else {
          const quoteItemsIds = result.map((row) => row.project_invoice_item_id);
          return res.status(200).send({
            data: quoteItemsIds,
            msg: 'Success'
          });
        }
      }
    );
  });
app.post('/insertSalesReturnHistory', (req, res, next) => {
  let data = {
    proj_sales_return_history_id: req.body.proj_sales_return_history_id,
    return_date: req.body.return_date,
    creation_date: req.body.creation_date,
    modification_date: req.body.modification_date,
    project_invoice_id: req.body.project_invoice_id,
    project_order_id: req.body.project_order_id,
    status: req.body.status,
    project_invoice_item_id: req.body.project_invoice_item_id,
    price: req.body.unit_price,
    notes: req.body.notes,
    qty_return: req.body.qty_return,
  };

  // Update the invoice_item table to subtract the returned quantity
  let updateInvoiceItemSql = `
    UPDATE project_invoice_item 
    SET qty = qty - ${req.body.qty_return},
    total_cost = (qty) * ${req.body.price},
    project_invoice_qty= ${req.body.qty_return},
    qty_returned = qty_returned + ${req.body.qty_return}
    WHERE project_invoice_item_id = ${req.body.project_invoice_item_id}
  `;

  // Insert the sales_return_history record
  let insertSalesReturnHistorySql = "INSERT INTO proj_sales_return_history SET ?";

  // Run both SQL queries in a transaction
  db.beginTransaction(function (err) {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: 'Transaction start failed',
      });
    }

    // Update invoice_item
    db.query(updateInvoiceItemSql, function (error, result) {
      if (error) {
        return db.rollback(function () {
          return res.status(400).send({
            data: error,
            msg: 'Failed to update invoice_item',
          });
        });
      }

      // Insert into sales_return_history
      db.query(insertSalesReturnHistorySql, data, function (err, result) {
        if (err) {
          return db.rollback(function () {
            return res.status(400).send({
              data: err,
              msg: 'Failed to insert into sales_return_history',
            });
          });
        }

        db.commit(function (err) {
          if (err) {
            return db.rollback(function () {
              return res.status(400).send({
                data: err,
                msg: 'Transaction commit failed',
              });
            });
          }

          return res.status(200).send({
            data: result,
            msg: 'Success',
          });
        });
      });
    });
  });
});

  app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
    console.log(req.userData);
    res.send('This is the secret content. Only logged in users can see that!');
  });
  
  module.exports = app;
  