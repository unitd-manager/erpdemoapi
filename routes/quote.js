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
    ,q.date_issued
    ,q.date_issued_arb
    ,q.due_date
    ,q.due_date_arb
    ,q.status
    ,q.status_arb
    ,q.supplier_id
    ,p.purchase_request_id
    ,p.purchase_request_code
    ,p.purchase_request_code_arb
    ,q.rq_code
    ,q.rq_code_arb
    ,q.creation_date
    ,q.modification_date
     FROM purchase_quote q 
     LEFT JOIN purchase_request p ON p.purchase_request_id=q.purchase_request_id
    WHERE q.purchase_quote_id !=''
    ORDER BY q.purchase_quote_id DESC`,
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

app.get('/getQuotationDashboard', (req, res, next) => {
  const companyId = req.query.company;  // Get company id from query parameters
  const companyFilter = companyId ? `AND pq.company_id = ${companyId}` : '';

  db.query(`
    SELECT 
      DATE_FORMAT(STR_TO_DATE(pq.creation_date, '%d-%m-%Y %h:%i:%s %p'), '%M') AS month,
      COUNT(*) AS quotationCount
    FROM 
      project_quote pq
      LEFT JOIN company c ON pq.company_id = c.company_id
    WHERE
      YEAR(STR_TO_DATE(pq.creation_date, '%d-%m-%Y %h:%i:%s %p')) = YEAR(CURDATE())
      ${companyFilter}
    GROUP BY 
      MONTH(STR_TO_DATE(pq.creation_date, '%d-%m-%Y %h:%i:%s %p'))
    ORDER BY 
      MONTH(STR_TO_DATE(pq.creation_date, '%d-%m-%Y %h:%i:%s %p'))`,
  (err, result) => {
    if (err) {
      console.log("error: ", err);
      return res.status(500).send({
        msg: 'Database error'
      });
    }
    if (result.length == 0) {
      return res.status(400).send({
        msg: 'No result found'
      });
    } else {
      return res.status(200).send({
        data: result,
        msg: 'Success'
      });
    }
  });
});


app.get('/getQuoteStats', (req, res, next) => {
  db.query(`SELECT q.quote_id,
q.quote_status
from quote q
where q.quote_id !=''`,
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
// app.get('/getQuotationCounts', (req, res, next) => {
//   db.query(
//     `SELECT COUNT(*) AS quotation_count
//   FROM quote
//   WHERE MONTH(quote_date) = =${db.escape(month)}`,
//   (err, result) => {
//     if (err) {
//       console.log("error: ", err);
//       return;
//     } else {
//           return res.status(200).send({
//             data: result,
//             msg:'Success'
//           });

//       }

//   }
// );
// });

// app.get('/getQuotationCounts', (req, res, next) => {
//   const { month } = req.query; 
//   db.query(
//     `SELECT COUNT(*) AS quotation_count
//   FROM quote
//   WHERE MONTH(quote_date) = =${db.escape(month)}`,
//   (err, result) => {
//     if (err) {
//       console.log("error: ", err);
//       return;
//     } else {
//           return res.status(200).send({
//             data: result,
//             msg:'Success'
//           });

//       }

//   }
// );
// });
// app.get('/getQuotationCounts', (req, res, next) => {
//      const { month } = req.query;
// db.query(`

