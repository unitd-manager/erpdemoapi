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

app.post('/getProjectquoteById', (req, res, next) => {
    db.query(` SELECT q.quote_date
    ,q.project_quote_idgetOrderedItemsById
    ,q.quote_code
    ,q.quote_status
    ,q.ref_no_quote
    ,q.project_location
    ,q.project_reference
    ,q.payment_method
    ,q.revision
    ,q.intro_drawing_quote 
    ,q.total_amount
    ,q.project_enquiry_id
    ,q.company_id
    ,q.contact_id
    ,o.enquiry_code
    ,c.company_name
    ,cont.first_name
    ,q.creation_date
    ,q.modification_date
    ,q.created_by
    ,q.modified_by
    FROM project_quote q  
    LEFT JOIN (project_enquiry o) ON (o.project_enquiry_id=q.project_enquiry_id)
    LEFT JOIN (company c) ON (c.company_id = q.company_id)
    LEFT JOIN (contact cont) ON (cont.contact_id = q.contact_id)   
    WHERE q.project_quote_id =${db.escape(req.body.project_quote_id)}
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

  app.post('/getInvoiceItemsById', (req, res, next) => {
    db.query(`SELECT it.*
  ,i.purchase_invoice_id
  ,o.purchase_order_id
  FROM purchase_invoice_items it
  LEFT JOIN (purchase_invoice i) ON (i.purchase_invoice_id=it.purchase_invoice_id)
  LEFT JOIN (purchase_order o) ON (o.purchase_order_id=i.purchase_order_id)
  WHERE i.purchase_invoice_id = ${db.escape(req.body.purchase_invoice_id)}`,
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
    db.query(`SELECT it.*
  FROM purchase_return_items it
  LEFT JOIN (purchase_return i) ON (i.purchase_invoice_id=it.purchase_invoice_id)
  LEFT JOIN (purchase_invoice_items iv) ON (iv.invoice_items_id=it.purchase_invoice_items_id)
  WHERE i.purchase_invoice_id = ${db.escape(req.body.purchase_invoice_id)}`,
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


  app.get('/getPurchaseInvoice', (req, res, next) => {
    db.query(`select i.purchase_invoice_id
    ,i.purchase_invoice_code 
    ,i.purchase_invoice_date
    ,i.invoice_amount
     ,i.status
   from purchase_invoice i
   LEFT JOIN purchase_return sr ON i.purchase_invoice_id = sr.purchase_invoice_id
  WHERE i.purchase_invoice_id !='' 
  AND i.status != LOWER('Paid')
  AND sr.purchase_invoice_id IS NULL
  ORDER BY i.purchase_invoice_date DESC`,
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

  // app.post('/insertPurchaseReturn', (req, res, next) => {
  //   let data = {
  //     purchase_return_id: req.body.purchase_return_id,
  //     creation_date: req.body.creation_date,
  //     modification_date: req.body.modification_date,
  //     purchase_invoice_id: req.body.purchase_invoice_id,
  //     purchase_order_id: req.body.purchase_order_id,
  //     status: req.body.status
  //   };
  
  //   // Insert data into sales_return_history table
  //   let sql = "INSERT INTO purchase_return SET ?";
  //   db.query(sql, data, (err, result) => {
  //     if (err) {
  //       return res.status(400).send({
  //         data: err,
  //         msg: 'failed',
  //       });
  //     } else {
  //       // Retrieve records from invoice_item table based on invoice_id
  //       let invoiceItemId = req.body.purchase_invoice_id; // Assuming this is the field that contains invoice_id
  //       let selectQuery = "SELECT * FROM purchase_invoice_items WHERE purchase_invoice_id = ?";
  //       db.query(selectQuery, [invoiceItemId], (err, invoiceItems) => {
  //         if (err) {
  //           return res.status(400).send({
  //             data: err,
  //             msg: 'failed',
  //           });
  //         } 
  //         else {
  //           if (invoiceItems.length < 1) {
  //             return res.status(401).send({
  //               data: invoiceItems,
  //               msg: 'No invoice items to Return',
  //             });
  //           } 
  //           // Insert retrieved invoice_items into sales_return_history_item table
  //           let salesReturnHistoryItemId = result.insertId; // Assuming you have an auto-incremented primary key in sales_return_history
  //           let salesReturnHistoryItemData = invoiceItems.map((item) => ({
  //             purchase_return_id: salesReturnHistoryItemId,
  //             // Add other fields from invoice_item as needed
  //             item_title: item.item_title,
  //             ordered_quantity: item.ordered_quantity,
  //             unit:item.unit,
  //             cost_price:item.cost_price,
  //             total_cost:item.total_cost
  //             // Add more fields as needed
  //           }));
  // console.log('salesReturnHistoryItemData',salesReturnHistoryItemData);
  //           let insertItemsQuery =
  //           "INSERT INTO purchase_return_items (purchase_return_id, item_title, ordered_quantity,unit,cost_price,total_cost) VALUES ?";
  //         let values = salesReturnHistoryItemData.map(item => [item.purchase_return_id,item.item_title, item.ordered_quantity,item.unit,item.cost_price,item.total_cost]);
          
  //         db.query(insertItemsQuery, [values], (err, itemResult) => {
          
  //             if (err) {
  //               return res.status(400).send({
  //                 data: err,
  //                 msg: 'failed',
  //               });
  //             } else {
  //               return res.status(200).send({
  //                 data: result,
  //                 msg: 'Success',
  //               });
  //             }
  //           });
  //         }
  //       });
  //     }
  //   });
  // });
  

  app.post('/insertPurchaseReturn', (req, res, next) => {

    let data = {
      purchase_return_id: req.body.purchase_return_id,
      purchase_return_code: req.body.purchase_return_code,
      creation_date: req.body.creation_date,
      modification_date: req.body.modification_date,
      purchase_order_id: req.body.purchase_order_id,
      supplier_id: req.body.supplier_id,
      status: req.body.status,
      created_by: req.body.created_by,
      modified_by: req.body.modified_by
   };
    let sql = "INSERT INTO purchase_return SET ?";
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

  app.get('/getPurchaseReturn', (req, res, next) => {
    db.query(`  SELECT 
    q.purchase_return_id
    ,q.purchase_return_code
    ,q.purchase_order_id
    ,q.purchase_return_date
    ,q.purchase_invoice_id
    ,q.status
    ,q.status_arb
    ,pi.purchase_invoice_date
    ,pi.purchase_invoice_code
    ,pi.purchase_invoice_code_arb
    ,po.po_code
    ,q.creation_date
    ,q.created_by
    ,q.modification_date
    ,q.modified_by
    FROM purchase_return q  
    LEFT JOIN (purchase_invoice pi) ON (pi.purchase_invoice_id=q.purchase_invoice_id)
    LEFT JOIN (purchase_order po) ON (po.purchase_order_id=q.purchase_order_id)
    WHERE q.purchase_return_id!= '' 
    ORDER BY q.purchase_return_id DESC`,
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
  app.post('/getPurchaseReturnById', (req, res, next) => {
    db.query(` SELECT 
    q.purchase_return_id
    ,q.purchase_return_code
    ,q.purchase_order_id
    ,q.purchase_return_date
    ,q.purchase_invoice_id
    ,q.status
    ,q.status_arb
    ,pi.purchase_invoice_date
    ,pi.purchase_invoice_code
    ,pi.purchase_invoice_code_arb
    ,po.po_code
    ,q.creation_date
    ,q.created_by
    ,q.modification_date
    ,q.modified_by
    FROM purchase_return q  
    LEFT JOIN (purchase_invoice pi) ON (pi.purchase_invoice_id=q.purchase_invoice_id)
    LEFT JOIN (purchase_order po) ON (po.purchase_order_id=q.purchase_order_id)
    WHERE q.purchase_return_id =  ${db.escape(req.body.purchase_return_id)}`,
    
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
  

  app.get('/getEnquiryCode', (req, res, next) => {
    db.query(`  SELECT enquiry_code,project_enquiry_id from project_enquiry `,
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
  app.post('/editpurchasereturn', (req, res, next) => {
    db.query(`UPDATE purchase_return 
              SET purchase_return_date=${db.escape(req.body.purchase_return_date)}
              ,status=${db.escape(req.body.status)}
              ,status_arb=${db.escape(req.body.status_arb)}
              ,modification_date=${db.escape(req.body.modification_date)}
              ,modified_by=${db.escape(req.body.modified_by)}
              WHERE purchase_return_id =  ${db.escape(req.body.purchase_return_id)}`,
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
        project_enquiry_id: req.body.project_enquiry_id
      , project_id: req.body.project_id
      , quote_code: req.body.quote_code
      , quote_date: req.body.quote_date
      , quote_status: 'new'
      , company_id: req.body.company_id
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
      , creation_date: req.body.creation_date
      , modification_date: null
      , created_by: req.body.created_by
    };
    let sql = "INSERT INTO project_quote SET ?";
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
              ,qt.purchase_return_id
              ,qt.purchase_return_items_id
              ,qt.creation_date
              ,qt.modification_date
              ,qt.created_by
              ,qt.modified_by
              FROM purchase_return_items qt 
              WHERE qt.purchase_return_id =  ${db.escape(req.body.purchase_return_id)}`,
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

  app.post('/deleteEditItem', (req, res, next) => {

    let data = {project_quote_items_id: req.body.project_quote_items_id};
    let sql = "DELETE FROM project_quote_items WHERE ?";
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
  
  app.post('/edit-TabQuoteLine', (req, res, next) => {
    db.query(`UPDATE project_quote_items
              SET title=${db.escape(req.body.title)}
              ,description=${db.escape(req.body.description)}
              ,quantity=${db.escape(req.body.quantity)}
              ,unit=${db.escape(req.body.unit)}
              ,unit_price=${db.escape(req.body.unit_price)}
              ,amount=${db.escape(req.body.amount)}
              WHERE project_quote_items_id =  ${db.escape(req.body.project_quote_items_id)}`,
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
  app.post('/insertQuoteItems', (req, res, next) => {

    let data = {
      quote_category_id:req.body.quote_category_id
       ,description: req.body.description
      , amount: req.body.amount
      , amount_other: req.body.amount_other
      , item_type: req.body.item_type
      , sort_order: req.body.sort_order
      , title: req.body.title
      , project_quote_id: req.body.project_quote_id
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
    let sql = "INSERT INTO project_quote_items SET ?";
    let query = db.query(sql, data,(err, result) => {
      if (err) {
       return res.status(400).send({
              data: err,
              msg:'Failed'
            });
      } else {
            return res.status(200).send({
              data: result,
              msg:'New quote item has been created successfully'
            });
      }
    });
  });
  app.get('/getTranslationForPurchaseReturn', (req, res, next) => {
    db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdPurchaseReturn%'`,
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
  

  app.get('/getSupplier', (req, res, next) => {
    db.query(`SELECT 
    e.supplier_id
   ,e.company_name
   ,e.company_name_arb
    FROM supplier e 
    `,
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

app.post('/getOrdersBySupplierId', (req, res, next) => {
  db.query(`SELECT 
po_code,
po_code_arb,
supplier_id,
purchase_order_id 
FROM purchase_order WHERE supplier_id =${db.escape(req.body.supplier_id)}`, 
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

app.post('/getOrderedItemsById', (req, res, next) => {
  db.query(`SELECT 
  pp.po_product_id ,
  pp.product_id ,
  pp.purchase_order_id,
  pp.quantity,
  pp.qty,
  pp.quantity_arb,
  (SELECT SUM(ph.purchase_return_qty) FROM purchase_return_history ph WHERE ph.po_product_id=pp.po_product_id ) AS return_qty,
  p.title,
  p.qty_in_stock,
  pr.purchase_return_id
  FROM po_product pp 
  LEFT JOIN product p ON p.product_id=pp.product_id
  LEFT JOIN purchase_return pr ON pr.purchase_order_id=pp.purchase_order_id
  WHERE pp.purchase_order_id= ${db.escape(req.body.purchase_order_id)}`,
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

app.post('/insertPurchasereturnHistory', (req, res, next) => {

  let data = {
    purchase_return_history_id: req.body.purchase_return_history_id,
    purchase_return_id: req.body.purchase_return_id,
    purchase_order_id: req.body.purchase_order_id,
    po_product_id: req.body.po_product_id,
    product_id: req.body.product_id,
    status: req.body.status,
    purchase_return_qty: req.body.purchase_return_qty,
    creation_date: req.body.creation_date,
    modification_date: req.body.modification_date,
    created_by: req.body.created_by,
    modified_by: req.body.modified_by
 };
  let sql = "INSERT INTO purchase_return_history SET ?";
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


app.post('/updatePoProduct', (req, res, next) => {
  db.query(`UPDATE po_product 
            SET return_qty=${db.escape(req.body.return_qty)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,modified_by=${db.escape(req.body.modified_by)}
            WHERE po_product_id =  ${db.escape(req.body.po_product_id)}`,
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

        app.post('/getPurchaseReturmItemsById', (req, res, next) => {
          db.query(`SELECT
          prh.purchase_return_history_id,
          prh.purchase_return_id,
          prh.purchase_order_id,
          prh.purchase_return_qty,
          prh.creation_date,
          prh.created_by,
          prh.po_product_id,
          prh.product_id,
          prh.status,
          po.return_qty,
          po.quantity,
          p.qty_in_stock,
          i.actual_stock
          FROM purchase_return_history prh
          LEFT JOIN po_product po ON po.po_product_id=prh.po_product_id
          LEFT JOIN product p ON p.product_id=prh.product_id
          LEFT JOIN inventory i ON i.product_id=prh.product_id
          WHERE prh.po_product_id = ${db.escape(
                req.body.po_product_id,
              )} ORDER BY prh.purchase_return_history_id  DESC `,
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

 app.post('/editpurchasereturnhistory', (req, res, next) => {
    db.query(`UPDATE purchase_return_history 
              SET status=${db.escape(req.body.status)}
              ,modification_date=${db.escape(req.body.modification_date)}
              ,modified_by=${db.escape(req.body.modified_by)}
              WHERE purchase_return_history_id =  ${db.escape(req.body.purchase_return_history_id)}`,
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

app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});


module.exports = app;
