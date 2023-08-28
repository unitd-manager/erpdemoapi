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

app.get('/getTabPurcahseQuote', (req, res, next) => {
    db.query(`SELECT
    q.purchase_quote_id 
    ,q.description
    ,q.date_issued
    ,q.due_date
    ,q.status
    ,q.supplier_id
    ,q.purchase_request_id
    ,q.discount
    ,q.purchase_quote_code
    ,q.gst
     FROM purchase_quote q 
    WHERE q.purchase_quote_id !=''
    ORDER BY q.purchase_quote_code DESC`,
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


app.post('/getPurchaseQuoteById', (req, res, next) => {
    db.query(`SELECT
    q.purchase_quote_id 
    ,q.description
    ,q.date_issued
    ,q.due_date
    ,q.status
    ,q.supplier_id
    ,q.purchase_request_id
    ,q.discount
    ,q.purchase_quote_code
    ,q.gst
     FROM purchase_quote q 
    WHERE q.purchase_quote_id=${db.escape( req.body.purchase_quote_id)} 
    ORDER BY q.purchase_quote_code DESC`,
    (err, result) => {
       
      if (result.length == 0) {
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


app.post('/editPurchseQuote', (req, res, next) => {
    db.query(`UPDATE purchase_quote
              SET description=${db.escape(req.body.description)}
              ,discount=${db.escape(req.body.discount)}
              ,date_issued=${db.escape(req.body.date_issued)}
              ,due_date=${db.escape(req.body.due_date)}
              ,status=${db.escape(req.body.status)}
              ,supplier_id=${db.escape(req.body.supplier_id)}
              ,total_amount=${db.escape(req.body.total_amount)}
              ,payment_method=${db.escape(req.body.payment_method)}
              ,gst=${db.escape(req.body.gst)}
              WHERE purchase_request_id = ${db.escape(req.body.purchase_request_id)}  AND purchase_quote_id =${db.escape(req.body.purchase_quote_id)}`,
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

         
   app.post('/getTabQuotelogById', (req, res, next) => {
  db.query(`SELECT
  qt.purchase_quote_item_id 
  ,qt.description
  ,qt.amount 
  ,qt.purchase_quote_item_type
  ,qt.sort_order
  ,qt.creation_date
  ,qt.modification_date
  ,qt.title
  ,qt.purchase_quote_id
  ,qt.purchase_request_id
  ,qt.actual_amount
  ,qt.total_amount
  ,qt.discount
  ,qt.supplier_amount
  ,qt.reference
  ,qt.location
  ,qt.drawing_revision
  ,qt.drawing_number
  ,qt.unit
  ,qt.unit_price
   FROM purchase_quote_item qt 
  WHERE qt.purchase_quote_item_id =${db.escape( req.body.purchase_quote_item_id)} 
  ORDER BY qt.purchase_quote_code DESC`,
  (err, result) => {
     
    if (result.length == 0) {
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

app.post('/insertQuote', (req, res, next) => {

    let data = {
       purchase_quote_code: req.body.purchase_quote_code
      , description: req.body.description
      , status: req.body.status 
      , date_issued: req.body.date_issued
      , due_date: req.body.due_date
      , discount: req.body.discount
      , gst: req.body.gst
      , payment_method: req.body.payment_method
      , supplier_id: req.body.supplier_id
    };
    let sql = "INSERT INTO purchase_quote SET ?";
    let query = db.query(sql, data,(err, result) => {
      if (err) {
        console.log("error: ", err);
        return;
      } else {
            return res.status(200).send({
              data: result,
              msg:'Success'
            });
      }
    });
  });
  
  
  
 
 app.post('/editTabQuoteLineItems', (req, res, next) => {
    db.query(`UPDATE purchase_quote_item
              SET description=${db.escape(req.body.description)}
              ,amount=${db.escape(req.body.amount)}
              ,purchase_quote_item_type=${db.escape(req.body.purchase_quote_item_type)}
              ,unit=${db.escape(req.body.unit)}
              ,unit_price=${db.escape(req.body.unit_price)}
              ,amount=${db.escape(req.body.amount)}
              title=${db.escape(req.body.title)}
              ,description=${db.escape(req.body.description)}
              ,quantity=${db.escape(req.body.quantity)}
              ,unit=${db.escape(req.body.unit)}
              ,unit_price=${db.escape(req.body.unit_price)}
              ,amount=${db.escape(req.body.amount)} title=${db.escape(req.body.title)}
              ,description=${db.escape(req.body.description)}
              ,quantity=${db.escape(req.body.quantity)}
              ,unit=${db.escape(req.body.unit)}
              ,unit_price=${db.escape(req.body.unit_price)}
              ,amount=${db.escape(req.body.amount)}
              WHERE project_id = ${db.escape(req.body.project_id)}  `,
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

  
  app.post('/insertQuoteItems', (req, res, next) => {

    let data = {
      quote_category_id:req.body.quote_category_id
      ,quote_items_id:req.body.quote_items_id
      ,description: req.body.description
      , amount: req.body.amount
      , amount_other: req.body.amount_other
      , item_type: req.body.item_type
      , sort_order: req.body.sort_order
      , creation_date: req.body.creation_date
      , modification_date: req.body.modification_date
      , title: req.body.title
      , quote_id: req.body.quote_id
      , opportunity_id: req.body.opportunity_id
      , actual_amount: req.body.actual_amount
      , supplier_amount	: req.body.supplier_amount	
      , quantity: req.body.quantity
      , project_id: req.body.project_id
      , created_by: req.body.created_by
      , modified_by: req.body.modified_by
      , unit: req.body.unit
      , remarks: req.body.remarks
      , part_no: req.body.part_no
      , nationality: req.body.nationality
      , ot_rate: req.body.ot_rate
      , ph_rate: req.body.ph_rate
      , scaffold_code: req.body.scaffold_code
      , erection: req.body.erection
      , dismantle: req.body.dismantle
      , unit_price: req.body.unit_price
      , drawing_number: req.body.drawing_number
      , drawing_title: req.body.drawing_title
      , drawing_revision: req.body.drawing_revision
   };
    let sql = "INSERT INTO quote_items SET ?";
    let query = db.query(sql, data,(err, result) => {
      if (err) {
        console.log("error: ", err);
        return;
      } else {
            return res.status(200).send({
              data: result,
              msg:'Success'
            });
      }
    });
  });


app.delete('/deleteQuoteItems', (req, res, next) => {

    let data = {quote_category_id: req.body.quote_category_id};
    let sql = "DELETE FROM quote_items WHERE ?";
    let query = db.query(sql, data,(err, result) => {
      if (err) {
        console.log("error: ", err);
        return;
      } else {
            return res.status(200).send({
              data: result,
              msg:'Success'
            });
      }
    });
  });
app.post('/getQuoteLineItemsById', (req, res, next) => {
  db.query(`SELECT
            qt.*
                ,qt.description
                ,qt.amount               
            FROM quote_items qt 
            WHERE qt.quote_id =${db.escape(req.body.quote_id)}`,
          (err, result) => {
       
      if (result.length == 0) {
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
module.exports = app;