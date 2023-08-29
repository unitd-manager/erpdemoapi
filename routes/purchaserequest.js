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

app.get('/getPurchaseRequest', (req, res, next) => {
  db.query(`SELECT 
  pr.purchase_request_id,
  pr.purchase_request_code,
  pr.purchase_request_date,
  pr.purchase_delivery_date,
  pr.department,
  pr.status,
  pr.creation_date,
  pr.modification_date,
  pr.created_by,
  pr.modified_by,
  pr.priority,
  c.company_name,
  c.company_id
  FROM purchase_request pr
  LEFT join company c on c.company_id=pr.company_id
  Where pr.purchase_request_id !=''`,
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

app.post('/getPurchaseRequestById', (req, res, next) => {
  db.query(`SELECT 
  pr.purchase_request_id,
  pr.purchase_request_code,
  pr.purchase_request_date,
  pr.purchase_delivery_date,
  pr.department,
  pr.status,
  pr.creation_date,
  pr.modification_date,
  pr.created_by,
  pr.modified_by,
  pr.priority,
  c.company_name,
  c.company_id
  FROM purchase_request pr
  LEFT join company c on c.company_id=pr.company_id
  Where pr.purchase_request_id=${db.escape(req.body.purchase_request_id)}`,
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

app.post('/editPurchaseRequest', (req, res, next) => {
  db.query(`UPDATE purchase_request 
            SET purchase_request_date=${db.escape(req.body.purchase_request_date)}
            ,purchase_delivery_date=${db.escape(req.body.purchase_delivery_date)}
            ,department=${db.escape(req.body.department)}
            ,status=${db.escape(req.body.status)}
            ,priority=${db.escape(req.body.priority)}
            ,company_id=${db.escape(req.body.company_id)}
            ,description=${db.escape(req.body.description)}
            ,creation_date=${db.escape(req.body.creation_date)}
            ,created_by=${db.escape(req.body.created_by)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,modified_by=${db.escape(req.body.modified_by)}
            WHERE purchase_request_id = ${db.escape(req.body.purchase_request_id)}`,
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
        
        
app.post('/insertPurchaseRequest', (req, res, next) => {
  let data = {
      purchase_request_code	: req.body.purchase_request_code
    , purchase_request_date	: req.body.purchase_request_date
    , purchase_delivery_date: req.body.purchase_delivery_date
    , department: req.body.department
    , status	: req.body.status
    , priority: req.body.priority
    , description: req.body.description
    , creation_date: req.body.creation_date
    , created_by:req.body.created_by
    , modification_date:req.body.modification_date
    , modified_by:req.body.modified_by
    , priority:req.body.priority
 };
  let sql = "INSERT INTO purchase_request SET ?";
  let query = db.query(sql, data, (err, result) => {
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

app.get("/getCustomerName", (req, res, next) => {
  db.query(`SELECT company_name,company_id FROM company`, (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: "failed",
      });
    } else {
      return res.status(200).send({
        data: result,
      });
    }
  });
});


app.post('/deletePurchaseRequest', (req, res, next) => {

  let data = {project_task_id: req.body.project_task_id};
  let sql = "DELETE FROM purchase_request WHERE ?";
  let query = db.query(sql, data, (err, result) => {
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

app.post("/getCodeValue", (req, res, next) => {
    var type = req.body.type;
    let sql = '';
    let key_text = '';
    let withprefix = true;
    if(type == 'opportunity'){
        key_text = 'nextOpportunityCode';
        sql = "SELECT * FROM setting WHERE key_text='opportunityCodePrefix' OR key_text='nextOpportunityCode'";
    }else if(type == 'receipt'){
        key_text = 'nextReceiptCode';
        sql = "SELECT * FROM setting WHERE key_text='receiptCodePrefix' OR key_text='nextReceiptCode'";
    }else if(type == 'lead'){
        key_text = 'nextLeadsCode';
        sql = "SELECT * FROM setting WHERE key_text='leadsPrefix' OR key_text='nextLeadsCode'";  
    }else if(type == 'invoice'){
        key_text = 'nextInvoiceCode';
      sql = "SELECT * FROM setting WHERE key_text='invoiceCodePrefix' OR key_text='nextInvoiceCode'";  
    }else if(type == 'subConworkOrder'){
        key_text = 'nextSubconCode';
      sql = "SELECT * FROM setting WHERE key_text='subconCodePrefix' OR key_text='nextSubconCode'";  
    }
    else if(type == 'project'){
        key_text = 'nextProjectCode';
        sql = "SELECT * FROM setting WHERE key_text='projectCodePrefix' OR key_text='nextProjectCode'";  
    }else if(type == 'opportunityproject'){
        key_text = 'nextOpportunityProjectCode';
        sql = "SELECT * FROM setting WHERE key_text='opportunityprojectCodePrefix' OR key_text='nextOpportunityProjectCode'";  
    }else if(type == 'quote'){
        key_text = 'nextQuoteCode';
        sql = "SELECT * FROM setting WHERE key_text='quoteCodePrefix' OR key_text='nextQuoteCode'";  
    }
    else if(type == 'creditNote'){
        key_text = 'nextCreditNoteCode';
        sql = "SELECT * FROM setting WHERE key_text='creditNotePrefix' OR key_text='nextCreditNoteCode'";  
    }else if(type == 'employee'){
      //   withprefix = false;
        key_text = 'nextEmployeeCode';
      sql = "SELECT * FROM setting WHERE key_text='employeeCodePrefix' OR key_text='nextEmployeeCode'";  
    }
    else if(type == 'claim'){
        withprefix = false;
        key_text = 'nextClaimCode';
        sql = "SELECT * FROM setting WHERE  key_text='nextClaimCode'";  
    }
    else if(type == 'QuoteCodeOpp'){
        withprefix = false;
        key_text = 'nextQuoteCodeOpp';
        sql = "SELECT * FROM setting WHERE  key_text='nextQuoteCodeOpp'";  
    }
    else if(type == 'wocode'){
        key_text = 'nextWOCode';
        sql = "SELECT * FROM setting WHERE key_text='wOCodePrefix' OR key_text='nextWOCode'";  
    }
    else if(type == 'ProductCode'){
        key_text = 'nextProductCode';
        sql = "SELECT * FROM setting WHERE key_text='nextProductCodePrefix' OR key_text='nextProductCode'";  
    }
    else if(type == 'InventoryCode'){
        key_text = 'nextInventoryCode';
        sql = "SELECT * FROM setting WHERE key_text='inventoryCodePrefix' OR key_text='nextInventoryCode'";  
    }
    else if(type == 'ItemCode'){
        withprefix = false;
        key_text = 'nextItemCode';
        sql = "SELECT * FROM setting WHERE key_text='nextItemCode'"; 
    }
    else if(type == 'PurchaseRequestCode'){
        key_text = 'nextPurchaseRequestCode';
        sql = "SELECT * FROM setting WHERE key_text='nextPurchaseRequestCodePrefix' OR key_text='nextPurchaseRequestCode'";  
    }
    let query = db.query(sql, (err, result) => {
        let old = result
      if (err) {
        return res.status(400).send({
          data: err,
          msg: "failed",
        });
      } else {
         
          var finalText = '';
          var newvalue = 0
          if(withprefix == true){
              var codeObject = result.filter(obj => obj.key_text === key_text);
              
               var prefixObject = result.filter(obj => obj.key_text != key_text);
              finalText = prefixObject[0].value + codeObject[0].value;
              newvalue = parseInt(codeObject[0].value) + 1
          }else{
              finalText = result[0].value
              newvalue = parseInt(result[0].value) + 1
          }
          newvalue = newvalue.toString()
           let query = db.query(`UPDATE setting SET value=${db.escape(newvalue)} WHERE key_text = ${db.escape(key_text)}`, (err, result) => {
              if (err) {
                return res.status(400).send({
                  data: err,
                  msg: "failed",
                });
              } else {
                return res.status(200).send({
                  data: finalText,
                  result:old
                });
              }
          });
      }
    });
  });

  app.get('/PurchaseRequestLineItem', (req, res, next) => {
    db.query(`SELECT
    p.product_code
    ,pr.unit
    ,pr.purchase_request_qty
    ,pr.modified_by
    ,p.title
    FROM purchase_request_items pr
    LEFT JOIN (product p) ON (p.product_id = pr.product_id) 
    WHERE pr.purchase_request_id !=''`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
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


  app.post('/PurchaseRequestLineItemById', (req, res, next) => {
    db.query(`SELECT
    p.product_code
    ,pr.unit
    ,pr.purchase_request_qty
    ,pr.modified_by
    ,pr.purchase_request_items_id
    ,pr.purchase_request_id
    ,p.title
    FROM purchase_request_items pr
    LEFT JOIN (product p) ON (p.product_id = pr.product_id) 
    WHERE pr.purchase_request_id = ${db.escape(req.body.purchase_request_id)}`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
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

  app.post('/insertPurchaseRequestLineItem', (req, res, next) => {

    let data = {
       product_id:req.body.product_id,
       purchase_request_qty:req.body.purchase_request_qty,
       unit:req.body.unit,
       creation_date:req.body.creation_date,
       created_by:req.body.created_by,
       purchase_request_id:req.body.purchase_request_id
   };
   console.log(data)
    let sql = "INSERT INTO purchase_request_items SET ?";
    let query = db.query(sql, data,(err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
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

  app.post('/deleteEditItem', (req, res, next) => {

    let data = {purchase_request_items_id: req.body.purchase_request_items_id};
    let sql = "DELETE FROM purchase_request_items WHERE ?";
    let query = db.query(sql, data,(err, result) => {
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
            });
      }
    });
  });

app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;