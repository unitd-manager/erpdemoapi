const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/Database.js");
const userMiddleware = require("../middleware/UserModel.js");
var md5 = require("md5");
const fileUpload = require("express-fileupload");
const _ = require("lodash");
const mime = require("mime-types");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
app.use(cors());

app.use(
  fileUpload({
    createParentPath: true,
  })
);


app.post("/deleteRecord", (req, res, next) => {
  
  let sql = `DELETE FROM ${req.body.tablename} WHERE ${req.body.columnname}=${db.escape(req.body.idvalue)}`;
  let query = db.query(sql, (err, result) => {
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
app.post("/updatePublish", (req, res, next) => {
  
  let sql = `UPDATE ${req.body.tablename} SET published=${db.escape(req.body.value)} WHERE ${req.body.idColumn}=${db.escape(req.body.idValue)}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: "failed",
      });
    } else {
      return res.status(200).send({
        data: result,
        msg:sql
      });
    }
  });
});
app.post("/updateSortOrder", (req, res, next) => {
  
  let sql = `UPDATE ${req.body.tablename} SET sort_order=${db.escape(req.body.value)} WHERE ${req.body.idColumn}=${db.escape(req.body.idValue)}`;
  let query = db.query(sql, (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: "failed",
      });
    } else {
      return res.status(200).send({
        data: result,
        msg:sql
      });
    }
  });
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
  }else if(type == 'projectreceipt'){
    key_text = 'nextProjectReceiptCode';
    sql = "SELECT * FROM setting WHERE key_text='projectreceiptCodePrefix' OR key_text='nextProjectReceiptCode'";
}else if(type == 'goodsdelivery'){
  key_text = 'nextGoodsDeliveryCode';
  sql = "SELECT * FROM setting WHERE key_text='goodsDeliveryCodePrefix' OR key_text='nextGoodsDeliveryCode'";  
}else if(type == 'projectreceipt'){
    key_text = 'nextProjectReceiptCode';
    sql = "SELECT * FROM setting WHERE key_text='projectReceiptCodePrefix' OR key_text='nextProjectReceiptCode'";
}else if(type == 'supplier'){
      key_text = 'nextSupplierCode';
      sql = "SELECT * FROM setting WHERE key_text='supplierCodePrefix' OR key_text='nextSupplierCode'";
  }else if(type == 'enquiry'){
      key_text = 'nextEnquiryCode';
      sql = "SELECT * FROM setting WHERE key_text='enquiryCodePrefix' OR key_text='nextEnquiryCode'";
  }else if(type == 'orders'){
      key_text = 'nextOrderCode';
      sql = "SELECT * FROM setting WHERE key_text='orderCodePrefix' OR key_text='nextOrderCode'";
  } else if(type == 'projectorders'){
    key_text = 'nextProjectOrderCode';
    sql = "SELECT * FROM setting WHERE key_text='projectorderCodePrefix' OR key_text='nextProjectOrderCode'";
} 
   else if(type == 'lead'){
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
  else if(type == 'purchaseOrder'){
     
      key_text = 'nextPurchaseOrderCode';
         sql = "SELECT * FROM setting WHERE key_text='purchaseOrderCodePrefix' OR key_text='nextPurchaseOrderCode'";  

  }
  else if(type == 'wocode'){
      key_text = 'nextWOCode';
      sql = "SELECT * FROM setting WHERE key_text='wOCodePrefix' OR key_text='nextWOCode'";  
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
            finalText = prefixObject[0]?.value + codeObject[0]?.value;
            newvalue = parseInt(codeObject[0]?.value) + 1
        }else{
            finalText = result[0]?.value
            newvalue = parseInt(result[0]?.value) + 1
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

// Create a MySQL connection pool

app.post('/getTranslationColumnFromTables', (req, res, next) => {
  const tableNames = db.escape(req.body.tableNames);
  // let result = tableNames.replace(/'/g, "");
  // console.log('tableNames',tableNames)
  db.query(`SELECT SUBSTRING(COLUMN_NAME, 1, LENGTH(COLUMN_NAME) - 4) AS COLUMN_NAME_TRUNCATED FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = ${tableNames} AND COLUMN_NAME LIKE '%arb'`,
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


app.post('/getTableTranslation', (req, res, next) => {
  const columnNames = db.escape(req.body.columnNames);
  const labourRequestId = db.escape(req.body.whereId);
  const whereCondition = db.escape(req.body.whereCondition);
  const tableNames = db.escape(req.body.tableNames);
  let result = columnNames.replace(/'/g, "");
  let resultTable = tableNames.replace(/'/g, "");
  let resultWhereCondition = whereCondition.replace(/'/g, "");
  // console.log('columnNames',columnNames)
  // console.log('tableNames',tableNames)
  // console.log('labourRequestId',labourRequestId)
  // console.log('whereCondition',whereCondition)
  const query = `
    SELECT ${result}
    FROM ${resultTable} 
    WHERE ${resultWhereCondition} = ${labourRequestId}
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send({
        data: err,
        msg: 'Failed to retrieve labour translation data',
      });
    }

    return res.status(200).send({
      data: result,
      msg: 'Success',
    });
  });
});

app.post('/getTableTranslationArbValue', (req, res, next) => {
  const condition = db.escape(req.body.condition);
  const labourRequestId = db.escape(req.body.whereId);
  const whereCondition = db.escape(req.body.whereCondition);
  const tableNames = db.escape(req.body.tableNames);
  let result = condition.replace(/'/g, "");
  let resultTable = tableNames.replace(/'/g, "");
  let resultWhereCondition = whereCondition.replace(/'/g, "");
  // console.log('labourRequestId',labourRequestId)
  // console.log('whereCondition',whereCondition)
  const query = `
    SELECT ${result}
    FROM ${resultTable} 
    WHERE ${resultWhereCondition} = ${labourRequestId}
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send({
        data: err,
        msg: 'Failed to retrieve labour translation data',
      });
    }

    return res.status(200).send({
      data: result,
      msg: 'Success',
    });
  });
});

app.post('/editRequestArb', (req, res, next) => {
  const columnNames = db.escape(req.body.columnName);
  let column = columnNames.replace(/'/g, "");
  const value = db.escape(req.body.value);
  const labourRequestId = db.escape(req.body.whereId);
  const tableNames = db.escape(req.body.tableNames);
  const whereCondition = db.escape(req.body.whereCondition);
  let resultTable = tableNames.replace(/'/g, "");
  let resultWhereCondition = whereCondition.replace(/'/g, "");
  db.query(
    `UPDATE ${resultTable}  
     SET ${column}=${value}
     WHERE ${resultWhereCondition} = ${labourRequestId}`,
    (err, result) => {
      if (err) {
        console.log('error: ', err);
        return res.status(400).send({
          data: err,
          msg: 'Failed',
        });
      } else {
        return res.status(200).send({
          data: result,
          msg: 'Success',
        });
      }
    }
  );
});

app.post('/getTranslationGetApi', (req, res, next) => {
  const tableNameUni = db.escape(req.body.tableNameUni);
  const whereCondition = db.escape(req.body.whereCondition);
  let resultTable = tableNameUni.replace(/'/g, "");
  let result = whereCondition.replace(/'/g, "");
  // console.log('resultTable',resultTable)
  //  console.log('result',result)
  const query = `
    SELECT ${result}
    FROM ${resultTable} 
    WHERE ${result} !=''
  `;

  db.query(query, (err, result) => {
    if (err) {
      console.error('Error executing query:', err);
      return res.status(500).send({
        data: err,
        msg: 'Failed to retrieve labour translation data',
      });
    }

    return res.status(200).send({
      data: result,
      msg: 'Success',
    });
  });
});


module.exports = app;
