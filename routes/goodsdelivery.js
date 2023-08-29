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

app.post('/getTradingquoteById', (req, res, next) => {
    db.query(` SELECT q.quote_date
    ,q.quote_id
    ,q.quote_code
    ,q.quote_status
    ,q.ref_no_quote
    ,q.project_location
    ,q.project_reference
    ,q.payment_method
    ,q.revision
    ,q.intro_drawing_quote 
    ,q.total_amount
    ,q.opportunity_id
    ,q.company_id
    ,o.opportunity_code
    ,c.company_name
    ,cont.first_name
    FROM quote q  
    LEFT JOIN (opportunity o) ON (o.opportunity_id=q.opportunity_id)
    LEFT JOIN (company c) ON (q.company_id=c.company_id)
    LEFT JOIN (contact cont) ON (o.contact_id = cont.contact_id)   
    WHERE q.quote_id =${db.escape(req.body.quote_id)}  ORDER BY quote_code DESC
    `,
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

  app.get('/getgoodsdelivery', (req, res, next) => {
    db.query(`  SELECT gd.goods_delivery_id
    ,gd.delivery_no
    ,gd.goods_delivery_date
    ,gd.order_id
    ,o.order_code
    ,gd.goods_ref_no
    ,gd.company_id
    ,c.company_name
    ,cont.first_name
    ,gd.goods_delivery_status
    ,gd.po_no
    ,gd.sales_man
    ,gd.contact_id
    ,gd.department
    ,gd.creation_date
    ,gd.modification_date
    ,gd.created_by
    ,gd.modified_by    
       FROM goods_delivery gd  
       LEFT JOIN (orders o) ON (o.order_id=gd.order_id)
       LEFT JOIN (company c) ON (c.company_id=gd.company_id)
       LEFT JOIN (contact cont) ON (o.contact_id = cont.contact_id) 
       WHERE gd.goods_delivery_id != ''
    `,
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
  app.post('/edit-Tradingquote', (req, res, next) => {
    db.query(`UPDATE quote 
              SET quote_date=${db.escape(req.body.quote_date)}
              ,quote_code=${db.escape(req.body.quote_code)}
              ,quote_status=${db.escape(req.body.quote_status)}
              ,project_location=${db.escape(req.body.project_location)}
              ,project_reference=${db.escape(req.body.project_reference)}
              ,payment_method=${db.escape(req.body.payment_method)}
              ,revision=${db.escape(req.body.revision)}
              ,intro_drawing_quote=${db.escape(req.body.intro_drawing_quote)}
              ,quote_condition=${db.escape(req.body.quote_condition)}
              ,show_project_manager=${db.escape(req.body.show_project_manager)}
              ,our_reference=${db.escape(req.body.our_reference)}
              ,drawing_nos=${db.escape(req.body.drawing_nos)}
              ,ref_no_quote=${db.escape(req.body.ref_no_quote)}
              ,discount=${db.escape(req.body.discount)}
              ,total_amount=${db.escape(req.body.total_amount)}
              ,opportunity_id=${db.escape(req.body.opportunity_id)}
              ,company_id=${db.escape(req.body.company_id)}
              ,contact_id=${db.escape(req.body.contact_id)}
              
              WHERE quote_id =  ${db.escape(req.body.quote_id)}`,
              (err, result) =>{
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
  app.post('/inserttradingquote', (req, res, next) => {

    let data = {
        opportunity_id: req.body.opportunity_id
      , project_id: req.body.project_id
      , quote_code: req.body.quote_code
      , quote_date: req.body.quote_date
      , quote_status: 'new'
      ,company_id: req.body.company_id
      ,contact_id: req.body.contact_id
      , project_location: req.body.project_location
      , project_reference: req.body.project_reference
      , discount: req.body.discount
      , gst: req.body.gst
      , payment_method: req.body.payment_method
      , drawing_nos: req.body.drawing_nos
      , intro_quote: req.body.intro_quote
      , our_reference: req.body.our_reference
      , total_amount: req.body.total_amount
      , revision: req.body.revision
      , employee_id: req.body.employee_id
      , ref_no_quote: req.body.ref_no_quote
      , intro_drawing_quote: req.body.intro_drawing_quote
      , show_project_manager: req.body.show_project_manager
    };
    let sql = "INSERT INTO quote SET ?";
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
  


app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;