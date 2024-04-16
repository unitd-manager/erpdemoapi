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
app.get('/getReceipts', (req, res, next) => {
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
   WHERE i.receipt_id != '' ORDER BY i.receipt_id DESC`,
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

app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;