//   SELECT
//     DATE_FORMAT(quote_date, '%Y-%m-%d') AS quote_date,
//     COUNT(quote_id) AS quotation_count
//   FROM
//     quotations
//   WHERE
//     MONTH(quote_date) = ${db.escape(req.body.month)}
//   GROUP BY
//     quote_date
//   ORDER BY
//     quote_date ASC
// `, [targetMonth], (err, result) => {
//   if (err) {
//     console.error("Error executing query:", err);
//     return res.status(500).json({ error: 'Internal Server Error' });
//   }
//   return res.status(200).json({
//     data: result,
//     msg: 'Success'
//   });
// });
// })
app.get('/getPurchaseRequest', (req, res, next) => {
  db.query(`SELECT pr.purchase_request_id,
  pr.purchase_request_code
   FROM purchase_request pr
   LEFT JOIN purchase_quote pq ON pq.purchase_request_id=pr.purchase_request_id 
   WHERE pr.purchase_request_id !=''
  AND pq.purchase_request_id IS NULL`,
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
    q.purchase_quote_id,
    q.date_issued,
    q.date_issued_arb,
    q.due_date,
    q.due_date_arb,
    q.status,
    q.status_arb,
    q.supplier_id,
    q.purchase_request_id,
    qr.product_id ,
    qr.total_cost,
    
    qr.purchase_quote_items_id,
    qr.amount,
    
    p.purchase_request_id,
    p.purchase_request_code,
    p.purchase_request_code_arb,
    q.rq_code,
    q.rq_code_arb,
    q.creation_date,
    q.modification_date,
    q.created_by,
    q.modified_by
FROM purchase_quote q 
LEFT JOIN purchase_quote_items qr ON qr.purchase_quote_id = q.purchase_quote_id
LEFT JOIN purchase_request p ON p.purchase_request_id=q.purchase_request_id
WHERE q.purchase_quote_id=${db.escape( req.body.purchase_quote_id)} `,
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
app.post('/getPurchaseQuotepdf', (req, res, next) => {
  db.query(`SELECT
  q.purchase_quote_id,
  q.date_issued,
  q.due_date,
  q.status,
  q.supplier_id,
  q.purchase_request_id,
  qr.product_id ,
  qr.total_cost,
  qr.purchase_quote_items_id,
  qr.amount,
  p.purchase_request_id,
  p.purchase_request_code,
  q.rq_code,
  q.creation_date,
  q.modification_date

FROM purchase_quote q 
LEFT JOIN purchase_quote_items qr ON qr.purchase_quote_id = q.purchase_quote_id
LEFT JOIN purchase_request p ON p.purchase_request_id=q.purchase_request_id
WHERE q.purchase_quote_id=${db.escape( req.body.purchase_quote_id)} `,
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

app.post('/getPurchaseQuoteRequestById', (req, res, next) => {
  db.query(`SELECT
  p.product_code
  ,pr.unit
  ,pr.purchase_request_qty,
  pr.creation_date,
   pr.modification_date,
  pr.created_by
  ,pr.modified_by
  ,pr.purchase_request_items_id
  ,pr.purchase_request_id
  ,p.title
  ,p.product_id
  FROM purchase_request_items pr
  LEFT JOIN (product p) ON (p.product_id = pr.product_id) 
  WHERE pr.purchase_request_id = ${db.escape(req.body.purchase_request_id)}`,
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
              ,date_issued=${db.escape(req.body.date_issued)}
              ,due_date=${db.escape(req.body.due_date)}
              ,status=${db.escape(req.body.status)}
              ,status_arb=${db.escape(req.body.status_arb)}
              ,supplier_id=${db.escape(req.body.supplier_id)}
              ,payment_method=${db.escape(req.body.payment_method)}
              ,creation_date=${db.escape(req.body.creation_date)}
              ,modification_date=${db.escape(req.body.modification_date)}
              ,modified_by=${db.escape(req.body.modified_by)}
              WHERE  purchase_quote_id =${db.escape(req.body.purchase_quote_id)}`,
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
  db.query(` SELECT
  q.purchase_quote_id,
  q.purchase_request_id,
  p.purchase_request_code,
  pt.title,
  pt.product_code,
  p.status,
  q.supplier_id,
  qr.amount,
  pr.unit,
  qr.total_cost,
  qr.total_cost,
  qr.purchase_quote_items_id,
  qr.amount,
  q.rq_code,
  (SELECT SUM(q2.amount) FROM purchase_quote_items q2  WHERE q2.purchase_quote_id = q.purchase_quote_id ) AS total_amount_all_quotes
FROM
  purchase_quote q
LEFT JOIN
  purchase_request p ON p.purchase_request_id = q.purchase_request_id
LEFT JOIN
  purchase_request_items pr ON p.purchase_request_id = pr.purchase_request_id
LEFT JOIN
  product pt ON p.product_id = pt.product_id
  LEFT JOIN
  purchase_quote_items qr ON qr.purchase_request_id = q.purchase_request_id
WHERE
  q.purchase_quote_id =${db.escape(req.body.purchase_quote)}`,
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
       description: req.body.description
      , status: req.body.status 
      , date_issued: req.body.date_issued
      , due_date: req.body.due_date
      , payment_method: req.body.payment_method
      , supplier_id: req.body.supplier_id
      ,rq_code: req.body.rq_code
      ,purchase_request_id:req.body.purchase_request_id
      ,creation_date: req.body.creation_date
      ,created_by: req.body.created_by
      ,modification_date: req.body.modification_date
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
  
  app.post('/insertQuoteItems', (req, res, next) => {

    let data = {
      purchase_quote_id : req.body. purchase_quote_id 
      , description: req.body.description
      ,purchase_request_id:req.body.purchase_request_id
      ,quantity:req.body.quantity
      ,amount:req.body.amount
      ,total_cost:req.body.total_cost
      ,product_id:req.body.product_id
      ,unit:req.body.unit
      ,purchase_request_items_id: req.body.purchase_request_items_id
    };
    let sql = "INSERT INTO purchase_quote_items SET ?";
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
    db.query(`UPDATE purchase_quote_items 
              SET  amount=${db.escape(req.body.amount)}
              ,description=${db.escape(req.body.description)}
              ,unit=${db.escape(req.body.unit)}
              ,quantity=${db.escape(req.body.quantity)}
               ,purchase_request_id=${db.escape(req.body.purchase_request_id)}
               ,purchase_quote_id=${db.escape(req.body.purchase_quote_id)}
               ,total_cost=${db.escape(req.body.total_cost)}
              WHERE purchase_quote_items_id = ${db.escape(req.body.purchase_quote_items_id)}`,
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


app.delete('/deleteQuoteItems', (req, res, next) => {

    let data = {purchase_quote_items_id: req.body.purchase_quote_items_id};
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
  FROM purchase_request_items qt 
  WHERE qt. purchase_request_items_id= ${db.escape(req.body. purchase_request_items_id )}`,
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

app.post('/RequestLineItemById', (req, res, next) => {
  db.query(`
  SELECT
    p.product_code
    ,p.title
    ,r.purchase_request_id
    ,r.purchase_request_code
    ,q.purchase_quote_id
    ,pq.amount
    ,pq.total_cost
    ,pq.quantity
    ,pq.product_id
    ,pq.unit
    ,pq.purchase_quote_items_id
    ,pq.description
    ,q.rq_code
    ,s.company_name
    ,s.supplier_id
    FROM purchase_quote q
    LEFT JOIN (purchase_request r) ON (r.purchase_request_id = q.purchase_request_id) 
    LEFT JOIN (purchase_quote_items pq) ON (pq.purchase_quote_id = q.purchase_quote_id) 
        LEFT JOIN (product p) ON (p.product_id = pq.product_id) 
        LEFT JOIN (supplier s) ON (s.supplier_id = q.supplier_id) 
    WHERE q.purchase_quote_id=${db.escape(req.body.purchase_quote_id)};`,
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
app.post('/getRequestLineItempdf', (req, res, next) => {
  db.query(`
  SELECT
    p.product_code
    ,p.title
    ,r.purchase_request_id
    ,r.purchase_request_code
    ,q.purchase_quote_id
    ,pq.amount
    ,pq.total_cost
    ,pq.quantity
    ,pq.product_id
    ,pq.unit
    ,pq.purchase_quote_items_id
    ,pq.description
    ,q.rq_code
    
    FROM purchase_quote q
    LEFT JOIN (purchase_request r) ON (r.purchase_request_id = q.purchase_request_id) 
    LEFT JOIN (purchase_quote_items pq) ON (pq.purchase_quote_id = q.purchase_quote_id) 
        LEFT JOIN (product p) ON (p.product_id = pq.product_id) 
    WHERE q.purchase_quote_id=${db.escape(req.body.purchase_quote_id)};`,
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

app.post("/getCodeValue", (req, res, next) => {
  var type = req.body.type;
  let sql = '';
  let key_text = '';
  let withprefix = true;
  if(type == 'RequestQuoteCode'){
      key_text = 'nextRequestQuoteCode';
      sql = "SELECT * FROM setting WHERE key_text='RequestQuoteCodePrefix' OR key_text='nextRequestQuoteCode'";
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
app.get('/checkQuoteItems', (req, res, next) => {
  db.query(
    `SELECT purchase_request_items_id FROM purchase_quote_items`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
          msg: 'Failed'
        });
      } else {
        const quoteItemsIds = result.map((row) => row.purchase_request_items_id);
        return res.status(200).send({
          data: quoteItemsIds,
          msg: 'Success'
        });
      }
    }
  );
});

app.post('/SupplierQuote', (req, res, next) => {
  db.query(
    `SELECT supplier_id,rq_code, purchase_quote_id FROM purchase_quote
    WHERE supplier_id=${db.escape(req.body.supplier_id)}`,
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

  app.get('/getSupplierPurchase', (req, res, next) => {
    db.query(`SELECT o.purchase_order_id
    ,o.po_date
    ,o.po_code
    ,o.creation_date
    ,o.payment_status
    FROM purchase_order o 
    WHERE o.purchase_order_id !=''`,
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

  app.get('/getTranslationForReqForQuote', (req, res, next) => {
    db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdRequestForQuote%'`,
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
  

module.exports = app;