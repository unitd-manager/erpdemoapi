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

app.get('/getOrders', (req, res, next) => {
  db.query(`SELECT o.project_order_id
  ,o.order_date
  ,o.order_code 
  ,o.creation_date
  ,o.order_status
  ,c.company_id
  ,c.company_name
  FROM project_orders o 
  LEFT JOIN (company c) ON (c.company_id=o.company_id)    
  WHERE o.project_order_id !=''`,
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

app.get('/getProjectReceipts', (req, res, next) => {
    db.query(
      `select i.project_receipt_id
    ,i.remarks
    ,i.creation_date
    ,i.modification_date
    ,i.created_by
    ,i.modified_by
    ,i.receipt_code  
    ,i.receipt_status
    ,i.amount
    ,i.mode_of_payment
    ,o.order_code
     ,i.receipt_date
     from project_receipt  i
    LEFT JOIN project_orders o ON o.project_order_id=i.project_order_id
   WHERE i.project_receipt_id != '' ORDER BY i.project_receipt_id DESC`,
      (err, result) => {
        if (err) {
          console.log('error: ', err)
          return res.status(400).send({
            data: err,
            msg: 'failed',
          });
        } else {
          return res.status(200).send({
            data: result,
            msg: 'Staff has been removed successfully',
          })
       }
     }
    );
  });

  app.get('/getTranslationforProjectSalesReceipt', (req, res, next) => {
    db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdProjectSalesReceipt%'`,
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

  app.get('/getOrder', (req, res, next) => {
    db.query(`SELECT o.project_order_id
    ,o.order_date
    ,o.project_order_code
    ,o.creation_date
    ,o.order_status
    ,i.invoice_source_id
    ,i.invoice_id
    FROM project_orders o
    LEFT JOIN project_invoice i ON o.project_order_id = i.invoice_source_id
    WHERE o.project_order_id !='' AND i.project_invoice_id != ''`,
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

  app.post('/insertprojectreceipt', (req, res, next) => {

    let data = {receipt_code: req.body.receipt_code,
                amount: req.body.amount,
                mode_of_payment: req.body.mode_of_payment,
                remarks: req.body.remarks,
                project_receipt_date: req.body.project_receipt_date,
                published: req.body.published,
                flag: req.body.flag,
                creation_date: req.body.creation_date,
                modification_date: req.body.modification_date,
                created_by: req.body.created_by,
                modified_by: req.body.modified_by,
                order_id: req.body.order_id,
                project_receipt_status: req.body.project_receipt_status,
                cheque_date: req.body.cheque_date,
                bank_name: req.body.bank_name,
                site_id: req.body.site_id,
                cheque_no: req.body.cheque_no,
                 project_id: req.body.project_id,
            };
  
    let sql = "INSERT INTO project_receipt SET ?";
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
  app.post('/getInvoiceForReceipt', (req, res, next) => {
    db.query(`
    SELECT
    i.project_invoice_code,
    i.status,
    i.project_invoice_id,
    i.project_invoice_source_id,
    SUM(ii.total_cost) AS invoice_amount
  FROM
    project_invoice i
    LEFT JOIN project_invoice_item ii ON ii.project_invoice_id = i.project_invoice_id
    LEFT JOIN project_orders b ON b.project_order_id = i.project_invoice_source_id
  WHERE 
  ii.project_order_id  = ${db.escape(req.body.project_order_id)} AND 
    i.status != 'Paid' AND 
    ii.total_cost != '' AND
    i.project_invoice_id NOT IN (SELECT project_invoice_id FROM project_receipt_history)
  GROUP BY i.project_invoice_id`,
      (err, result) => {
        if (err) {
          return res.status(400).send({
            data: err,
            msg: 'failed'
          });
        } else {
          return res.status(200).send({
            data: result,
  
            msg: 'Success'
          });
        }
      }
    );
  });
  app.post('/insertreceipt', (req, res, next) => {

    let data = {receipt_code: req.body.receipt_code,
                amount: req.body.amount,
                mode_of_payment: req.body.mode_of_payment,
                remarks: req.body.remarks,
                receipt_date: req.body.receipt_date,
                published: req.body.published,
                flag: req.body.flag,
                creation_date: req.body.creation_date,
                modification_date: req.body.modification_date,
                created_by: req.body.created_by,
                modified_by: req.body.modified_by,
                project_order_id: req.body.project_order_id,
                receipt_status: req.body.receipt_status,
                cheque_date: req.body.cheque_date,
                bank_name: req.body.bank_name,
                site_id: req.body.site_id,
                cheque_no: req.body.cheque_no,
                 project_id: req.body.project_id,
            };
  
    let sql = "INSERT INTO project_receipt SET ?";
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
  app.post('/insertreceipthistory', (req, res, next) => {

    let data = {
                amount: req.body.amount,
                project_invoice_id: req.body.project_invoice_id

            };
  
    let sql = "INSERT INTO project_receipt_history SET ?";
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


app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;