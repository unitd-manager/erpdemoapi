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


app.get('/getSalesReturns', (req, res, next) => {
    db.query(`SELECT o.proj_sales_return_id 
    ,o.return_date
    , o.creation_date
    ,o.modification_date
    ,o.invoice_id
    ,i.invoice_code
    ,o.order_id
    ,o.status
    ,i.invoice_code
    ,(select sum(total_cost)) as InvoiceAmount
    from proj_sales_return o
    LEFT JOIN invoice i ON i.invoice_id = o.invoice_id
    LEFT JOIN invoice_item it ON it.invoice_id = i.invoice_id
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
    ,o.invoice_id
    ,i.invoice_code
    ,i.status AS invoice_status
    ,i.status AS invoice_status_arb
    ,o.order_id
    ,o.status
    ,o.status_arb
    ,i.invoice_code
    ,(select sum(total_cost)) as InvoiceAmount
    from proj_sales_return o
    LEFT JOIN invoice i ON i.invoice_id = o.invoice_id
    LEFT JOIN invoice_item it ON it.invoice_id = i.invoice_id
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

  app.post('/getInvoiceItemsById', (req, res, next) => {
    db.query(`SELECT it.item_title,
    it.invoice_item_id,
  i.invoice_id,
  it.description,
  it.description_arb,
  
  it.total_cost,
  it.unit,
  it.qty,
  it.qty_returned,
  it.unit_price,
  it.remarks,
  it.remarks_arb,
  
  i.invoice_id,
  o.order_id
  FROM invoice_item it
  LEFT JOIN (invoice i) ON (i.invoice_id=it.invoice_id)
  LEFT JOIN (orders o) ON (o.order_id=i.invoice_source_id)
  WHERE i.invoice_id = ${db.escape(req.body.invoice_id)}`,
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
  i.invoice_id,
  it.invoice_item_id,
  it.price,
  it.notes,
  it.notes_arb,
  
  it.qty_return,
  it.order_id,
  iv.item_title,
  iv.item_title_arb
  
  FROM proj_sales_return_history it
  LEFT JOIN (proj_sales_return i) ON (i.invoice_id=it.invoice_id)
  LEFT JOIN (invoice_item iv) ON (iv.invoice_item_id=it.invoice_item_id)
  WHERE i.invoice_id = ${db.escape(req.body.invoice_id)}`,
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
      `SELECT invoice_item_id FROM proj_sales_return_history`,
      (err, result) => {
        if (err) {
          return res.status(400).send({
            data: err,
            msg: 'Failed'
          });
        } else {
          const quoteItemsIds = result.map((row) => row.invoice_item_id);
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
      invoice_id: req.body.invoice_id,
      order_id: req.body.order_id,
      status: req.body.status,
      status: req.body.status_arb,
  
      invoice_item_id: req.body.invoice_item_id,
      price: req.body.unit_price,
      notes: req.body.notes,
      notes: req.body.notes_arb,
  
      qty_return: req.body.qty_return,
    };
  
    // Update the invoice_item table to subtract the returned quantity
    let updateInvoiceItemSql = `
      UPDATE invoice_item 
      SET qty = qty - ${req.body.qty_return},
      total_cost = (qty) * ${req.body.price},
      invoice_qty= ${req.body.qty_return},
      qty_returned = qty_returned + ${req.body.qty_return}
      WHERE invoice_item_id = ${req.body.invoice_item_id}
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
                msg: 'Failed to insert into proj_sales_return_history',
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
  