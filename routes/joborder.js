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

app.post('/getJobOrderById', (req, res, next) => {
    db.query(` SELECT q.job_date
    ,q.job_date_arb
    ,q.project_job_id
    ,q.job_code
    ,q.job_code_arb
    ,q.job_title
    ,q.job_title_arb
    ,q.job_status
    ,q.job_status_arb
    ,q.ref_no_job
    ,q.ref_no_job_arb
    ,q.project_location
    ,q.project_reference
    ,q.payment_method
    ,q.revision
    ,q.intro_drawing_job 
    ,q.total_amount
    ,q.company_id
    ,q.sub_con_id
    ,c.company_name
    ,c.company_name_arb
    ,s.sub_con_id
    ,s.company_name AS sub_con_title
    ,s.company_name_arb
    ,q.creation_date
    ,q.modification_date
    ,q.created_by
    ,q.modified_by
    ,(select sum(it.amount)) as InvoiceAmount
    FROM project_job q  
    LEFT JOIN (project_job_items it) ON (it.project_job_id = q.project_job_id)
    LEFT JOIN (company c) ON (c.company_id = q.company_id)
    LEFT JOIN (sub_con s) ON q.sub_con_id = s.sub_con_id
    WHERE q.project_job_id =${db.escape(req.body.project_job_id)}
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

  app.get('/getTranslationForJopOrder', (req, res, next) => {
    db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdJobOrder%'`,
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
  

  app.post('/getProjectJobOrderById', (req, res, next) => {
    db.query(`SELECT q.job_date
    ,q.Project_id
    ,q.project_job_id
    ,q.job_code
    ,q.job_title
    ,q.job_status
    ,q.ref_no_job
    ,q.project_location
    ,q.project_reference
    ,q.payment_method
    ,q.revision
    ,q.intro_drawing_job 
    ,q.total_amount
    ,q.company_id
    ,q.creation_date
    ,q.modification_date
    ,q.created_by
    ,q.modified_by
    ,s.sub_con_id
    ,s.company_name AS sub_con_title
    FROM project_job q  
    LEFT JOIN sub_con s ON q.sub_con_id = s.sub_con_id
    WHERE q.project_id = ${db.escape(req.body.project_id)}
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

  app.get('/getJobOrder', (req, res, next) => {
    db.query(`SELECT q.job_date
    ,q.job_date_arb
    ,q.project_job_id
    ,q.job_code
    ,q.job_code_arb
    ,q.job_title
    ,q.job_title_arb
    ,q.job_status
    ,q.job_status_arb
    ,q.ref_no_job
    ,q.ref_no_job_arb
    ,q.project_location
    ,q.project_reference
    ,q.payment_method
    ,q.revision
    ,q.intro_drawing_job 
    ,q.total_amount
    ,q.company_id
    ,q.sub_con_id
    ,c.company_name
    ,c.company_name_arb
    ,s.sub_con_id
    ,s.company_name AS sub_con_title
    ,s.company_name_arb
    ,q.creation_date
    ,q.modification_date
    ,q.created_by
    ,q.modified_by
    FROM project_job q  
    LEFT JOIN (company c) ON (c.company_id = q.company_id)
    LEFT JOIN (sub_con s) ON q.sub_con_id = s.sub_con_id
    WHERE q.project_job_id != '' 
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

  
  app.post('/edit-Tradingjob', (req, res, next) => {
    db.query(`UPDATE project_job 
              SET job_date=${db.escape(req.body.job_date)}
              ,job_date_arb=${db.escape(req.body.job_date_arb)}
              ,job_code=${db.escape(req.body.job_code)}
              ,job_code_arb=${db.escape(req.body.job_code_arb)}
              ,job_title_arb=${db.escape(req.body.job_title_arb)}
              ,job_title=${db.escape(req.body.job_title)}
              ,job_status=${db.escape(req.body.job_status)}
              ,job_status_arb=${db.escape(req.body.job_status_arb)}
              ,project_location=${db.escape(req.body.project_location)}
              ,project_reference=${db.escape(req.body.project_reference)}
              ,payment_method=${db.escape(req.body.payment_method)}
              ,revision=${db.escape(req.body.revision)}
              ,intro_drawing_job=${db.escape(req.body.intro_drawing_job)}
              ,job_condition=${db.escape(req.body.job_condition)}
              ,our_reference=${db.escape(req.body.our_reference)}
              ,ref_no_job=${db.escape(req.body.ref_no_job)}
              ,ref_no_job_arb=${db.escape(req.body.ref_no_job_arb)}
              ,discount=${db.escape(req.body.discount)}
              ,total_amount=${db.escape(req.body.total_amount)}
              ,company_id=${db.escape(req.body.company_id)}
              ,sub_con_id=${db.escape(req.body.sub_con_id)}
              ,modification_date=${db.escape(req.body.modification_date)}
              ,modified_by=${db.escape(req.body.modified_by)}
              ,modified_by=${db.escape(req.body.modified_by)}
              WHERE project_job_id =  ${db.escape(req.body.project_job_id)}`,
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

  app.post('/inserttradingjob', (req, res, next) => {

    let data = {
      project_id: req.body.project_id
      , job_code: req.body.job_code
      , job_title: req.body.job_title
      , job_date: req.body.job_date
      , job_status: 'new'
      , company_id: req.body.company_id
      , project_location: req.body.project_location
      , project_reference: req.body.project_reference
      , discount: req.body.discount
      , gst: req.body.gst
      , payment_method: req.body.payment_method
      , drawing_nos: req.body.drawing_nos
      , intro_job: req.body.intro_job
      , our_reference: req.body.our_reference
      , total_amount: req.body.total_amount
      , revision: req.body.revision
      , employee_id: req.body.employee_id
      , ref_no_job: req.body.ref_no_job
      , intro_drawing_job: req.body.intro_drawing_job
      , show_project_manager: req.body.show_project_manager
      , creation_date: req.body.creation_date
      , company_id: req.body.company_id
      , modification_date: null
      , created_by: req.body.created_by
    };
    let sql = "INSERT INTO project_job SET ?";
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
  
          
          
  app.post('/getJobLineItemsById', (req, res, next) => {
    db.query(`SELECT
              qt.* 
              ,qt.project_job_id
              ,qt.project_job_items_id
              ,qt.creation_date
              ,qt.modification_date
              ,qt.created_by
              ,qt.modified_by
              FROM project_job_items qt 
              WHERE qt.project_job_id =  ${db.escape(req.body.project_job_id)}`,
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

    let data = {project_job_items_id: req.body.project_job_items_id};
    let sql = "DELETE FROM project_job_items WHERE ?";
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
  
  app.post('/edit-TabJobLine', (req, res, next) => {
    db.query(`UPDATE project_job_items
              SET title=${db.escape(req.body.title)}
              ,description=${db.escape(req.body.description)}
              ,quantity=${db.escape(req.body.quantity)}
              ,unit=${db.escape(req.body.unit)}
              ,modification_date=${db.escape(req.body.modification_date)}
              ,modified_by=${db.escape(req.body.modified_by)}
              ,modified_by=${db.escape(req.body.modified_by)}
              ,unit_price=${db.escape(req.body.unit_price)}
              ,amount=${db.escape(req.body.amount)}
              WHERE project_job_items_id =  ${db.escape(req.body.project_job_items_id)}`,
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
  app.post('/insertJobItems', (req, res, next) => {

    let data = {
       description: req.body.description
      , amount: req.body.amount
      , amount_other: req.body.amount_other
      , item_type: req.body.item_type
      , sort_order: req.body.sort_order
      , title: req.body.title
      , project_job_id: req.body.project_job_id
      , actual_amount: req.body.actual_amount
      , supplier_amount	: req.body.supplier_amount	
      , quantity: req.body.quantity
      , project_id: req.body.project_id
      , created_by: req.body.created_by
      , creation_date: req.body.creation_date
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
    let sql = "INSERT INTO project_job_items SET ?";
    let query = db.query(sql, data,(err, result) => {
      if (err) {
       return res.status(400).send({
              data: err,
              msg:'Failed'
            });
      } else {
            return res.status(200).send({
              data: result,
              msg:'New job item has been created successfully'
            });
      }
    });
  });
app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;