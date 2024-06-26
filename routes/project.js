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

app.get('/getProject', (req, res, next) => {
  db.query(`SELECT p.title
  ,p.category
  ,p.status
  ,p.contact_id
  ,p.start_date
  ,p.estimated_finish_date
  ,p.description
  ,p.project_manager_id
  ,p.project_id
  ,p.project_code
  ,CONCAT_WS(' ', cont.first_name, cont.last_name) AS contact_name 
  ,c.company_name 
  ,c.company_size 
  ,c.source ,c.industry 
  ,o.opportunity_code 
  ,cont.first_name
  ,( SELECT GROUP_CONCAT( CONCAT_WS(' ', stf.first_name, stf.last_name) 
  ORDER BY CONCAT_WS(' ', stf.first_name, stf.last_name) SEPARATOR ', ' ) 
  FROM staff stf ,project_staff ts 
  WHERE ts.project_id = p.project_id AND stf.staff_id = ts.staff_id ) 
  AS staff_name ,ser.title as service_title ,CONCAT_WS(' ', s.first_name, s.last_name) 
  AS project_manager_name ,(p.project_value - (IF(ISNULL(( SELECT SUM(invoice_amount) 
  FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id)
 WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ),0, ( SELECT SUM(invoice_amount) 
  FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id) 
  WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ))) AS still_to_bill FROM project p LEFT JOIN (contact cont) ON (p.contact_id = cont.contact_id)LEFT JOIN (company c)ON (p.company_id = c.company_id) 
  LEFT JOIN (service ser) ON (p.service_id = ser.service_id) LEFT JOIN (staff s) ON (p.project_manager_id = s.staff_id) LEFT JOIN (opportunity o) ON (p.opportunity_id = o.opportunity_id) WHERE ( LOWER(p.status) = 'wip' OR LOWER(p.status) = 'billable' OR LOWER(p.status) = 'billed' ) AND ( LOWER(p.status) = 'wip' OR LOWER(p.status) ='billable' OR LOWER(p.status) = 'billed') ORDER BY p.project_code DESC`,
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

app.get('/getProjectChart', (req, res, next) => {
  const company = req.query.company;
  let query = `
    SELECT 
      p.title, p.category, p.status, p.contact_id, p.start_date, 
      p.estimated_finish_date, p.description, p.project_manager_id, 
      p.project_id, p.project_code, c.company_name, p.company_id
    FROM 
      project p
    LEFT JOIN 
      company c ON p.company_id = c.company_id
    WHERE 
      p.project_id != ''`;

  if (company) {
    query += ` AND p.company_id = ${db.escape(company)}`;
  }

  db.query(query, (err, result) => {
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

app.get('/getTranslationForProject', (req, res, next) => {
  db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdProject%'`,
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

app.get('/getProjectInErp', (req, res, next) => {
  db.query(`SELECT 
  p.project_id
  ,p.title
  ,p.title_arb
  ,p.project_code
  ,p.contact_id
  ,p.category
  ,p.status
  ,c.company_name
  ,c.company_name_arb
  ,co.contact_id
  ,po.proposal_code
  ,CONCAT_WS(' ', co.first_name, co.last_name) AS contact_name 
  ,CONCAT_WS(' ', co.first_name_arb, co.last_name) AS contact_name_arb
  FROM project p
  LEFT JOIN company c ON c.company_id=p.company_id
  LEFT JOIN contact co ON co.contact_id=p.contact_id
  LEFT JOIN proposal po ON p.proposal_id = po.proposal_id
  WHERE p.project_id!=''`,
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

app.post("/getTimesheetStaffById", (req, res, next) => {
  db.query(
    `SELECT et.* ,
    e.employee_id,
    e.employee_name AS first_name
    FROM employee_timesheet et 
    INNER JOIN employee e ON e.employee_id = et.employee_id 
    INNER JOIN project p ON p.project_id = et.project_id
    WHERE et.project_id = ${db.escape(req.body.project_id)}`,
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


// app.get('/getProjects', (req, res, next) => {
//   db.query(`SELECT p.title
//   ,p.category
//   ,p.status
//   ,p.contact_id
//   ,p.start_date
//   ,p.estimated_finish_date
//   ,p.description
//   ,p.project_manager_id
//   ,p.project_id
//   ,p.project_code
//   ,p.company_invoice
//   ,CONCAT_WS(' ', cont.first_name, cont.last_name) AS contact_name 
//   ,c.company_name 
//   ,c.company_size 
//   ,c.source ,c.industry 
//   ,o.opportunity_code 
//   ,cont.first_name
//   ,( SELECT GROUP_CONCAT( CONCAT_WS(' ', stf.first_name, stf.last_name) 
//   ORDER BY CONCAT_WS(' ', stf.first_name, stf.last_name) SEPARATOR ', ' ) 
//   FROM staff stf ,project_staff ts 
//   WHERE ts.project_id = p.project_id AND stf.staff_id = ts.staff_id ) 
//   AS staff_name ,ser.title as service_title ,CONCAT_WS(' ', s.first_name, s.last_name) 
//   AS project_manager_name ,(p.project_value - (IF(ISNULL(( SELECT SUM(invoice_amount) 
//   FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id)
//  WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ),0, ( SELECT SUM(invoice_amount) 
//   FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id) 
//   WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ))) AS still_to_bill FROM project p LEFT JOIN (contact cont) ON (p.contact_id = cont.contact_id)LEFT JOIN (company c)ON (p.company_id = c.company_id) 
//   LEFT JOIN (service ser) ON (p.service_id = ser.service_id) LEFT JOIN (staff s) ON (p.project_manager_id = s.staff_id) LEFT JOIN (opportunity o) ON (p.opportunity_id = o.opportunity_id) ORDER BY p.project_code DESC`,
//     (err, result) => {
       
//       if (result.length == 0) {
//         return res.status(400).send({
//           msg: 'No result found'
//         });
//       } else {
//             return res.status(200).send({
//               data: result,
//               msg:'Success'
//             });

//         }
 
//     }
//   );
// });





app.post('/getAmountByProjectIds', (req, res, next) => {
  db.query(`SELECT
  amount,
  receivedAmount,
  (amount - COALESCE(receivedAmount, 0)) AS balanceAmount
FROM (
  SELECT
    SUM(i.invoice_amount) AS amount,
    (
      SELECT SUM(ir.amount)
      FROM invoice ii
      LEFT JOIN invoice_receipt_history ir ON ir.invoice_id = ii.invoice_id
      LEFT JOIN orders o ON o.order_id = ii.order_id
      LEFT JOIN receipt r ON r.receipt_id = ir.receipt_id
      WHERE o.project_id = ${db.escape(req.body.project_id)} AND ii.status != 'Cancelled' AND r.receipt_status != 'cancelled'
    ) AS receivedAmount
  FROM invoice i
  LEFT JOIN orders o ON o.order_id = i.order_id
  WHERE o.project_id = ${db.escape(req.body.project_id)} AND i.status != 'Cancelled'
) AS t;
`,
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

app.post('/getProjectById', (req, res, next) => {
  db.query(`SELECT p.title
  ,p.title_arb
  ,p.category
  ,p.category_arb
  ,p.status
  ,p.status_arb
  ,p.contact_id
  ,p.start_date
  ,p.estimated_finish_date
  ,p.description
  ,p.description_arb
  ,p.project_manager_id
  ,p.project_id
  ,p.company_id 
  ,p.company_invoice
  ,c.company_name 
  ,c.company_name_arb
  ,c.company_size 
  ,c.source 
  ,c.industry
  ,c.address_flat
  ,c.address_street
  ,c.address_town
  ,c.address_country
  ,c.address_po_code
  ,c.phone
  ,c.email
  ,cont.first_name
  ,( SELECT GROUP_CONCAT( CONCAT_WS(' ', stf.first_name, stf.last_name) 
  ORDER BY CONCAT_WS(' ', stf.first_name, stf.last_name) SEPARATOR ', ' ) 
  FROM staff stf ,project_staff ts 
  WHERE ts.project_id = p.project_id AND stf.staff_id = ts.staff_id ) 
  AS staff_name ,ser.title as service_title ,CONCAT_WS(' ', s.first_name, s.last_name) 
  AS project_manager_name ,(p.project_value - (IF(ISNULL(( SELECT SUM(invoice_amount) 
  FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id)
 WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ),0, ( SELECT SUM(invoice_amount) 
  FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id) 
  WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ))) AS still_to_bill FROM project p LEFT JOIN (contact cont) ON (p.contact_id = cont.contact_id)LEFT JOIN (company c)ON (p.company_id = c.company_id) 
  LEFT JOIN (service ser) ON (p.service_id = ser.service_id) LEFT JOIN (staff s) ON (p.project_manager_id = s.staff_id) 
  WHERE p.project_id = ${db.escape(req.body.project_id)}`,
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
app.post('/getProjectsByID', (req, res, next) => {
  db.query(`SELECT p.title
  ,p.category
  ,p.status
  ,p.contact_id
  ,p.start_date
  ,p.estimated_finish_date
  ,p.description
  ,p.project_manager_id
  ,p.project_id
  ,p.company_id 
  ,CONCAT_WS(' ', cont.first_name, cont.last_name) AS contact_name 
  ,c.company_name 
  ,c.company_size 
  ,c.source ,c.industry 
  ,o.opportunity_code 
  ,( SELECT GROUP_CONCAT( CONCAT_WS(' ', stf.first_name, stf.last_name) 
  ORDER BY CONCAT_WS(' ', stf.first_name, stf.last_name) SEPARATOR ', ' ) 
  FROM staff stf ,project_staff ts 
  WHERE ts.project_id = p.project_id AND stf.staff_id = ts.staff_id ) 
  AS staff_name ,ser.title as service_title ,CONCAT_WS(' ', s.first_name, s.last_name) 
  AS project_manager_name ,(p.project_value - (IF(ISNULL(( SELECT SUM(invoice_amount) 
  FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id)
 WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ),0, ( SELECT SUM(invoice_amount) 
  FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id) 
  WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ))) AS still_to_bill FROM project p LEFT JOIN (contact cont) ON (p.contact_id = cont.contact_id)LEFT JOIN (company c)ON (p.company_id = c.company_id) 
  LEFT JOIN (service ser) ON (p.service_id = ser.service_id) LEFT JOIN (staff s) ON (p.project_manager_id = s.staff_id) LEFT JOIN (opportunity o) ON (p.opportunity_id = o.opportunity_id) WHERE ( LOWER(p.status) = 'wip' OR LOWER(p.status) = 'billable' OR LOWER(p.status) = 'billed' ) AND ( LOWER(p.status) = 'wip' OR LOWER(p.status) ='billable' OR LOWER(p.status) = 'billed') AND p.project_id=${db.escape(req.body.project_id)}`,
    (err, result) => {
       
      if (err) {
        return res.status(400).send({
          msg: `SELECT p.title
  ,p.category
  ,p.status
  ,p.contact_id
  ,p.start_date
  ,p.estimated_finish_date
  ,p.description
  ,p.project_manager_id
  ,p.project_id
  ,CONCAT_WS(' ', cont.first_name, cont.last_name) AS contact_name 
  ,c.company_name 
  ,c.company_size 
  ,c.source ,c.industry 
  ,o.opportunity_code 
  ,( SELECT GROUP_CONCAT( CONCAT_WS(' ', stf.first_name, stf.last_name) 
  ORDER BY CONCAT_WS(' ', stf.first_name, stf.last_name) SEPARATOR ', ' ) 
  FROM staff stf ,project_staff ts 
  WHERE ts.project_id = p.project_id AND stf.staff_id = ts.staff_id ) 
  AS staff_name ,ser.title as service_title ,CONCAT_WS(' ', s.first_name, s.last_name) 
  AS project_manager_name ,(p.project_value - (IF(ISNULL(( SELECT SUM(invoice_amount) 
  FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id)
 WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ),0, ( SELECT SUM(invoice_amount) 
  FROM invoice i LEFT JOIN (orders o) ON (i.order_id = o.order_id) 
  WHERE o.project_id = p.project_id AND LOWER(i.status) != 'cancelled' ) ))) AS still_to_bill FROM project p LEFT JOIN (contact cont) ON (p.contact_id = cont.contact_id)LEFT JOIN (company c)ON (p.company_id = c.company_id) 
  LEFT JOIN (service ser) ON (p.service_id = ser.service_id) LEFT JOIN (staff s) ON (p.project_manager_id = s.staff_id) LEFT JOIN (opportunity o) ON (p.opportunity_id = o.opportunity_id) WHERE ( LOWER(p.status) = 'wip' OR LOWER(p.status) = 'billable' OR LOWER(p.status) = 'billed' ) AND ( LOWER(p.status) = 'wip' OR LOWER(p.status) ='billable' OR LOWER(p.status) = 'billed') AND p.project_id=${db.escape(req.body.project_id)} `
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
app.post('/getcompanyById', (req, res, next) => {
  db.query(` SELECT *,
  c.company_name
             FROM project p 
        LEFT JOIN (company c) ON (c.company_id = p.company_id)
        WHERE p.project_id = ${db.escape(req.body.project_id)}`,
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
})

app.get('/getcontactById', (req, res, next) => {
  db.query(` SELECT c.contact_id, c.first_name from contact c 
 LEFT JOIN company cm  ON (cm.company_id = c.company_id) 
 where c.company_id !=''`,
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

app.post('/getProjectMaterialLineItemsById', (req, res, next) => {
    db.query(`SELECT
              qt.* 
              ,qt.project_quote_id
              ,qt. material_needed_id
              ,qt.creation_date
              ,qt.modification_date
              ,qt.created_by
              ,qt.modified_by
              FROM  project_material_needed qt 
              WHERE qt.project_id =  ${db.escape(req.body.project_id)}`,
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

 app.post('/edit-ProjectMaterialNeeded', (req, res, next) => {
    // ... your existing code
  
    // Calculate the total_amount by summing up all line item amounts
    db.query(
      `UPDATE  project_material_needed
            SET title=${db.escape(req.body.title)}
            ,description=${db.escape(req.body.description)}
            ,quantity=${db.escape(req.body.quantity)}
            ,unit=${db.escape(req.body.unit)}
            ,unit_price=${db.escape(req.body.unit_price)}
            ,amount=${db.escape(req.body.amount)}
            ,modification_date=${db.escape(req.body.modification_date)}
          ,modified_by=${db.escape(req.body.modified_by)}
            WHERE  project_material_needed_id =  ${db.escape(req.body. project_material_needed_id)}`,
            (err, result) => {
              if (err) {
                console.log("error: ", err);
                return;
              } else {
                return res.status(200).send({
                  data: result,
                  msg: "Success",
                });
              }
            }
          );
        });
  
//   app.post('/insertProjectMaterialItems', (req, res, next) => {

//     let data = {
//         material_needed_id: req.body.material_needed_id,    
//       quote_category_id: req.body.quote_category_id,
//       description: req.body.description,
//       amount: req.body.amount,
//       amount_other: req.body.amount_other,
//       item_type: req.body.item_type,
//       sort_order: req.body.sort_order,
//       title: req.body.title,
//       project_quote_id: req.body.project_quote_id,
//       actual_amount: req.body.actual_amount,
//       supplier_amount: req.body.supplier_amount,
//       quantity: req.body.quantity,
//       project_id: req.body.project_id,
//       created_by: req.body.created_by,
//       unit: req.body.unit,
//       remarks: req.body.remarks,
//       part_no: req.body.part_no,
//       nationality: req.body.nationality,
//       ot_rate: req.body.ot_rate,
//       ph_rate: req.body.ph_rate,
//       scaffold_code: req.body.scaffold_code,
//       erection: req.body.erection,
//       dismantle: req.body.dismantle,
//       unit_price: req.body.unit_price,
//       drawing_number: req.body.drawing_number,
//       drawing_title: req.body.drawing_title,
//       drawing_revision: req.body.drawing_revision,
//       creation_date: req.body.creation_date,
//     };
//     let sql = "INSERT INTO project_material_needed SET ?";
//     let query = db.query(sql, data,(err, result) => {
//       if (err) {
//         console.log("error: ", err);
//         return;
//       } else {
//             return res.status(200).send({
//               data: result,
//               msg:'Success'
//             });
//       }
//     });
//   });
       
       app.post('/insertProjectMaterialItems', (req, res, next) => {

  let data = {
    material_needed_id: req.body.material_needed_id,    
      quote_category_id: req.body.quote_category_id,
      description: req.body.description,
      amount: req.body.amount,
      amount_other: req.body.amount_other,
      item_type: req.body.item_type,
      sort_order: req.body.sort_order,
      title: req.body.title,
      project_quote_id: req.body.project_quote_id,
      actual_amount: req.body.actual_amount,
      supplier_amount: req.body.supplier_amount,
      quantity: req.body.quantity,
      project_id: req.body.project_id,
      created_by: req.body.created_by,
      unit: req.body.unit,
      remarks: req.body.remarks,
      part_no: req.body.part_no,
      nationality: req.body.nationality,
      ot_rate: req.body.ot_rate,
      ph_rate: req.body.ph_rate,
      scaffold_code: req.body.scaffold_code,
      erection: req.body.erection,
      dismantle: req.body.dismantle,
      unit_price: req.body.unit_price,
      drawing_number: req.body.drawing_number,
      drawing_title: req.body.drawing_title,
      drawing_revision: req.body.drawing_revision,
      creation_date: req.body.creation_date,
 };
  let sql = "INSERT INTO project_material_needed SET ?";
  let query = db.query(sql, data,(err, result) => {
    if (err) {
     return res.status(400).send({
            data: err,
            msg:'Failed'
          });
    } else {
          return res.status(200).send({
            data: result,
            msg:'New material item has been created successfully'
          });
    }
  });
});


 app.post('/insertProjectMaterialItemss', (req, res, next) => {
    let data = {
      material_needed_id: req.body.material_needed_id,    
      quote_category_id: req.body.quote_category_id,
      description: req.body.description,
      amount: req.body.amount,
      amount_other: req.body.amount_other,
      item_type: req.body.item_type,
      sort_order: req.body.sort_order,
      title: req.body.title,
      project_quote_id: req.body.project_quote_id,
      actual_amount: req.body.actual_amount,
      supplier_amount: req.body.supplier_amount,
      quantity: req.body.quantity,
      project_id: req.body.project_id,
      created_by: req.body.created_by,
      unit: req.body.unit,
      remarks: req.body.remarks,
      part_no: req.body.part_no,
      nationality: req.body.nationality,
      ot_rate: req.body.ot_rate,
      ph_rate: req.body.ph_rate,
      scaffold_code: req.body.scaffold_code,
      erection: req.body.erection,
      dismantle: req.body.dismantle,
      unit_price: req.body.unit_price,
      drawing_number: req.body.drawing_number,
      drawing_title: req.body.drawing_title,
      drawing_revision: req.body.drawing_revision,
      creation_date: req.body.creation_date,
    };
  
    let sql = "INSERT INTO  project_material_needed SET ?";
    let query = db.query(sql, data,(err, result) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      } else {
            return res.status(200).send({
              data: result,
              msg:'New Tender has been created successfully'
            });
      }
    });
  });
 
app.post('/deleteProjectMaterialneed', (req, res, next) => {

  let data = { project_material_needed_id: req.body. project_material_needed_id};
  let sql = "DELETE FROM  project_material_needed WHERE ?";
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

app.post('/getAmountByProjectId', (req, res, next) => {
  db.query(`select (sum(i.invoice_amount)) as totalInvoice 
,(sum(ir.amount))as receivedAmount
,(sum(i.invoice_amount - ir.amount))as balanceAmount
from invoice i
 LEFT JOIN (invoice_receipt_history ir) ON (ir.invoice_id = i.invoice_id)
where i.project_id= ${db.escape(req.body.project_id)} `,
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

app.post('/getTabQuoteById', (req, res, next) => {
  db.query(`SELECT
    q.quote_id,
    q.project_id,
    q.quote_date,
    q.quote_status,
    q.quote_code,
    q.project_location,
    q.project_reference,
    q.payment_method,
    q.ref_no_quote,
    q.revision,
    q.total_amount,
    q.discount,
    q.drawing_nos,
    q.quote_condition,
    (SELECT SUM(qt.amount)
        FROM quote_items qt
        WHERE q.quote_id = qt.quote_id
    ) AS total_amount,
    (COALESCE((SELECT SUM(qt.amount)
                FROM quote_items qt
                WHERE q.quote_id = qt.quote_id
            ), 0) - COALESCE(q.discount, 0)) AS totalamount
FROM quote q 
LEFT JOIN project p ON p.project_id = q.project_id OR p.quote_id = q.quote_id
WHERE p.project_id = ${db.escape( req.body.project_id)}`,
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
  app.post('/getProjectCostingSummaryById', (req, res, next) => {
  db.query(`SELECT
   o.project_id
  ,c.total_material_price
  ,c.transport_charges
  ,c.total_labour_charges
  ,c.salesman_commission
  ,c.finance_charges
  ,c.office_overheads
  ,c.other_charges
  ,c.total_cost
  ,c.invoiced_price
  ,c.po_price
  ,c.profit
  ,c.profit_percentage
  FROM opportunity o 
LEFT JOIN project p ON p.project_id = o.project_id OR p.opportunity_id = o.opportunity_id
LEFT JOIN opportunity_costing_summary c ON o.opportunity_id=c.opportunity_id
WHERE p.project_id =${db.escape(req.body.project_id)}
 ORDER BY c.opportunity_costing_summary_id DESC`,
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
  
  app.get('/getCompanyInvoive', (req, res, next) => {
  db.query(`SELECT 
  value
  ,valuelist_id
  FROM valuelist WHERE key_text="Company Invoice"`,
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
app.post("/getProposalDataById", (req, res, next) => {
  db.query(
    `SELECT 
    pr.proposal_id
    ,pr.title
    ,pr.proposal_code
    ,pr.proposal_date
   ,q.project_quote_id
  ,pr.project_quote_id 
  ,pr.est_start_date AS start_date
  ,pr.est_end_date AS estimated_finish_date 
   ,pr.description
   ,q.quote_code
   ,q.company_id
   ,q.contact_id
   ,c.company_name 
   ,cont.contact_id
   ,cont.first_name
   ,pr.status
   ,pr.est_start_date
   ,pr.est_end_date
   ,pr.budget
   ,pr.project_manager
   ,pr.no_of_employees
   ,pr.description
   ,pr.creation_date
   ,pr.modification_date
   ,pr.created_by
   ,pr.modified_by
   ,pr.employee_id
   ,pe.category
   FROM proposal pr 
   LEFT JOIN (project_quote q)  ON (q.project_quote_id  = pr.project_quote_id)
   LEFT JOIN (company c)  ON (c.company_id  = q.company_id)  
   LEFT JOIN (contact cont) ON (q.contact_id = cont.contact_id)  
   LEFT JOIN (project_enquiry pe) ON (c.company_id = pe.company_id)
   WHERE pr.proposal_code = ${db.escape(req.body.proposal_code)}
  `,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          msg: "No result found",
        });
      } else {
        return res.status(200).send({
          data: result[0],
          msg: "Success",
        });
      }
    }
  );
});  
  app.get('/getProposalCode', (req, res, next) => {
  db.query(`SELECT p.proposal_code, pp.project_id , c.company_name, c.company_name_arb
FROM proposal p
LEFT JOIN project pp ON p.proposal_id = pp.proposal_id
LEFT JOIN (company c) on p.company_id = c.company_id
WHERE p.status = 'Awarded' AND pp.project_id IS NULL`,
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

app.post('/getProposalEmployee', (req, res, next) => {
  db.query(`SELECT * FROM proposal_employee WHERE proposal_id =${db.escape(req.body.proposal_id)}`,
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
app.post("/insertPrjectEmployee", (req, res, next) => {
  let data = {
    project_id: req.body.project_id,
     proposal_id: req.body.proposal_id,
    employee_id: req.body.employee_id,
    creation_date: req.body.creation_date,
    month: req.body.month,
    year: req.body.year,
    day: req.body.day,
  };
  let sql = "INSERT INTO employee_timesheet SET ?";
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

  });
});

  
   app.post('/getQuoteLineItemsById', (req, res, next) => {
  db.query(`SELECT
            qt.project_quote_items_id
            ,qt.title
            ,qt.amount
            ,qt.quantity
            ,qt.description
            ,qt.unit_price
            FROM project p 
            LEFT JOIN (project_quote_items qt)  ON (qt.project_quote_id  = p.project_quote_id)
            WHERE p.project_id =${db.escape(req.body.project_id)}`,
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

app.post('/insertLogLine', (req, res, next) => {

  let data = {
    quote_category_id:req.body.quote_category_id
     ,description: req.body.description
    , amount: req.body.amount
    , title: req.body.title
    , quote_id: req.body.quote_id
    , opportunity_id: req.body.opportunity_id
    , quantity: req.body.quantity
    , project_id: req.body.project_id
    , unit: req.body.unit
    , remarks: req.body.remarks
    , unit_price: req.body.unit_price
    , quote_items_id: req.body.quote_items_id
    , quote_log_id: req.body.quote_log_id
 };
  let sql = "INSERT INTO quote_items_log SET ?";
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


app.post('/getTabQuotelogsById', (req, res, next) => {
  db.query(`SELECT
  ql.quote_log_id
  ,ql.quote_id
  ,ql.opportunity_id 
  ,ql.quote_date
  ,ql.quote_status
  ,ql.quote_code
  ,ql.total_amount
  ,ql.project_reference
  ,ql.payment_method
  ,ql.ref_no_quote
  ,ql.revision
  ,ql.discount
  ,(SELECT SUM(qlt.amount)
    FROM quote_items_log qlt
    WHERE ql.quote_log_id= qlt.quote_log_id ) AS total_amount
     FROM quote_log ql 
  LEFT JOIN (project p) ON (p.project_id = ql.project_id)
  LEFT JOIN (quote q) ON (q.quote_id = ql.quote_id)
     WHERE q.quote_id=${db.escape(req.body.quote_id)}
  ORDER BY ql.quote_code DESC`,
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
app.post("/insertLog", (req, res, next) => {
  let data = {
    project_id	:req.body.project_id	
   , quote_id	: req.body.quote_id	
   , quote_log_id:req.body.quote_log_id
   , discount:req.body.discount
   , quote_date: req.body.quote_date
   , quote_status: req.body.quote_status
   , quote_code: req.body.quote_code
   , project_location	: req.body.project_location
   , project_reference	: req.body.project_reference
   , modification_date: req.body.modification_date
   , creation_date: new Date().toISOString()
   , ref_no_quote	: req.body.ref_no_quote	
   , revision	: req.body.revision	
   , payment_method: req.body.payment_method
  };
  let sql = "INSERT INTO quote_log SET ?";
  let query = db.query(sql, data, (err, result) => {
    if (err) {
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
  });
});



app.post('/getTabQuoteLineItems', (req, res, next) => {
    db.query(`SELECT 
    qt.title
    ,qt.description
    ,qt.quantity
    ,qt.unit
    ,qt.quote_items_id
    ,qt.project_id
    ,qt.unit_price
    ,qt.created_by
    ,qt.creation_date
    ,qt.modified_by
    ,qt.modification_date
    ,qt.amount FROM quote_items_log qt WHERE  qt.quote_log_id = ${db.escape(req.body.quote_log_id)}`,
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


app.post('/editTabQuote', (req, res, next) => {
    db.query(`UPDATE quote
              SET revision=${db.escape(req.body.revision)}
              ,discount=${db.escape(req.body.discount)}
              ,quote_status=${db.escape(req.body.quote_status)}
              ,quote_date=${db.escape(req.body.quote_date)}
              ,project_location=${db.escape(req.body.project_location)}
               ,project_reference=${db.escape(req.body.project_reference)}
              ,drawing_nos=${db.escape(req.body.drawing_nos)}
              ,ref_no_quote=${db.escape(req.body.ref_no_quote)}
              ,total_amount=${db.escape(req.body.total_amount)}
              ,payment_method=${db.escape(req.body.payment_method)}
              ,quote_condition=${db.escape(req.body.quote_condition)}
              WHERE quote_id =${db.escape(req.body.quote_id)}`,
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
  
  
  
app.post('/edit-Project', (req, res, next) => {
  db.query(`UPDATE project 
            SET title=${db.escape(req.body.title)}
            ,title_arb=${db.escape(req.body.title_arb)}
            ,category_arb=${db.escape(req.body.category_arb)}
            ,category=${db.escape(req.body.category)} 
            ,status=${db.escape(req.body.status)}
            ,status_arb=${db.escape(req.body.status_arb)}
            ,contact_id=${db.escape(req.body.contact_id)}
            ,company_id=${db.escape(req.body.company_id)}
            ,start_date=${db.escape(req.body.start_date)}
            ,estimated_finish_date=${db.escape(req.body.estimated_finish_date)}
            ,description=${db.escape(req.body.description)}
            ,description_arb=${db.escape(req.body.description_arb)}
            ,project_manager_id=${db.escape(req.body.project_manager_id)}
            ,company_invoice=${db.escape(req.body.company_invoice)}
            WHERE project_id =  ${db.escape(req.body.project_id)}`,
    (err, result) =>{
      if (err) {
        return res.status(400).send({
              data: err,
              msg:'Success'
            });
      } else {
            return res.status(200).send({
              data: `UPDATE project 
            SET title=${db.escape(req.body.title)}
            ,category=${db.escape(req.body.category)}
            ,status=${db.escape(req.body.status)}
            ,contact_id=${db.escape(req.body.contact_id)}
            ,company_id=${db.escape(req.body.company_id)}
            ,start_date=${db.escape(req.body.start_date)}
            ,estimated_finish_date=${db.escape(req.body.estimated_finish_date)}
            ,description=${db.escape(req.body.description)}
            ,project_manager_id=${db.escape(req.body.project_manager_id)}
            WHERE project_id =  ${db.escape(req.body.project_id)}`,
              msg:'Success'
            });
      }
     }
  );
});

app.post("/getClaimPaymentBYId", (req, res, next) => {
  db.query(
    `select (select (SELECT(sum(c.amount)))
    from claim_payment c
    WHERE c.project_id = ${db.escape(req.body.project_id)}  AND c.claim_payment_id < ${db.escape(req.body.claim_payment_id)}) as prev_amount
    ,cl.amount as contractAmount
              ,cl.title
              ,cl.description
              ,pc.claim_date
              ,c.claim_seq
              ,c.amount
              ,cl.remarks
              ,(SELECT(sum(c.amount))) as cum_amount
              from claim_line_items cl
               LEFT JOIN (claim_payment c) ON (c.claim_line_items_id = cl.claim_line_items_id)
               LEFT JOIN (project_claim pc) ON (pc.project_claim_id = cl.project_claim_id)
              WHERE cl.project_id = ${db.escape(req.body.project_id)}`,
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
            )
    });

app.post("/getProjectClaimSummaryById", (req, res, next) => {
  db.query(
    `SELECT pc.amount
    ,pc.variation_order_submission
    ,(select(sum(pc.amount+ pc.variation_order_submission))) AS overAllAmount
    ,pc.vo_claim_work_done
    ,pc.amount as con_sum
    ,pc.claim_date
    ,pc.ref_no
    ,pc.less_previous_retention
          FROM project_claim pc
                    WHERE pc.project_id=${db.escape(
                        req.body.project_id
                      )}`,
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
app.post("/getProjectPaymentSummaryById", (req, res, next) => {
  db.query(
    `SELECT c.claim_seq
    ,c.date
     ,p.title
     ,c.description
     ,p.quote_id
     ,c.amount
     ,co.company_name
     FROM claim_payment c
               LEFT JOIN (project p) ON (p.project_id = c.project_id)
               LEFT JOIN (company co) ON (co.company_id = p.company_id)
               WHERE c.project_id=${db.escape(
                        req.body.project_id
                      )}`,
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

// app.post('/getQuotePdfById', (req, res, next) => {
//   db.query(`SELECT q.quote_code
//   ,q.quote_date
//   ,q.gst
//   ,q.payment_method
//   ,q.created_by
//   ,q.project_location
//   ,q.project_reference
//   ,q.discount
//   ,q.employee_id
//               ,qi.title AS quote_item_title
//               ,qi.quantity
//               ,qi.unit
//               ,qi.description
//               ,qi.amount
//               ,qi.unit_price
//               ,qi.remarks
//               ,o.opportunity_id
//               ,o.opportunity_code
//               ,o.company_id
//               ,c.company_name
//               ,c.address_flat AS billing_address_flat
//               ,c.address_street AS billing_address_street
//               ,c.address_town AS billing_address_town
//               ,c.address_state AS billing_address_state
//               ,gc.name AS billing_address_country
//               ,c.address_po_code AS billing_address_po_code
//               ,c.company_id
//               ,co.email
//               ,c.phone
//               ,c.fax
//               ,c.mobile
//               ,co.salutation
//               ,co.first_name
//               ,s.email AS employee_email
//               ,e.mobile AS employee_mobile
//         FROM quote q
  
//         LEFT JOIN (quote_items qi) ON (qi.quote_id = q.quote_id)
//         LEFT JOIN (opportunity o) ON (o.opportunity_id = q.opportunity_id)
//         LEFT JOIN (company c) ON (c.company_id = o.company_id)
//         LEFT JOIN (contact co) ON (co.contact_id = o.contact_id)
//         LEFT JOIN (geo_country gc) ON (gc.country_code = c.address_country)
//         LEFT JOIN (employee e) ON (e.employee_id = q.employee_id)
//         LEFT JOIN (staff s) ON (s.employee_id = q.employee_id)
//         WHERE q.quote_id = ${db.escape(req.body.quote_id)}
//         ORDER BY qi.quote_items_id ASC`,
//           (err, result) => {
       
//       if (result.length == 0) {
//         return res.status(400).send({
//           msg: 'No result found'
//         });
//       } else {
//             return res.status(200).send({
//               data: result,
//               msg:'Success'
//             });
//       }
  
//     }
//    );
// });
app.post('/insertProject', (req, res, next) => {

  let data = {title	:req.body.title	
   , category	: req.body.category	
   , status: req.body.status
   , contact_id: req.body.contact_id
   , company_id: req.body.company_id
   , quote_id: req.body.quote_id
    , proposal_id: req.body.proposal_id
   , start_date	: req.body.start_date
   , description	: req.body.description
   , estimated_finish_date	: req.body.estimated_finish_date
   , creation_date: new Date().toISOString()
   , modification_date	: req.body.modification_date	
   , project_id:req.body.project_id
    , project_code:req.body.project_code
    , project_quote_id:req.body.project_quote_id
  };
  let sql = "INSERT INTO project SET ?";
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


app.post('/insertProjects', (req, res, next) => {

  let data = {title	:req.body.title	
   , category	: req.body.category	
   , status: req.body.status
   , contact_id: req.body.contact_id
   , company_id: req.body.company_id
   , quote_id: req.body.quote_id
   , start_date	: new Date()
   , actual_finish_date	: req.body.actual_finish_date
   , creation_date: new Date().toISOString()
   , modification_date	: req.body.modification_date	
   , project_id:req.body.project_id
    , project_code:req.body.project_code
  };
  let sql = "INSERT INTO project SET ?";
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


app.post('/getSupplierById', (req, res, next) => {
  db.query(`select (sum(s.amount)) as payAmount,
(sum(sr.amount)) as paidAmount
from supplier_receipt s
LEFT JOIN supplier_receipt_history sr  ON (sr.supplier_receipt_id = s.supplier_receipt_id) 
LEFT JOIN purchase_order p  ON (p.purchase_order_id = sr.purchase_order_id) 
where p.project_id = ${db.escape(req.body.project_id)}`,
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

app.post('/getPreviousInvoiceAmount', (req, res, next) => {
  const companyName = req.body.companyName;
  const startDate = req.body.startDate;

  const sqlInvoice = `
    SELECT invoice_id, invoice_amount
    FROM invoice i
    LEFT JOIN project p ON i.project_id = p.project_id
    LEFT JOIN company c ON c.company_id = p.company_id
    WHERE c.company_name = ? AND i.invoice_date < ? AND i.status != 'Cancelled'
  `;

  db.query(sqlInvoice, [companyName, startDate], (err, invoiceResults) => {
    if (err) {
      console.log("error: ", err);
      return res.status(400).send({
        data: err,
        msg: "failed",
      });
    }

    let totalPreviousInvoiceAmount = 0;

    invoiceResults.forEach((rowInvoice) => {
      totalPreviousInvoiceAmount += rowInvoice.invoice_amount;

      const sqlPayment = `
        SELECT SUM(r.amount) AS receipt_amount
        FROM receipt r
        LEFT JOIN invoice_receipt_history irh ON r.receipt_id = irh.receipt_id
        WHERE r.receipt_status = 'Paid' AND irh.invoice_id = ? AND r.receipt_date < ?
      `;

      db.query(sqlPayment, [rowInvoice.invoice_id, startDate], (err, paymentResults) => {
        if (err) {
          console.log("error: ", err);
          return res.status(400).send({
            data: err,
            msg: "failed",
          });
        }

        const receiptAmount = paymentResults[0].receipt_amount;
        totalPreviousInvoiceAmount -= receiptAmount;
         
        
      });
    });

    // After processing all invoices and payments, return the totalPreviousInvoiceAmount.
    res.json({ totalPreviousInvoiceAmount });
  });
});

app.post('/getSubconById', (req, res, next) => {
  db.query(`select (sum(s.amount)) as payAmount,
(sum(sh.amount)) as paidAmount
from sub_con_payments s
LEFT JOIN sub_con_payments_history sh ON (sh.sub_con_payments_id = s.sub_con_payments_id) 
LEFT JOIN sub_con_work_order so  ON (so.sub_con_work_order_id = s.sub_con_work_order_id) 
where so.project_id =  ${db.escape(req.body.project_id)}`,
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

app.post('/getCompanyProjectById', (req, res, next) => {
  db.query(`select c.company_id
,c.company_name as cust_company_name
,c.address_street as cust_address1
,c.address_town as cust_address2
,c.address_country as cust_address_country
,c.address_po_code as cust_address_po_code
,p.category as project_type
from project p
 LEFT JOIN company c ON (c.company_id = p.company_id) 
 where p.project_id=${db.escape(req.body.project_id)} `,
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
app.get('/getOppProject', (req, res, next) => {
  db.query(`SELECT
  p.title,
  p.category,
  p.status,
  p.quote_ref,
  p.project_code,
  p.contact_id,
  p.start_date,
  p.estimated_finish_date,
  p.actual_finish_date,
  p.description,
  p.project_manager_id,
  p.project_id,
  p.company_id,
  p.client_type,
  p.difficulty,
  p.per_completed,
  p.project_value,
  p.quote_id,
  cont.first_name,
  c.company_name,
  c.company_size,
  c.source,
  c.industry,
  p.project_value
 FROM project p LEFT JOIN company c  ON p.company_id = c.company_id
LEFT JOIN contact cont ON p.contact_id = cont.contact_id
WHERE p.project_id != ''`,
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

app.post('/getProjectSummary', (req, res, next) => {
  db.query(`SELECT p.*
                  ,p.title AS Project_name
                  ,c.company_id
                  ,c.company_name
                  ,o.price
                  ,CONCAT_WS(' ', cont.first_name, cont.last_name) AS contact_name
            FROM project p
            LEFT JOIN (company c) ON (c.company_id = p.company_id)
            LEFT JOIN (contact cont) ON (p.contact_id = cont.contact_id)
            LEFT JOIN (opportunity o) ON (p.opportunity_id = o.opportunity_id)
         WHERE p.project_id = ${db.escape(req.body.project_id)}
 ORDER BY p.project_id DESC`,
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
app.post('/deleteEditItem', (req, res, next) => {

  let data = {quote_items_id: req.body.quote_items_id};
  let sql = "DELETE FROM quote_items WHERE ?";
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
app.post('/getContactLinkedByProjectId', (req, res, next) => {
  db.query(`SELECT *
  FROM project p
  LEFT JOIN company cc ON p.company_id = cc.company_id
  LEFT JOIN contact c ON p.company_id = c.company_id
  WHERE p.project_id = ${db.escape(req.body.project_id)}`,
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
app.post('/getCostingSummaryForDashboard', (req, res, next) => {
  db.query(`SELECT p.*
                  ,p.title AS Project_name,
                (SELECT SUM(amount) 
FROM actual_costing_summary 
WHERE title = 'Transport Charges' 
AND project_id = p.project_id) as transport_charges,
(SELECT SUM(amount) 
FROM actual_costing_summary 
WHERE title = 'Other Charges' 
AND project_id = p.project_id) as other_charges,
(SELECT SUM(amount) 
FROM actual_costing_summary 
WHERE title = 'Total Labour Charges' 
AND project_id = p.project_id) as labour_charges,
(SELECT SUM(amount) 
FROM actual_costing_summary 
WHERE title = 'Salesman Commission' 
AND project_id = p.project_id) as sales_commision,
(SELECT SUM(amount) 
FROM actual_costing_summary 
WHERE title = 'Finance Charges' 
AND project_id = p.project_id) as finance_charges,
(SELECT SUM(amount) 
FROM actual_costing_summary 
WHERE title = 'Office Overheads' 
AND project_id = p.project_id) as office_overheads

            FROM project p
           
         WHERE p.project_id = ${db.escape(req.body.project_id)}`,
    (err, result) => {
       
      if (err) {
        return res.status(400).send({
          msg: err
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

app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;