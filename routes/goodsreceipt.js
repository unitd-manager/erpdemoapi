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

app.get('/getGoodsReceipt', (req, res, next) => {
  db.query(`SELECT
  gr.goods_receipt_id
  ,gr.goods_received_date
  ,gr.supplier_id
  ,gr.purchase_order_id
  ,gr.employee_id
  ,gr.status
  ,gr.total_amount
  ,gr.creation_date
  ,gr.modification_date
  ,gr.created_by
  ,gr.modified_by
  ,s.company_name
  ,po.po_code
  ,e.first_name
  ,e.employee_id
  FROM goods_receipt gr
  LEFT join supplier s on s.supplier_id = gr.supplier_id
  LEFT join purchase_order po on po.purchase_order_id = gr.purchase_order_id
  LEFT join employee e on e.employee_id = gr.employee_id
  Where gr.goods_receipt_id !=''`,
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

app.post('/getGoodsReceiptById', (req, res, next) => {
  db.query(`SELECT
  gr.goods_receipt_id
  ,gr.goods_received_date
  ,gr.supplier_id
  ,gr.purchase_order_id
  ,gr.employee_id
  ,gr.status
  ,gr.total_amount
  ,gr.creation_date
  ,gr.modification_date
  ,gr.created_by
  ,gr.modified_by
  ,s.company_name
  ,po.po_code
  ,e.first_name
  ,e.employee_id
  FROM goods_receipt gr
  LEFT join supplier s on s.supplier_id = gr.supplier_id
  LEFT join purchase_order po on po.purchase_order_id = gr.purchase_order_id
  LEFT join employee e on e.employee_id = gr.employee_id
  Where gr.goods_receipt_id=${db.escape(req.body.goods_receipt_id)}`,
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

app.post('/editGoodsReceipt', (req, res, next) => {
  db.query(`UPDATE goods_receipt 
            SET goods_received_date=${db.escape(req.body.goods_received_date)}
            ,supplier_id=${db.escape(req.body.supplier_id)}
            ,purchase_order_id=${db.escape(req.body.purchase_order_id)}
            ,employee_id=${db.escape(req.body.employee_id)}
            ,status=${db.escape(req.body.status)}
            ,total_amount=${db.escape(req.body.total_amount)}
            ,creation_date=${db.escape(req.body.creation_date)}
            ,created_by=${db.escape(req.body.created_by)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,modified_by=${db.escape(req.body.modified_by)}
            WHERE goods_receipt_id = ${db.escape(req.body.goods_receipt_id)}`,
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
        
        
app.post('/insertGoodsReceipt', (req, res, next) => {
  let data = {
      goods_received_date	: req.body.goods_received_date
    , supplier_id: req.body.supplier_id
    , purchase_order_id: req.body.purchase_order_id
    , employee_id	: req.body.employee_id
    , status: req.body.status
    , total_amount: req.body.total_amount
    , creation_date: req.body.creation_date
    , created_by:req.body.created_by
    , modification_date:req.body.modification_date
    , modified_by:req.body.modified_by
 };
  let sql = "INSERT INTO goods_receipt SET ?";
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

app.post('/insertGoodsReceiptItems', (req, res, next) => {
  let data = {
      goods_receipt_id	: req.body.goods_receipt_id
    , product_id: req.body.product_id
    , goods_received_qty: req.body.goods_received_qty
    , goods_damaged_qty	: req.body.goods_damaged_qty
    , unit: req.body.unit
    , serial_no: req.body.serial_no
    , description: req.body.description
    , creation_date: req.body.creation_date
    , created_by:req.body.created_by
    , modification_date:req.body.modification_date
    , modified_by:req.body.modified_by
 };
  let sql = "INSERT INTO goods_receipt_items SET ?";
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

app.get("/getPoCode", (req, res, next) => {
  db.query(
    `SELECT
     po_code
    ,purchase_order_id
   From purchase_order `,
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

app.get("/getSupplierName", (req, res, next) => {
  db.query(`SELECT company_name,supplier_id FROM supplier`, (err, result) => {
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

app.get('/getEmployeeName', (req, res, next) => {
  db.query(`SELECT 
  e.employee_id
 ,e.first_name
 ,e.nric_no
 ,e.fin_no
 ,(SELECT COUNT(*) FROM job_information ji WHERE ji.employee_id=e.employee_id AND ji.status='current') AS e_count
  FROM employee e 
  `,
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


  app.post('/getPurchaseOrderedById', (req, res, next) => {
    db.query(`SELECT
    p.product_code
    ,p.product_id
    ,po.unit
    ,po.item_title
    ,po.quantity
    ,po.po_product_id
    ,po.purchase_order_id
    FROM po_product po
    LEFT JOIN (product p) ON (p.product_id = po.product_id)
    WHERE po.purchase_order_id = ${db.escape(req.body.purchase_order_id)}`,
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

    let data = {goods_received_items_id: req.body.goods_received_items_id};
    let sql = "DELETE FROM goods_receipt_items WHERE ?";
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