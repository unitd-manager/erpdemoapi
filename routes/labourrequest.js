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

app.get('/getLabourRequest', (req, res, next) => {
  db.query(`select
  lr.labour_request_id
  ,lr.project_id
  ,lr.request_urgency
  ,lr.request_urgency_arb
  ,lr.request_date
  ,lr.request_date_arb
  ,lr.request_start_date
  ,lr.request_start_date_arb
  ,lr.request_end_date
  ,lr.request_end_date_arb
  ,lr.request_by
  ,lr.request_by_arb
  ,lr.job_description
  ,lr.job_description_arb
  ,lr.request_type
  ,lr.request_type_arb
            ,lr.no_of_employees
            ,lr.no_of_employees_arb
            ,lr.skills_required
            ,lr.skills_required_arb
            ,lr.department
            ,lr.department_arb
  ,lr.creation_date
  ,lr.modification_date
  ,p.title AS proj_title
  ,p.project_code
  From labour_request lr
  LEFT JOIN (project p)   ON (p.project_id   = lr.project_id) 
            where lr.labour_request_id  !=''`,
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

app.get('/getLabourRequestSummary', (req, res, next) => {
  db.query(`select
  lr.labour_request_id
  ,lr.project_id
  ,lr.request_urgency
  ,lr.request_date
  ,lr.request_start_date
  ,lr.request_end_date
  ,lr.request_by
  ,lr.job_description
  ,lr.request_type
            ,lr.no_of_employees
            ,lr.skills_required
            ,lr.department
  ,lr.creation_date
  ,lr.modification_date
  ,p.title,
  p.project_code
  From labour_request lr
  LEFT JOIN (project p)   ON (p.project_id   = lr.project_id) 
  WHERE lr.request_type = 'Skilled' OR lr.request_type='UnSkilled' OR lr.request_type='Temporary' AND lr.labour_request_id!=''`,
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

app.get('/getTranslationForLabourRequest', (req, res, next) => {
  db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdLabourRequest%'`,
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


app.get('/getTranslationColumn', (req, res, next) => {
  db.query(`SELECT SUBSTRING(COLUMN_NAME, 1, LENGTH(COLUMN_NAME) - 4) AS COLUMN_NAME_TRUNCATED FROM INFORMATION_SCHEMA.COLUMNS WHERE TABLE_NAME = 'labour_request' AND COLUMN_NAME LIKE '%arb'`,
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

app.post('/getLabourRequestById', (req, res, next) => {
  db.query(`select
  lr.labour_request_id
  ,lr.project_id
  ,lr.request_urgency
  ,lr.request_urgency_arb
  ,lr.request_date
  ,lr.request_date_arb
  ,lr.request_start_date
  ,lr.request_start_date_arb
  ,lr.request_end_date
  ,lr.request_end_date_arb
  ,lr.request_by
  ,lr.request_by_arb
  ,lr.job_description
  ,lr.job_description_arb
  ,lr.request_type
  ,lr.request_type_arb
            ,lr.no_of_employees
            ,lr.no_of_employees_arb
            ,lr.skills_required
            ,lr.skills_required_arb
            ,lr.department
            ,lr.department_arb
  ,lr.creation_date
  ,lr.modification_date
  ,p.title AS proj_title
  ,p.project_code
  From labour_request lr
  LEFT JOIN (project p)   ON (p.project_id   = lr.project_id) 
            where lr.labour_request_id = ${db.escape(req.body.labour_request_id)}`,
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

app.post('/getLabourTranslation', (req, res, next) => {
  const columnNames = db.escape(req.body.columnNames);
  const labourRequestId = db.escape(req.body.labour_request_id);
  let result = columnNames.replace(/'/g, "");
 
  const query = `
    SELECT ${result}
    FROM labour_request 
    WHERE labour_request_id = ${labourRequestId}
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

app.post('/getLabourTranslationGet', (req, res, next) => {
  const columnNames = db.escape(req.body.columnNames);
  let result = columnNames.replace(/'/g, "");
   console.log('columnNameGet',result)
  const query = `
    SELECT ${result}
    FROM labour_request 
    WHERE labour_request_id !=''
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

// app.post('/getLabourTranslation', (req, res, next) => {
//   db.query(`select ${db.escape(req.body.columnNames)}
//             From labour_request 
//             where labour_request_id = ${db.escape(req.body.labour_request_id)}`,
//     (err, result) => {
//       if (err) {
//         console.log('error: ', err)
//         return res.status(400).send({
//           data: err,
//           msg: 'failed',
//         })
//       } else {
//         return res.status(200).send({
//           data: result,
//           msg: 'Success',
//             });

//         }
 
//     }
//   );
// });


app.post('/editLabourRequest', (req, res, next) => {
  db.query(`UPDATE labour_request 
            SET 
            project_id=${db.escape(req.body.project_id)}
            ,request_urgency=${db.escape(req.body.request_urgency)}
            ,request_urgency_arb=${db.escape(req.body.request_urgency_arb)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,modified_by=${db.escape(req.body.modified_by)}
            ,request_start_date=${db.escape(req.body.request_start_date)}
            ,request_start_date_arb=${db.escape(req.body.request_start_date_arb)}
            ,request_end_date=${db.escape(req.body.request_end_date)}
            ,request_end_date_arb=${db.escape(req.body.request_end_date_arb)}
            ,department=${db.escape(req.body.department)}
            ,department_arb=${db.escape(req.body.department_arb)}
            ,request_type=${db.escape(req.body.request_type)}
            ,request_type_arb=${db.escape(req.body.request_type_arb)}
            ,request_date=${db.escape(req.body.request_date)}
            ,request_date_arb=${db.escape(req.body.request_date_arb)}
            ,request_by=${db.escape(req.body.request_by)}
            ,request_by_arb=${db.escape(req.body.request_by_arb)}
            ,job_description=${db.escape(req.body.job_description)}
            ,job_description_arb=${db.escape(req.body.job_description_arb)}
            ,no_of_employees=${db.escape(req.body.no_of_employees)}
            ,no_of_employees_arb=${db.escape(req.body.no_of_employees_arb)}
            ,skills_required=${db.escape(req.body.skills_required)}
            ,skills_required_arb=${db.escape(req.body.skills_required_arb)}
            WHERE labour_request_id = ${db.escape(req.body.labour_request_id)}`,
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
// app.post('/editLabourRequestArb', (req, res, next) => {
//   const columnNames = db.escape(req.body.columnNames);
//   let result = columnNames.replace(/'/g, "");
//    console.log('columnNameGet',result)
//   db.query(`UPDATE labour_request 
//             SET 
//             ${result}= ${result}
//             WHERE labour_request_id = ${db.escape(req.body.labour_request_id)}`,
//     (err, result) => {
     
//       if (err) {
//         console.log('error: ', err)
//         return res.status(400).send({
//           data: err,
//           msg: 'failed',
//         })
//       } else {
//         return res.status(200).send({
//           data: result,
//           msg: 'Success',
//             });
//       }
//      }
//   );
// });

app.post('/editLabourRequestArb', (req, res, next) => {
  const columnNames = db.escape(req.body.columnName);
  let column = columnNames.replace(/'/g, "");
  const value = db.escape(req.body.value);
  const labourRequestId = db.escape(req.body.labour_request_id);

  // Assuming req.body.columnNames is an object where keys are column names and values are the new values
//   const updates = Object.entries(columnNames).map(([columnName, value]) => {
//     return `${columnName} = ${db.escape(value)}`;
//   }).join(", ");
// const updates=()=>{

// }
console.log('columnNames',column)
console.log('value',value)
  db.query(
    `UPDATE labour_request 
     SET ${column}=${value}
     WHERE labour_request_id = ${labourRequestId}`,
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

app.post('/insertLabourRequest', (req, res, next) => {

  let data = {
    labour_request_id:req.body.labour_request_id	
   , project_id: req.body.project_id
   , creation_date: req.body.creation_date
   , created_by: req.body.created_by
   , modification_date: req.body.modification_date
   , request_date: req.body.request_date
  
  };
  let sql = "INSERT INTO labour_request SET ?";
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

app.post('/deleteLabourRequest', (req, res, next) => {

  let data = {labour_request_id: req.body.labour_request_id};
  let sql = "DELETE FROM labour_request WHERE ?";
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




app.get('/getProjecttitle', (req, res, next) => {
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
  ,p.project_code
  ,CONCAT_WS('/', p.title, p.project_code,c.company_name)  AS project_title
 
  FROM project p
  LEFT JOIN (company c) ON p.company_id=c.company_id `,
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





app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;