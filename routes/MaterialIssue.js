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

app.get('/getMaterialIssue', (req, res, next) => {
  const projectId = req.query.project_id;
  db.query(`select
  lr.material_issue_id
  ,lr.project_id
  ,lr.material_request_id
  ,lr.reason_for_issue
  ,lr.material_issue_date
  ,lr.notes
  ,lr.authorized_by
  ,lr.creation_date
  ,lr.modification_date
  ,p.title AS proj_title
  ,p.project_code
  ,mr.material_request_code
  From material_issue lr
  LEFT JOIN (project p)   ON (p.project_id   = lr.project_id) 
  LEFT JOIN (material_request mr)   ON (mr.material_request_id   = lr.material_request_id) 
            where lr.material_issue_id  !=''
            Order by lr.material_issue_id DESC`,
            
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
app.get('/getSettingsForCompany', (req, res, next) => {
  db.query(`SELECT * FROM setting WHERE key_text LIKE 'cp%'`,
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

app.post("/getMaterialIssueDataById", (req, res, next) => {
  db.query(
    `SELECT
    lr.material_issue_id,
    lr.project_id,
    lr.material_request_id,
    lr.material_issue_date,
    lr.material_issue_date_arb,
    lr.material_r_code,
    lr.material_request_code_arb,
    c.company_name,
    c.company_name_arb,
    c.address_flat,
    c.address_street,
    c.address_town,
    c.address_country,
    c.address_po_code,
    c.phone,
    cont.first_name,
    cont.first_name_arb
FROM
    material_issue lr
LEFT JOIN
    project p ON p.project_id = lr.project_id
LEFT JOIN
    company c ON c.company_id = p.company_id
LEFT JOIN
    contact cont ON cont.contact_id = p.contact_id
WHERE
    lr.material_issue_id = ${db.escape(req.body.material_issue_id)}
ORDER BY
    lr.material_request_id DESC`,
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

app.post("/getTaskByID", (req, res, next) => {
  
  db.query(
    `SELECT * FROM material_request WHERE project_id = ${db.escape(req.body.project_id)};`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
          msg: 'Failed to fetch material requests',
        });
      } else {
        return res.status(200).send({
          data: result,
          msg: 'Material requests fetched successfully',
        });
      }
    }
  );
});

app.post('/getMaterialIssueById', (req, res, next) => {
  db.query(`select
  lr.material_issue_id
  ,lr.project_id
  ,lr.material_request_id
  ,lr.reason_for_issue
  ,lr.reason_for_issue_arb
  ,lr.material_issue_date
  ,lr.material_issue_date_arb
  ,lr.notes
  ,lr.notes_arb
  ,lr.authorized_by
  ,lr.authorized_by_arb
  ,lr.creation_date
  ,lr.modification_date
  ,p.title AS proj_title
  ,p.project_code
  ,lr.created_by
  ,lr.modified_by
  ,mr.material_request_code
  From material_issue lr
  LEFT JOIN (project p)   ON (p.project_id   = lr.project_id) 
  LEFT JOIN (material_request mr)   ON (mr.material_request_id   = lr.material_request_id) 
            where lr.material_issue_id = ${db.escape(req.body.material_issue_id)}`,
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

app.get('/getTranslationForMaterialIssue', (req, res, next) => {
  db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdMaterialIssue%'`,
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

app.post('/editMaterialIssue', (req, res, next) => {
  db.query(`UPDATE material_issue 
            SET 
            project_id=${db.escape(req.body.project_id)}
            ,material_request_id=${db.escape(req.body.material_request_id)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,modified_by=${db.escape(req.body.modified_by)}
            ,material_issue_date=${db.escape(req.body.material_issue_date)}
            ,material_issue_date_arb=${db.escape(req.body.material_issue_date_arb)}
            ,reason_for_issue=${db.escape(req.body.reason_for_issue)}
            ,reason_for_issue_arb=${db.escape(req.body.reason_for_issue_arb)}
            ,notes=${db.escape(req.body.notes)}
            ,notes_arb=${db.escape(req.body.notes_arb)}
            ,authorized_by=${db.escape(req.body.authorized_by)}
            ,authorized_by_arb=${db.escape(req.body.authorized_by_arb)}
            WHERE material_issue_id = ${db.escape(req.body.material_issue_id)}`,
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

app.post('/insertMaterialIssue', (req, res, next) => {

  let data = {
    material_issue_id:req.body.material_issue_id	
   , project_id: req.body.project_id
   , material_request_id:req.body.material_request_id	
   , material_issue_date:req.body.material_issue_date	
   , creation_date: req.body.creation_date
   , modification_date: req.body.modification_date
   , created_by: req.body.created_by
  
  };
  let sql = "INSERT INTO material_issue SET ?";
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

app.post('/deleteMaterialIssue', (req, res, next) => {

  let data = {material_issue_id: req.body.material_issue_id};
  let sql = "DELETE FROM material_issue WHERE ?";
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
  ,CONCAT_WS('/', p.title, p.project_code)  AS project_title
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


app.get('/getMaterialRequest', (req, res, next) => {
  db.query(`select
  lr.material_request_id
  ,lr.material_request_code
  From material_request lr
  where lr.material_request_id  !=''`,
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