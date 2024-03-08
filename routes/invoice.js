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

app.post('/insertInvoice', (req, res, next) => {

  let data = {
    invoice_code: req.body.invoice_code
    , invoice_source_id: req.body.invoice_source_id
    , company_id: req.body.company_id
    , source_type: req.body.source_type
    , status: 'Due'
    , creation_date: req.body.creation_date   
    , created_by: req.body.created_by
 };
  let sql = "INSERT INTO invoice SET ?";
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

app.get('/getReturnsStats', (req, res, next) => {
  db.query(`SELECT
    s.sales_return_id,
    s.status,
    c.company_id,
    c.company_name,
    i.invoice_id,
    i.invoice_code,
    o.order_id,
    o.order_code
FROM company c
LEFT JOIN orders o ON c.company_id = o.company_id
LEFT JOIN invoice i ON o.order_id = i.order_id
INNER JOIN sales_return s ON i.invoice_id = s.invoice_id
WHERE c.company_id !=''`,
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
app.post('/getOrdersStats', (req, res, next) => {
  db.query(`SELECT o.order_id,
 o.order_status,
 c.company_id,
c.company_name
FROM orders o
LEFT JOIN company c ON o.company_id = c.company_id
WHERE o.company_id=${db.escape(req.body.company_id)}
ORDER BY o.order_id`,
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
            });

        }
 
    }
  );
});
// app.post('/editInvoiceItems', (req, res, next) => {
//   db.query(`UPDATE invoice_item 
//             SET item_title = ${db.escape(req.body.item_title)}
//              ,unit=${db.escape(req.body.unit)}
//             ,unit_price=${db.escape(req.body.unit_price)}
//              ,qty=${db.escape(req.body.qty)}
//             ,total_cost=${db.escape(req.body.total_cost)}
//             ,modification_date=${db.escape(req.body.modification_date)}
//             ,modified_by=${db.escape(req.body.modified_by)}
//              WHERE invoice_item_id  =  ${db.escape(req.body.invoice_item_id )}`,
//     (err, result) => {
//       if (err) {
//         console.log("error: ", err);
//         return;
//       } else {
//             return res.status(200).send({
//               data: result,
//               msg:'Success'
//             });
//       }
//      }
//    );
// })
app.get('/getTradingInvoiceSummary', (req, res, next) => {
  db.query(`SELECT 
    c.company_id,
    c.company_name,
    q.quote_id,
    (SELECT SUM(q.total_amount)) AS quoteAmount,
    o.order_id,
    o.order_code,
    i.invoice_id,
    i.invoice_code,
    i.status,
    (SELECT SUM(it.total_cost)) AS invoiceAmount,
    r.amount AS receiptAmount,
    CASE
        WHEN g.order_id IS NOT NULL THEN 'Delivered'
        ELSE 'Not Delivered'
    END AS deliveryStatus
FROM company c
LEFT JOIN orders o ON c.company_id = o.company_id
LEFT JOIN goods_delivery g ON o.order_id = g.order_id
LEFT JOIN invoice i ON o.order_id = i.order_id
LEFT JOIN invoice_item it ON i.invoice_id = it.invoice_id
LEFT JOIN receipt r ON o.order_id = r.order_id
LEFT JOIN quote q ON o.quote_id = q.quote_id
WHERE o.order_id IS NOT NULL 
AND i.status != ''
GROUP BY i.invoice_id`,
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
app.post('/getOrdersStats', (req, res, next) => {
  db.query(`SELECT o.order_id,
 o.order_status,
 c.company_id,
c.company_name
FROM orders o
LEFT JOIN company c ON o.company_id = c.company_id
WHERE o.company_id=${db.escape(req.body.company_id)}
ORDER BY o.order_id`,
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
            });

        }
 
    }
  );
});

app.post('/getReturnStats', (req, res, next) => {
  db.query(`SELECT
    s.sales_return_id,
    s.status AS sales_return_status,
    c.company_id,
    c.company_name,
    i.invoice_id,
    i.invoice_code,
    o.order_id,
    o.order_code
FROM company c
LEFT JOIN orders o ON c.company_id = o.company_id
LEFT JOIN invoice i ON o.order_id = i.order_id
INNER JOIN sales_return s ON i.invoice_id = s.invoice_id
WHERE c.company_id = ${db.escape(req.body.company_id)}`,
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
            });

        }
 
    }
  );
});

app.get('/getMainInvoice', (req, res, next) => {
  db.query(
    `SELECT i.*
    ,cont.contact_id
    ,c.company_id
    ,c.company_name
    ,CONCAT_WS(' ', cont.first_name, cont.last_name) AS contact_name
    ,cont.position as position
    ,cont.company_address_flat
    ,cont.company_address_street
    ,cont.company_address_town
    ,cont.company_address_state
    ,cont.company_address_country
    ,c.company_name
    ,p.title AS project_title
    ,p.project_value AS project_value
    ,p.currency AS project_currency
    ,p.description AS project_description
    ,p.project_code as project_code
    ,ca.address_flat	AS comp_mul_address_flat
    ,ca.address_street  AS comp_mul_address_street
    ,ca.address_town	AS comp_mul_address_town
    ,ca.address_state   AS comp_mul_address_state
    ,ca.address_country AS comp_mul_address_country
    ,DATEDIFF(Now() ,i.invoice_due_date) AS age
    ,(IF(ISNULL((SELECT FORMAT(SUM(invoice_amount), 0) FROM invoice 
    WHERE project_id = i.project_id AND invoice_code < i.invoice_code AND status != LOWER('Cancelled'))), 0, (SELECT FORMAT(SUM(invoice_amount), 0)
    FROM invoice
    WHERE project_id = i.project_id AND invoice_code < i.invoice_code AND status != LOWER('Cancelled')))) AS prior_invoice_billed
    ,b.title AS branch_name
    FROM invoice i
     LEFT JOIN (project p)     	ON (i.project_id = p.project_id)
     LEFT JOIN (contact cont)  	ON (p.contact_id = cont.contact_id)
    LEFT JOIN (company c)     	ON (p.company_id = c.company_id)
    LEFT JOIN (company_address ca)ON (cont.company_address_id = ca.company_address_id)
     LEFT JOIN branch b ON(p.branch_id = b.branch_id)
     WHERE i.invoice_id != '' ORDER BY i.invoice_code DESC`,
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

app.post('/getInvoiceForReceiptOld', (req, res, next) => {
  db.query(`
    SELECT
      i.invoice_code,
      i.status,
      i.invoice_id,
      SUM(ii.total_cost) AS invoice_amount
    FROM
      invoice i
      LEFT JOIN invoice_item ii ON ii.invoice_id = i.invoice_id
      LEFT JOIN orders b ON b.order_id = i.order_id
    WHERE b.order_id = ${db.escape(req.body.order_id)} AND i.status != 'Paid' AND ii.total_cost !=''
   GROUP BY i.invoice_id `,
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

app.post('/getInvoiceForReceipt', (req, res, next) => {
  db.query(`
    SELECT
      i.invoice_code,
      i.status,
      i.invoice_id,
      i.invoice_source_id,
      SUM(ii.total_cost) AS invoice_amount
    FROM
      invoice i
      LEFT JOIN invoice_item ii ON ii.invoice_id = i.invoice_id
      LEFT JOIN orders b ON b.order_id = i.invoice_source_id
    WHERE b.order_id = ${db.escape(req.body.order_id)} AND i.status != 'Paid' AND ii.total_cost !=''
   GROUP BY i.invoice_id `,
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


app.get('/checkQuoteItems', (req, res, next) => {
  db.query(
    `SELECT order_item_id  FROM invoice_item`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
          msg: 'Failed'
        });
      } else {
        const quoteItemsIds = result.map((row) => row.order_item_id);
        return res.status(200).send({
          data: quoteItemsIds,
          msg: 'Success'
        });
      }
    }
  );
});

app.get('/checkGoodsItems', (req, res, next) => {
  db.query(
    `SELECT goods_delivery_item_id FROM invoice_item`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
          msg: 'Failed'
        });
      } else {
        const quoteItemsIds = result.map((row) => row.goods_delivery_item_id);
        return res.status(200).send({
          data: quoteItemsIds,
          msg: 'Success'
        });
      }
    }
  );
});


app.post('/getOrderLineItemsById', (req, res, next) => {
  db.query(`SELECT
  qt.* 
  FROM order_item qt 
  WHERE qt.order_id =  ${db.escape(req.body.order_id)}`,
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

app.post('/getGoodsLineItemsById', (req, res, next) => {
  db.query(`SELECT
  qt.*,
  os.quote_id
  FROM goods_delivery_item qt 
  LEFT JOIN orders os ON os.order_id=qt.order_id
  WHERE qt.goods_delivery_id =  ${db.escape(req.body.goods_delivery_id)}`,
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


app.post('/getOrderLineItemsByIdold', (req, res, next) => {
  db.query(`SELECT
            qt.* 
            FROM order_item qt 
            WHERE qt.order_id =  ${db.escape(req.body.order_id)}`,
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

app.delete('/deleteReceipt', (req, res, next) => {

  let data = {receipt_id: req.body.receipt_id};
  let sql = "DELETE FROM receipt WHERE ?";
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


app.post('/editReceipt', (req, res, next) => {
  db.query(`UPDATE receipt 
            SET amount = ${db.escape(req.body.amount)}
             ,mode_of_payment=${db.escape(req.body.mode_of_payment)}
            ,receipt_date=${db.escape(req.body.receipt_date)}
             ,receipt_status=${db.escape(req.body.receipt_status)}
            ,remarks=${db.escape(req.body.remarks)}
             WHERE receipt_id =  ${db.escape(req.body.receipt_id)}`,
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



app.get('/getReceipts', (req, res, next) => {
  db.query(
    `select i.receipt_id
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
   from receipt i
  LEFT JOIN orders o ON o.order_id=i.order_id
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

app.post('/editInvoice', (req, res, next) => {
  db.query(`UPDATE invoice 
            SET status = ${db.escape(req.body.status)}
             ,invoice_date=${db.escape(req.body.invoice_date)}
             ,invoice_due_date=${db.escape(req.body.invoice_due_date)}
            ,invoice_terms=${db.escape(req.body.invoice_terms)}
           WHERE invoice_id =  ${db.escape(req.body.invoice_id)}`,
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

app.get('/getInvoiceSummary', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.invoice_code 
  ,ir.amount as received
  ,(select(i.invoice_amount-ir.amount)) as balance
  ,i.invoice_due_date
  ,i.invoice_date
  ,i.invoice_amount
  ,i.selling_company
  ,i.start_date
  ,i.end_date
  ,i.quote_code
  ,i.po_number
  ,i.project_location
  ,i.project_reference
  ,i.so_ref_no
  ,i.code
  ,i.reference
   ,i.invoice_terms
   ,i.attention
   ,i.status
 from invoice i
  LEFT JOIN invoice_receipt_history ir ON ir.invoice_id=i.invoice_id
WHERE i.invoice_id !='' AND i.status != LOWER('Cancelled')
ORDER BY i.invoice_date DESC`,
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

app.post('/getReturnItemsById', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.item_title
  ,i.qty
  ,i.unit_price
  ,i.total_cost
 from invoice_item i
  LEFT JOIN invoice iv  ON iv.invoice_id=i.invoice_id
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

app.post('/', (req, res, next) => {
  db.query(
    `= ${db.escape(req.body.invoice_id)}`,
    (err, result) => {
      if (err) {
        return res.status(500).send({
          data: err,
          msg: 'Failed'
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
app.post('/getInvoiceOrderedQty', (req, res, next) => {
  db.query(`SELECT qty, invoice_qty
  FROM invoice_item 
  WHERE invoice_id = ${db.escape(req.body.invoice_id)}`,
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

app.get('/getInvoice', (req, res, next) => {
  db.query(`SELECT
  i.invoice_id,
  i.invoice_code,
  i.invoice_due_date,
  i.invoice_date,
  i.invoice_amount,
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
  i.invoice_terms,
  i.attention,
  i.status
FROM
  invoice i
LEFT JOIN
  sales_return sr ON i.invoice_id = sr.invoice_id
WHERE
  i.invoice_id != '' AND
  i.status != LOWER('Paid') AND
  sr.invoice_id IS NULL
ORDER BY
  i.invoice_date DESC`,
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
app.get('/getInvoiceItemsByItemsId/:invoiceItemId', (req, res, next) => {
  const invoiceItemId = req.params.invoiceItemId;
  db.query(
    `SELECT it.item_title,
      it.invoice_item_id,
      i.invoice_id,
      it.description,
      it.total_cost,
      it.unit,
      it.qty,
      it.unit_price,
      it.remarks
    FROM invoice_item it
    LEFT JOIN invoice i ON (i.invoice_id = it.invoice_id)
    WHERE it.invoice_item_id = ${db.escape(invoiceItemId)}`,
    (err, result) => {
      if (err) {
        // Handle database errors
        console.error(err);
        return res.status(500).send({
          msg: 'Internal Server Error',
        });
      }

      if (result.length === 0) {
        return res.status(404).send({
          msg: 'Invoice item not found',
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

app.post('/getInvoiceItemsById', (req, res, next) => {
  db.query(`SELECT it.item_title,
  it.invoice_item_id,
i.invoice_id,
it.description,
it.total_cost,
it.unit,
it.qty,
it.qty_returned,
it.unit_price,
it.remarks,
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
  db.query(`SELECT it.sales_return_history_id ,
  it.return_date,
i.invoice_id,
it.invoice_item_id,
it.price,
it.notes,
it.qty_return,
it.order_id,
iv.item_title
FROM sales_return_history it
LEFT JOIN (sales_return i) ON (i.invoice_id=it.invoice_id)
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

app.post('/getInvoiceItemsByItemId', (req, res, next) => {
  db.query(`SELECT it.item_title,
  it.invoice_item_id,
i.invoice_id,
it.description,
it.total_cost,
it.unit,
it.qty,
it.unit_price,
it.remarks
FROM invoice_item it
LEFT JOIN (invoice i) ON (i.invoice_id=it.invoice_id)
WHERE i.invoice_item_id = ${db.escape(req.body.invoice_item_id)}`,
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

app.post('/getSalesReturnId', (req, res, next) => {
  db.query(`SELECT o.sales_return_id 
  ,o.return_date
  , o.creation_date
  ,o.created_by
  ,o.modified_by
  ,o.modification_date
  ,o.invoice_id
  ,i.invoice_code
  ,i.status AS invoice_status
  ,o.order_id
  ,o.status
  ,i.invoice_code
  ,(select sum(total_cost)) as InvoiceAmount
  from sales_return o
  LEFT JOIN invoice i ON i.invoice_id = o.invoice_id
  LEFT JOIN invoice_item it ON it.invoice_id = i.invoice_id
   WHERE o.sales_return_id = ${db.escape(req.body.sales_return_id)}`,
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

app.post('/getInvoiceByInvoiceItemId', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.item_title
  ,o.invoice_code
  ,i.description
  ,i.total_cost
   from invoice_item i
   LEFT JOIN invoice o ON o.invoice_id=i.invoice_id
 WHERE i.invoice_item_id= ${db.escape(req.body.invoice_item_id)}`,
    (err, result) => {

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

    }
  );
});
app.post('/getInvoiceByItemsId', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.item_title
  ,o.invoice_code
  ,i.description
  ,i.total_cost
  ,i.qty
  ,i.unit_price
   from invoice_item i
   LEFT JOIN invoice o ON o.invoice_id=i.invoice_id
 WHERE i.invoice_id= ${db.escape(req.body.invoice_id)}`,
    (err, result) => {

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

    }
  );
});
app.post('/getInvoiceByItemId', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.item_title
  ,o.invoice_code
  ,i.description
  ,i.total_cost
  ,i.qty
  ,i.unit_price
  ,i.invoice_item_id
   from invoice_item i
   LEFT JOIN invoice o ON o.invoice_id=i.invoice_id
 WHERE i.invoice_id= ${db.escape(req.body.invoice_id)}`,
    (err, result) => {

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

    }
  );
});
app.post('/getInvoiceByOrderItemId', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.item_title
  ,o.invoice_code
  ,i.description
  ,i.total_cost
  ,i.qty
  ,i.invoice_qty
  ,i.unit_price
  ,i.invoice_item_id
  ,i.unit
  ,i.created_by
  ,i.creation_date
  ,i.modified_by
  ,i.modification_date
   from invoice_item i
   LEFT JOIN invoice o ON o.invoice_id=i.invoice_id
 WHERE i.invoice_id= ${db.escape(req.body.invoice_id)}`,
    (err, result) => {

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

    }
  );
});


app.post('/getInvoiceByIdold', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.invoice_code  
  ,i.invoice_source
  ,i.goods_delivery_id
  ,i.creation_date
  ,i.created_by
  ,i.modification_date
  ,i.modified_by
  ,i.status
  ,i.invoice_date
   ,i.invoice_amount
   ,i.gst_percentage
   ,i.gst_value
   ,i.discount
   ,i.quote_code
   ,i.po_number
    ,i.project_location
    ,i.project_reference
    ,i.so_ref_no
    ,i.code
    ,i.reference
     ,i.invoice_terms
     ,i.attention
     ,i.site_code
     ,i.payment_terms
     ,i.order_id
     ,o.order_code
     ,g.goods_delivery_id
     ,g.goods_delivery_code
     ,(select sum(it.total_cost)) as amount
   from invoice i
  LEFT JOIN orders o ON o.order_id=i.order_id
  LEFT JOIN goods_delivery g ON g.goods_delivery_id=i.goods_delivery_id
 LEFT JOIN invoice_item it ON it.invoice_id=i.invoice_id
 WHERE i.invoice_id = ${db.escape(req.body.invoice_id)} `,
    (err, result) => {

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

    }
  );
});

app.post('/getInvoiceById', (req, res, next) => {
  db.query(`SELECT
    i.invoice_id,
    i.invoice_source_id,
    i.source_type,
    i.invoice_code,
    i.invoice_due_date,
    co.company_name,
    i.status,
    i.invoice_date,
    i.invoice_amount,
    i.invoice_due_date,
    i.created_by,
    i.creation_date,
    i.modified_by,
    i.modification_date,
    i.invoice_terms,
    i.company_id,
    o.order_id,
    o.order_code,
    g.goods_delivery_id,
    g.goods_delivery_code,
    SUM(it.total_cost) AS InvoiceAmount
  FROM
    invoice i
  LEFT JOIN
    orders o ON o.order_id = i.invoice_source_id AND i.source_type = 'Sales_Order'
  LEFT JOIN
    goods_delivery g ON g.goods_delivery_id = i.invoice_source_id AND i.source_type = 'Goods_Delivery'
  LEFT JOIN
    invoice_item it ON it.invoice_id = i.invoice_id
  LEFT JOIN
    company co ON co.company_id = i.company_id
  WHERE i.invoice_id = ${db.escape(req.body.invoice_id)}`,
  (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: 'failed'
      });
    } else {
      // Extracting order_code and goods_delivery_code from the result
      const { order_code, goods_delivery_code } = result[0];
      // Adding order_code and goods_delivery_code to the result object
      result[0].order_code = order_code;
      result[0].goods_delivery_code = goods_delivery_code;
      
      return res.status(200).send({
        data: result,
        msg: 'Success'
      });
    }
  });
});


app.post('/getInvoiceByInvoiceIdId', (req, res, next) => {
  db.query(`SELECT
    i.invoice_id,
    i.invoice_source_id,
    i.source_type,
    i.invoice_code,
    i.invoice_due_date,
    co.company_name,
    i.status,
    i.invoice_date,
    i.invoice_amount,
    i.invoice_due_date,
    i.created_by,
    i.creation_date,
    i.modified_bys,
    i.modification_date,
    i.invoice_terms,
    o.company_id,
    o.order_id,
    o.order_code,
    g.goods_delivery_id,
    g.goods_delivery_code,
    SUM(it.total_cost) AS InvoiceAmount
  FROM
    invoice i
  LEFT JOIN
    orders o ON o.order_id = i.invoice_source_id AND i.source_type = 'Sales_Order'
  LEFT JOIN
    goods_delivery g ON g.goods_delivery_id = i.invoice_source_id AND i.source_type = 'Goods_Delivery'
  LEFT JOIN
    invoice_item it ON it.invoice_id = i.invoice_id
  LEFT JOIN
    company co ON co.company_id = o.company_id
  WHERE i.invoice_id = ${db.escape(req.body.invoice_id)}`,
  (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err,
        msg: 'failed'
      });
    } else {
      // Extracting order_code and goods_delivery_code from the result
      const { order_code, goods_delivery_code } = result[0];
      // Adding order_code and goods_delivery_code to the result object
      result[0].order_code = order_code;
      result[0].goods_delivery_code = goods_delivery_code;
      
      return res.status(200).send({
        data: result,
        msg: 'Success'
      });
    }
  });
});



app.get('/getCustomerDropdown', (req, res, next) => {
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

app.post('/getSalesOrderDropdown', (req, res, next) => {
  db.query(`SELECT 
  o.order_id
  ,o.order_code
  FROM orders o
  LEFT JOIN (invoice i) ON i.invoice_source_id = o.order_id 
  WHERE
  o.order_id != '' 
  AND i.invoice_source_id IS NULL AND o.company_id=${db.escape(req.body.company_id)}`, 
  (err, result) => {
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

app.post('/getGoodsDeliveryDropdown', (req, res, next) => {
  db.query(`SELECT 
  g.goods_delivery_id,
  g.goods_delivery_code
  FROM goods_delivery g
  LEFT JOIN (invoice i) ON i.invoice_source_id = g.goods_delivery_id
  WHERE
  g.goods_delivery_id != '' 
  AND i.invoice_source_id IS NULL AND g.company_id=${db.escape(req.body.company_id)}`, 
  (err, result) => {
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
app.get('/getInvoices', (req, res, next) => {
  db.query(`SELECT
  i.invoice_id,
  i.invoice_source_id,
  i.source_type,
  i.invoice_code,
  co.company_name,
  i.status,
  i.invoice_date,
  i.invoice_due_date,
  i.invoice_amount,
  i.created_by,
  i.creation_date,
  i.modified_by,
  i.modification_date,
  i.invoice_terms,
  o.order_id,
  o.order_code AS source_code,
  g.goods_delivery_id,
  g.goods_delivery_code AS source_code,
  SUM(it.total_cost) AS InvoiceAmount
FROM
  invoice i
LEFT JOIN
  orders o ON o.order_id = i.invoice_source_id AND i.source_type = 'Sales_Order'
LEFT JOIN
  goods_delivery g ON g.goods_delivery_id = i.invoice_source_id AND i.source_type = 'Goods_Delivery'
LEFT JOIN
  invoice_item it ON it.invoice_id = i.invoice_id
LEFT JOIN
  company co ON co.company_id = o.company_id
WHERE
  i.invoice_id != ''
GROUP BY
  i.invoice_id
  ORDER BY i.invoice_id DESC;`,
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

app.get('/checkReceiptItemshide', (req, res, next) => {
  db.query(
    `SELECT pricelist_id
    FROM invoice_item `,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
          msg: 'Failed'
        });
      } else {
        const quoteItemsIds = result.map((row) => row.quote_id);
        return res.status(200).send({
          data: quoteItemsIds,
          msg: 'Success'
        });
      }
    }
  );
});
app.post('/checkPricelistIdInInvoiceItemsold', (req, res, next) => {
  const pricelistIdToCheck = req.body.price_list_id; // assuming the client sends the pricelist_id

  db.query(
    `SELECT COUNT(*) AS count
      FROM invoice_item
      WHERE quote_id = ${db.escape(pricelistIdToCheck)}`,
    (err, result) => {
      if (err) {
        console.log('error: ', err);
        return res.status(400).send({
          data: err,
          msg: 'failed',
        });
      } else {
        const exists = result[0].count > 0;
        return res.status(200).send({
          data: exists,
          msg: 'Success',
        });
      }
    }
  );
});

app.post('/checkPricelistIdInInvoiceItems', (req, res, next) => {
  const QuoteIdToCheck = req.body.quote_id; // assuming the client sends the pricelist_id

  db.query(
    `SELECT COUNT(*) AS count
      FROM invoice_item
      WHERE quote_id = ${db.escape(QuoteIdToCheck)}`,
    (err, result) => {
      if (err) {
        console.log('error: ', err);
        return res.status(400).send({
          data: err,
          msg: 'failed',
        });
      } else {
        const exists = result[0].count > 0;
        return res.status(200).send({
          data: exists,
          msg: 'Success',
        });
      }
    }
  );
});

app.post('/hideEditIconByIdquote', (req, res, next) => {
  db.query(` SELECT it.quote_id
  FROM invoice_item it`,
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

app.post('/getInvoicesById', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.invoice_code  
  ,i.status
  ,i.invoice_date
   ,i.invoice_amount
   ,i.gst_value
   ,i.discount
   ,i.quote_code
   ,i.po_number
    ,i.project_location
    ,i.project_reference
    ,i.so_ref_no
    ,i.code
    ,i.reference
     ,i.invoice_terms
     ,i.attention
     ,i.site_code
     ,i.payment_terms
   from invoice i
  LEFT JOIN orders o ON o.order_id=i.order_id
 WHERE i.invoice_id= ${db.escape(req.body.invoice_id)} AND i.status != LOWER('Cancelled')`,
    (err, result) => {

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

    }
  );
});

app.post('/getProjectInvoiceById', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.invoice_code  
  ,i.status
  ,i.invoice_date
   ,i.invoice_amount
   ,i.gst_value
   ,i.discount
   ,i.quote_code
   ,i.po_number
    ,i.project_location
    ,i.project_reference
    ,i.so_ref_no
    ,i.code
    ,i.reference
     ,i.invoice_terms
     ,i.attention
     ,i.site_code
     ,i.payment_terms
   from invoice i
  LEFT JOIN orders o ON o.order_id=i.order_id
 WHERE o.project_id = ${db.escape(req.body.project_id)} AND i.status != LOWER('Cancelled')`,
    (err, result) => {

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

    }
  );
});

app.get("/getOrdersByCompanyId/:companyId", (req, res) => {
  const companyId = req.params.companyId;

  if (!companyId) {
    return res.status(400).send({
      msg: "Missing companyId parameter",
    });
  }

  db.query(
    `SELECT b.order_code, b.order_id 
    FROM orders b 
    LEFT JOIN company co ON (co.company_id = b.company_id)
    WHERE b.company_id = ? 
    AND b.order_id NOT IN (SELECT DISTINCT order_id FROM invoice)`,
    [companyId],
    (err, result) => {
      if (err) {
        return res.status(500).send({
          data: err,
          msg: "Failed to fetch bookings",
        });
      } else {
        return res.status(200).send({
          data: result,
        });
      }
    }
  );
});






app.post('/getProjectInvoicePdf', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.invoice_code  
  ,i.status
  ,i.invoice_date
   ,i.invoice_amount
   ,i.gst_value
   ,i.discount
   ,i.quote_code
   ,i.po_number
    ,i.project_location
    ,i.project_reference
    ,i.so_ref_no
    ,i.code
    ,i.reference
     ,i.invoice_terms
     ,i.attention
     ,i.site_code
     ,i.payment_terms
     ,it.item_title
     ,it.description
     ,it.total_cost
     from invoice_item it
    
    LEFT JOIN invoice i ON it.invoice_id=i.invoice_id
    LEFT JOIN orders o ON o.order_id=i.order_id
    WHERE i.invoice_id=${db.escape(req.body.invoice_id)} AND i.status != LOWER('Cancelled')
    `,
    (err, result) => {

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

    }
  );
});


app.post('/getReceiptCancel', (req, res, next) => {
  db.query(`SELECT DISTINCT r.receipt_id
  ,r.receipt_id
  ,r.receipt_code
  ,r.receipt_status
  ,r.amount
  ,r.receipt_date
  ,r.mode_of_payment
  ,r.remarks
  ,r.creation_date
  ,r.created_by
  ,r.modification_date
  ,r.modified_by 
  FROM receipt r  
  LEFT JOIN orders o ON (o.order_id = r.order_id) WHERE o.order_id =${db.escape(req.body.order_id)} 
 AND r.receipt_status = LOWER('Cancelled')`,
    (err, result) => {
     
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
 
    }
  );
}); 
app.post('/editInvoices', (req, res, next) => {
  db.query(`UPDATE invoice 
            SET invoice_date = ${db.escape(req.body.invoice_date)}
             ,invoice_terms = ${db.escape(req.body.invoice_terms)}
             ,source_type = ${db.escape(req.body.source_type)}
             ,invoice_source_id =  ${db.escape(req.body.invoice_source_id)}
             ,invoice_due_date =  ${db.escape(req.body.invoice_due_date)}
             ,modified_by = ${db.escape(req.body.modified_by)}
             ,modification_date = ${db.escape(req.body.modification_date)}
    ,invoice_amount = (
        SELECT SUM(total_cost) 
        FROM invoice_item 
        WHERE invoice_id = ${db.escape(req.body.invoice_id)}
    )
WHERE invoice_id = ${db.escape(req.body.invoice_id)}`,
    (err, result) => {
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
     }
  );
});

app.post('/getInvoiceCancel', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.invoice_code  
  ,i.status
  ,i.invoice_date
   ,i.invoice_amount
   ,i.gst_value
   ,i.discount
   ,i.quote_code
   ,i.po_number
    ,i.project_location
    ,i.project_reference
    ,i.so_ref_no
    ,i.code
    ,i.reference
     ,i.invoice_terms
     ,i.attention
   from invoice i
  LEFT JOIN orders o ON o.order_id=i.order_id
 WHERE i.order_id= ${db.escape(req.body.order_id)} AND i.status = LOWER('Cancelled')`,
    (err, result) => {

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

    }
  );
});

app.post('/getProjectInvoiceCancel', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.invoice_code  
  ,i.status
  ,i.invoice_date
   ,i.invoice_amount
   ,i.gst_value
   ,i.discount
   ,i.quote_code
   ,i.po_number
    ,i.project_location
    ,i.project_reference
    ,i.so_ref_no
    ,i.code
    ,i.reference
     ,i.invoice_terms
     ,i.attention
   from invoice i
  LEFT JOIN orders o ON o.order_id=i.order_id
 WHERE o.project_id= ${db.escape(req.body.project_id)} AND i.status = LOWER('Cancelled')`,
    (err, result) => {

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

    }
  );
});


app.post('/getInvoiceByInvoiceId', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.invoice_code  
  ,i.status
  ,i.invoice_date
  ,i.invoice_amount
  ,i.gst_percentage
   ,i.invoice_amount 
   ,i.invoice_amount AS total_cost
   ,i.gst_value
   ,i.discount
   ,i.payment_terms
   ,i.quote_code
   ,i.po_number
    ,i.project_location
    ,i.project_reference
    ,i.so_ref_no
    ,i.code
    ,i.site_code
    ,i.reference
     ,i.invoice_terms
     ,i.attention
     ,c.company_name AS company_name
     ,o.cust_address1
  ,o.cust_address2
  ,o.cust_address_country
  ,o.cust_address_po_code
  ,p.title
   from invoice i
  LEFT JOIN orders o ON o.order_id=i.order_id
  LEFT JOIN company c ON (o.company_id = c.company_id) 
  LEFT JOIN project p ON (p.project_id = i.project_id) 
 WHERE i.invoice_id= ${db.escape(req.body.invoice_id)}`,
    (err, result) => {

      if (err) {
        return res.status(400).send({
             data: err,
             msg:'Failed'
           });
     } else {
           return res.status(200).send({
             data: result[0],
             msg:'Success'
           });
  
     }

    }
   );
});



app.post('/getReceiptData', (req, res, next) => {
  db.query(`select i.receipt_id
  ,i.remarks
  ,i.creation_date
  ,i.modification_date
  ,i.created_by
  ,i.modified_by
  ,i.receipt_code  
  ,i.receipt_status
  ,i.amount
  ,i.mode_of_payment
   ,i.receipt_date
   from receipt i
  LEFT JOIN orders o ON o.order_id=i.order_id
 WHERE i.receipt_id= ${db.escape(req.body.receipt_id)}`,
    (err, result) => {
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
    }
  );
});


app.post('/getReceiptByIds', (req, res, next) => {
  db.query(`SELECT DISTINCT r.receipt_id
  ,r.receipt_id
  ,o.order_id
  ,r.receipt_code
  ,r.receipt_status
  ,r.amount
  ,r.receipt_date
  ,r.mode_of_payment
  ,r.remarks
  ,r.creation_date
  ,r.created_by
  ,r.modification_date
  ,r.modified_by 
  FROM receipt r  
  LEFT JOIN invoice_receipt_history ih ON (ih.receipt_id = r.receipt_id) 
   LEFT JOIN invoice i ON (i.invoice_id = ih.invoice_id) 
 LEFT JOIN orders o ON (o.order_id = i.order_id) WHERE o.order_id = ${db.escape(req.body.order_id)}`,
    (err, result) => {

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

    }
  );
});

app.post('/editInvoiceStatus', (req, res, next) => {
  db.query(`UPDATE invoice 
            SET status = 'Paid'
             WHERE invoice_id =  ${db.escape(req.body.invoice_id)}`,
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

app.post('/editInvoicePartialStatus', (req, res, next) => {
  db.query(`UPDATE invoice 
            SET status = 'Partial Payment'
             WHERE invoice_id =  ${db.escape(req.body.invoice_id)}`,
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

app.post('/getProjectReceiptById', (req, res, next) => {
  db.query(`SELECT DISTINCT r.receipt_id
  ,r.receipt_id
  ,o.order_id
  ,r.receipt_code
  ,r.receipt_status
  ,r.amount
  ,r.receipt_date
  ,r.mode_of_payment
  ,r.remarks
  ,r.creation_date
  ,r.created_by
  ,r.modification_date
  ,r.modified_by 
  FROM receipt r  
  LEFT JOIN invoice_receipt_history ih ON (ih.receipt_id = r.receipt_id) 
   LEFT JOIN invoice i ON (i.invoice_id = ih.invoice_id) 
 LEFT JOIN orders o ON (o.order_id = i.order_id) WHERE r.order_id = ${db.escape(req.body.order_id)}`,
    (err, result) => {

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

    }
  );
});
 
 app.post('/getCheckboxReceiptById', (req, res, next) => {
  db.query(`SELECT DISTINCT
    r.receipt_id,
    r.receipt_id AS r_receipt_id,
    o.order_id,
    r.order_id AS r_order_id,
    r.receipt_code,
    r.receipt_status,
    r.amount,
    r.receipt_date,
    r.mode_of_payment,
    r.remarks,
    r.creation_date,
    r.created_by,
    r.modification_date,
    r.modified_by
FROM receipt r
LEFT JOIN invoice_receipt_history ih ON (ih.receipt_id = r.receipt_id)
LEFT JOIN invoice i ON (i.invoice_id = ih.invoice_id)
LEFT JOIN orders o ON (o.order_id = i.order_id)
WHERE r.order_id =  ${db.escape(req.body.order_id)} AND i.invoice_id IS NULL AND r.receipt_status <> 'cancelled';
`,
    (err, result) => {

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

    }
  );
});

 app.post('/getPDfProjectReceiptById', (req, res, next) => {
  db.query(`SELECT DISTINCT r.receipt_id
  ,r.receipt_id
  ,o.order_id
  ,r.receipt_code
  ,r.receipt_status
  ,r.amount
  ,r.receipt_date
  ,r.mode_of_payment
  ,r.remarks
  ,r.creation_date
  ,r.created_by
  ,i.invoice_code
  ,i.invoice_amount
  ,r.modification_date
  ,r.modified_by 
    ,o.cust_address1
  ,o.cust_address2
  ,o.cust_address_country
  ,o.cust_address_po_code
  , o.cust_company_name
  FROM receipt r  
  LEFT JOIN invoice_receipt_history ih ON (ih.receipt_id = r.receipt_id) 
   LEFT JOIN invoice i ON (i.invoice_id = ih.invoice_id) 
 LEFT JOIN orders o ON (o.order_id = i.order_id) WHERE r.receipt_id =${db.escape(req.body.receipt_id)}`,
    (err, result) => {

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

    }
  );
});

app.post('/getNoteById', (req, res, next) => {
  db.query(`select i.credit_note_id 
  ,i.credit_note_code  
  ,i.amount
  ,i.from_date
  ,i.order_id
   from credit_note i
   Where i.order_id = ${db.escape(req.body.order_id)}`,
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
app.post('/getInvoiceItemByInvoiceId', (req, res, next) => {
  db.query(`select i.item_title  
  ,i.description
  ,i.unit
   ,i.qty
   ,i.qty_returned
   ,i.unit_price
   ,i.total_cost
   ,(i.qty*unit_price) AS amount
   from invoice_item i
  WHERE i.invoice_id= ${db.escape(req.body.invoice_id)}`,
    (err, result) => {

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

    }
  );
});

app.post('/getReceiptById', (req, res, next) => {
  db.query(`SELECT DISTINCT r.receipt_id
  ,r.receipt_id
  ,o.order_id
  ,r.receipt_code
  ,r.receipt_status
  ,r.amount
  ,r.receipt_date
  ,r.mode_of_payment
  ,r.remarks
  ,r.creation_date
  ,r.created_by
  ,r.modification_date
  ,r.modified_by 
  FROM receipt r  
  LEFT JOIN invoice_receipt_history ih ON (ih.receipt_id = r.receipt_id) 
   LEFT JOIN invoice i ON (i.invoice_id = ih.invoice_id) 
 LEFT JOIN orders o ON (o.order_id = i.order_id) WHERE r.order_id =${db.escape(req.body.order_id)}`,
    (err, result) => {

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

    }
  );
});


app.post('/getInvoiceReceiptById', (req, res, next) => {
  db.query(`SELECT i.invoice_code 
  ,i.status
  ,i.invoice_id
  ,i.invoice_amount
  ,(SELECT SUM(invHist.amount) AS prev_sum 
  FROM invoice_receipt_history invHist 
  LEFT JOIN receipt r ON (r.receipt_id = invHist.receipt_id) 
  WHERE invHist.invoice_id = i.invoice_id AND i.status != 'Cancelled' AND r.receipt_status!='cancelled') as prev_amount 
  FROM invoice i
  LEFT JOIN orders o ON (o.order_id = i.order_id) 
  WHERE o.order_id = ${db.escape(req.body.order_id)} AND (i.status='due' OR i.status='Partial Payment')`,
    (err, result) => {

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

    }
  );
});




app.post('/getInvoiceItemById', (req, res, next) => {
  db.query(`SELECT item_title,
invoice_id,
description,
qty_returned,
unit,
qty,
unit_price,
amount,
total_cost,
remarks
FROM invoice_item
WHERE invoice_id = ${db.escape(req.body.invoice_id)}`,
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


app.post('/getInvoiceLineItemsById', (req, res, next) => {
  db.query(`select i.invoice_id
  ,i.invoice_code  
  ,i.status
  ,i.invoice_date
   ,i.invoice_amount
   ,i.gst_value
   ,i.discount
   ,i.payment_terms
   ,i.quote_code
   ,i.po_number
    ,i.project_location
    ,i.project_reference
    ,i.so_ref_no
    ,i.code
    ,i.site_code
    ,i.reference
     ,i.invoice_terms
     ,i.attention
     ,c.company_name AS company_name
     ,o.cust_address1
  ,o.cust_address2
  ,o.cust_address_country
  ,o.cust_address_po_code
  ,p.title
  ,it.item_title
  ,it.description
  ,it.amount
   from invoice i
    LEFT JOIN invoice_item it ON (it.invoice_id = i.invoice_id) 
  LEFT JOIN orders o ON o.order_id=i.order_id
  LEFT JOIN company c ON (o.company_id = c.company_id) 
  LEFT JOIN project p ON (p.project_id = i.project_id) 
 WHERE i.invoice_id= ${db.escape(req.body.invoice_id)}`,
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

app.post('/insertInvoiceold', (req, res, next) => {

  let data = {
    invoice_code: req.body.invoice_code
    ,  invoice_id: req.body.invoice_id
    , order_id: req.body.order_id
    , invoice_amount: req.body.invoice_amount
    , invoice_date: req.body.invoice_date
    , mode_of_payment: req.body.mode_of_payment
    , status: 'Due'
    , creation_date: req.body.creation_date
    , modification_date: req.body.modification_date
    , flag: req.body.flag
    , created_by: req.body.created_by
    , invoice_type: req.body.invoice_type
    , invoice_due_date: req.body.invoice_due_date
    , invoice_terms: req.body.invoice_terms
    , notes: req.body.notes
    , cst: req.body.cst
    , vat: req.body.vat
    , cst_value: req.body.cst_value
    , vat_value: req.body.vat_value
    , frieght: req.body.frieght
    , p_f: req.body.p_f
    , discount: req.body.discount
    , invoice_code_vat: req.body.invoice_code_vat
    , invoice_used: req.body.invoice_used
    , invoice_code_vat_quote: req.body.invoice_code_vat_quote
    , site_id: req.body.site_id
    , manual_invoice_seq: req.body.manual_invoice_seq
    , apply_general_vat: req.body.apply_general_vat
    , selling_company: req.body.selling_company
    , project_id: req.body.project_id
    , invoice_paid_date: req.body.invoice_paid_date
    , modified_by: req.body.modified_by
    , invoice_sent_out: req.body.invoice_sent_out
    , gst_percentage: req.body.gst_percentage
    , title: req.body.title
    , rate_text: req.body.rate_text
    , qty_text: req.body.qty_text
    , start_date: req.body.start_date
    , end_date: req.body.end_date
    , reference_no: req.body.reference_no
    , CBF_Ref_No: req.body.CBF_Ref_No
    , invoice_code_user: req.body.invoice_code_user
    , invoice_sent_out_date: req.body.invoice_sent_out_date
    , payment_terms: req.body.payment_terms
    , po_number: req.body.po_number
    , project_location: req.body.project_location
    , project_reference: req.body.project_reference
    , quote_code: req.body.quote_code
    , invoice_manual_code: req.body.invoice_manual_code
    , code: req.body.code
    , site_code: req.body.site_code
    , attention: req.body.attention
    , reference: req.body.reference
    ,company_id: req.body.reference
 };
  let sql = "INSERT INTO invoice SET ?";
  let query = db.query(sql, data,(err, result) => {
    if (err) {
      return res.status(400).send({
           data: err,
           msg:'Failed'
         });
   } else {
         return res.status(200).send({
           data: result[0],
           msg:'Success'
         });

   }
  });
});


app.post('/insertSalesReturn', (req, res, next) => {

  let data = {
    sales_return_id : req.body.sales_return_id 
    , return_date: req.body.return_date
    , creation_date: req.body.creation_date
    , modification_date: req.body.modification_date
    , invoice_id: req.body.invoice_id
    ,order_id: req.body.order_id
    ,status: req.body.status
    ,created_by: req.body.created_by
 };
  let sql = "INSERT INTO sales_return SET ?";
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

app.post('/insertSalesReturnHistory', (req, res, next) => {
  let data = {
    sales_return_history_id: req.body.sales_return_history_id,
    return_date: req.body.return_date,
    creation_date: req.body.creation_date,
    modification_date: req.body.modification_date,
    invoice_id: req.body.invoice_id,
    order_id: req.body.order_id,
    status: req.body.status,
    invoice_item_id: req.body.invoice_item_id,
    price: req.body.unit_price,
    notes: req.body.notes,
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
  let insertSalesReturnHistorySql = "INSERT INTO sales_return_history SET ?";

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

app.delete('/deleteInvoice', (req, res, next) => {

  let data = {invoice_code: req.body.invoice_code};
  let sql = "DELETE FROM invoice WHERE ?";
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

app.delete('/deleteInvoiceItem', (req, res, next) => {

  let data = {invoice_item_id: req.body.invoice_item_id};
  let sql = "DELETE FROM invoice_item WHERE ?";
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
app.post('/insertBranch', (req, res, next) => {
  let data = {
    title: req.body.title
    , currency: req.body.currency
    , creation_date: req.body.creation_date
    , modification_date: req.body.modification_date
 };
  let sql = "INSERT INTO branch SET ?";
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



app.delete('/deleteBranch', (req, res, next) => {

  let data = {title: req.body.title};
  let sql = "DELETE FROM branch WHERE ?";
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

app.post('/insertInvoiceItem', (req, res, next) => {

  let data = {
       qty: req.body.qty,
       invoice_qty: req.body.invoice_qty
       ,invoice_id: req.body.invoice_id
       ,invoice_source_id: req.body.invoice_source_id
       ,source_type: req.body.source_type
       ,order_id: req.body.order_id
       ,order_item_id : req.body.order_item_id 
       ,goods_delivery_id: req.body.goods_delivery_id
       ,goods_delivery_item_id: req.body.goods_delivery_item_id
    , item_title: req.body.item_title
    , description: req.body.description
    , remarks: req.body.remarks
    , total_cost: req.body.total_cost
    ,created_by: req.body.created_by
    ,creation_date: req.body.creation_date
    ,quote_id: req.body.quote_id
    ,unit_price: req.body.unit_price
    ,unit: req.body.unit
 };
  let sql = "INSERT INTO invoice_item SET ?";
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

app.post('/hideEditIconById', (req, res, next) => {
  db.query(` SELECT it.quote_id
  FROM invoice_item it  
  WHERE it.quote_id =${db.escape(req.body.quote_id)}
  `,
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

app.post('/insertPartialInvoiceItem', (req, res, next) => {

  let data = {
       qty: req.body.qty
       ,invoice_id: req.body.invoice_id
       ,order_id: req.body.order_id
       ,goods_delivery_id: req.body.goods_delivery_id
    , item_title: req.body.item_title
    , description: req.body.description
    , remarks: req.body.remarks
    , total_cost: req.body.total_cost
    ,created_by: req.body.created_by
    ,creation_date: req.body.creation_date
 };
  let sql = "INSERT INTO invoice_item SET ?";
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


// app.post('/insertInvoiceItem', (req, res, next) => {

//   let data = {
//        qty: req.body.quantity
//        ,invoice_id: req.body.invoice_id
//     , item_title: req.body.title
//     , description: req.body.description
//     , remarks: req.body.remarks
//     , total_cost: req.body.total_cost
//     ,created_by: req.body.created_by
//     ,creation_date: req.body.creation_date
//     ,goods_delivery_id: req.body.goods_delivery_id
//     ,goods_delivery_item_id: req.body.goods_delivery_item_id
//     ,invoice_source_id: req.body.invoice_source_id
//     ,source_type: req.body.source_type
//     ,quote_id: req.body.quote_id
//  };
//   let sql = "INSERT INTO invoice_item SET ?";
//   let query = db.query(sql, data,(err, result) => {
//     if (err) {
//       return res.status(400).send({
//               data: err,
//               msg:'failed'
//             });
//     } else {
//           return res.status(200).send({
//             data: result,
//             msg:'Success'
//           });
//     }
//   });
// });



app.post('/insertCompanyAddress', (req, res, next) => {

  let data = {
    address_street: req.body.address_street
    , address_town: req.body.address_town
    , address_state: req.body.address_state
    , address_country: req.body.address_country
    , address_po_code: req.body.address_po_code
    , phone: req.body.phone
    , creation_date: req.body.creation_date
    , modification_date: req.body.modification_date
    , address_flat: req.body.address_flat
    , company_id: req.body.company_id
 };
  let sql = "INSERT INTO company_address SET ?";
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

app.delete('/deleteCompanyAddress', (req, res, next) => {

  let data = {company_id: req.body.company_id};
  let sql = "DELETE FROM company_address WHERE ?";
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

app.post('/getNoteById', (req, res, next) => {
  db.query(`select i.credit_note_id 
  ,i.credit_note_code  
  ,i.amount
  ,i.from_date
  ,i.order_id
   from credit_note i
   Where i.order_id = ${db.escape(req.body.order_id)}`,
    (err, result) => {

      if (err) {
        return res.status(400).send({
             data: err,
             msg:'Failed'
           });
     } else {
           return res.status(200).send({
             data: result[0],
             msg:'Success'
           });
  
     }

    }
  );
});
app.post('/getInvoicePdf', (req, res, next) => {
  db.query(`SELECT ini.item_title
  ,ini.amount
  ,ini.qty
  ,ini.description
  ,ini.unit
                ,c.company_name
                ,o.cust_address1
                ,o.cust_address2
                ,o.cust_address_po_code
                ,o.cust_email
                ,o.cust_phone
                ,o.cust_fax
                ,gc.name AS cust_address_country
                ,c.company_id
                ,i.invoice_date
                ,ini.unit_price
                ,i.invoice_code
                ,i.invoice_type
                ,i.qty_text
                ,i.rate_text
                ,i.invoice_terms
                ,i.invoice_due_date
                ,i.notes
                ,i.gst_percentage
                ,i.discount
                ,i.project_location
                ,i.project_reference
                ,i.title AS invoice_title
                ,i.payment_terms
                ,i.po_number
                ,co.first_name
                ,co.salutation
        FROM invoice_item ini
        LEFT JOIN invoice i  ON (i.invoice_id  = ini.invoice_id)
        LEFT JOIN orders o  ON (o.order_id	= i.order_id)
        LEFT JOIN company c  ON (c.company_id  = o.company_id)
        LEFT JOIN contact co ON (co.contact_id = o.contact_id)
        LEFT JOIN geo_country gc ON (o.cust_address_country = gc.country_code)
        WHERE i.invoice_id = ${db.escape(req.body.invoice_id)}
        ORDER BY ini.invoice_item_id`,
    (err, result) => {

      if (err) {
        return res.status(400).send({
             data: err,
             msg:'Failed'
           });
     } else {
           return res.status(200).send({
             data: result[0],
             msg:'Success'
           });
  
     }

    }
  );
});

app.get('/getInvoiveByMonth', (req, res, next) => {
  db.query(`SELECT DATE_FORMAT(i.invoice_date, '%b %Y') AS invoice_month
  ,(SUM(i.invoice_amount + 
        ((i.invoice_amount * i.gst_percentage) / 100)
                    )
                ) AS invoice_amount_monthly
        FROM invoice i
        LEFT JOIN orders o   ON (o.order_id   = i.invoice_source_id)
         WHERE o.record_type = 'Project'
 AND i.status != 'Cancelled'
 AND i.invoice_date BETWEEN '2021-03-1' AND '2023-03-31'
 GROUP BY DATE_FORMAT(i.invoice_date, '%Y-%m')
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


app.get('/getInvoiveBestMonthSummary', (req, res, next) => {
  db.query(`SELECT DATE_FORMAT(i.creation_date, '%Y-%m') AS monthYear
                  ,COUNT(i.invoice_id) AS total
                  ,SUM(i.invoice_amount) AS totalAmount 
            FROM invoice i
            WHERE DATE_FORMAT(i.creation_date, '%Y-%m-%d') > Date_add(Now(), interval - 12 month)
              AND DATE_FORMAT(i.creation_date, '%Y-%m-%d') < Date_add(Now(), interval - 1 month)
            GROUP BY DATE_FORMAT(i.creation_date, '%m-%Y')
            ORDER BY total DESC, DATE_FORMAT(i.creation_date, '%m-%Y') DESC
            LIMIT 1`,
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

app.post('/editInvoiceItems', (req, res, next) => {
  db.query(`UPDATE invoice_item     
            SET item_title = ${db.escape(req.body.item_title)}
             ,unit=${db.escape(req.body.unit)}
            ,unit_price=${db.escape(req.body.unit_price)}
             ,qty=${db.escape(req.body.qty)}
             ,invoice_qty=${db.escape(req.body.invoice_qty)}
            ,total_cost=${db.escape(req.body.total_cost)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,modified_by=${db.escape(req.body.modified_by)}
             WHERE invoice_item_id  =  ${db.escape(req.body.invoice_item_id )}`,
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

app.get('/getProductDropdown', (req, res, next) => {
  db.query(`SELECT product_id,title FROM product`, (err, result) => {
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


app.get('/getClientName', (req, res, next) => {
  db.query(`SELECT company_id ,company_name  FROM company`, (err, result) => {
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

app.post('/getProductDatas', (req, res, next) => {
  db.query(`SELECT oi.order_id,
  oi.order_item_id,
  oi.qty
  ,c.company_id
  ,c.company_name
 FROM order_item oi
 LEFT JOIN orders o ON o.order_id = oi.order_id
 LEFT JOIN company c ON c.company_id = o.company_id
 WHERE oi.record_id=${db.escape(req.body.product_id)}`,
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
            });

        }
 
    }
  );
});

app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;