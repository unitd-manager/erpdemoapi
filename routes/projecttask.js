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




app.get('/getProjectTask', (req, res, next) => {
  db.query(`SELECT
  pt.project_task_id
  ,pt.project_id
  ,pt.company_id
  ,pt.employee_id
  ,pt.start_date
  ,pt.end_date
  ,pt.end_date_arb
  ,pt.completion
  ,pt.completion_arb
  ,pt.task_title
  ,pt.task_title_arb
  ,pt.status
  ,pt.status_arb
  ,pt.media_id
  ,pt.description
  ,pt.description_arb
  ,pt.project_job_id
  ,pt.estimated_hours
  ,pt.estimated_hours_arb
  ,pt.description_arb
  ,pt.actual_hours
  ,pt.actual_hours_arb
  ,pt.actual_completed_date
  ,pt.actual_completed_date_arb
  ,pt.task_type
  ,pt.task_type_arb
  ,pt.priority
  ,pt.priority_arb
  ,pt.creation_date
  ,pt.created_by
  ,pt.modification_date
  ,pt.modified_by
  ,p.title
  ,p.title_arb
  ,e.first_name
  ,e.first_name_arb
  ,e.employee_id
  FROM project_task pt
  LEFT JOIN project p ON p.project_id = pt.project_id
  LEFT JOIN employee e ON e.employee_id = pt.employee_id
  LEFT JOIN project_job jo ON p.project_id = jo.project_id
  Where pt.project_task_id !=''`,
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

app.post("/getEmployeeByID", (req, res, next) => {
  db.query(
    `SELECT 
                e.employee_id
               ,e.first_name
               ,p.title
                FROM employee e 
                LEFT JOIN employee_timesheet t ON (t.employee_id = e.employee_id) 
                LEFT JOIN project p ON (p.project_id = t.project_id) 
                WHERE  p.project_id=${db.escape(req.body.project_id)}
GROUP BY p.project_id,e.employee_id;`,
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

app.post("/getProjectTitleById", (req, res, next) => {
  db.query(
    `SELECT
  title,project_id
   From project 
   WHERE project_id=${db.escape(req.body.project_id)}
  `,
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


app.post('/getProjectTaskById', (req, res, next) => {
    db.query(`SELECT
    pt.project_task_id
    ,pt.project_id
    ,pt.company_id
    ,pt.employee_id
    ,pt.start_date
    ,pt.end_date
    ,pt.end_date_arb
    ,pt.completion
    ,pt.completion_arb
    ,pt.task_title
    ,pt.task_title_arb
    ,pt.status
    ,pt.status_arb
    ,pt.media_id
    ,pt.description
    ,pt.description_arb
    ,pt.project_job_id
    ,pt.estimated_hours
    ,pt.estimated_hours_arb
    ,pt.description_arb
    ,pt.actual_hours
    ,pt.actual_hours_arb
    ,pt.actual_completed_date
    ,pt.actual_completed_date_arb
    ,pt.task_type
    ,pt.task_type_arb
    ,pt.priority
    ,pt.priority_arb
    ,pt.creation_date
    ,pt.created_by
    ,pt.modification_date
    ,pt.modified_by
    ,p.project_id
    ,p.title
    ,p.title_arb
    ,e.first_name
    ,e.first_name_arb
    ,e.employee_id


    FROM project_task pt
    LEFT JOIN project p ON p.project_id = pt.project_id
    LEFT JOIN employee e ON e.employee_id = pt.employee_id
    LEFT JOIN project_job jo ON p.project_id = jo.project_id
    Where pt.project_task_id = ${db.escape(req.body.project_task_id)}`,
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

  app.post('/getTimeSheetProjectTaskById', (req, res, next) => {
    db.query(`SELECT
    pt.project_timesheet_id 
    ,pt.timesheet_title
    ,pt.date
    ,pt.project_id
    ,pt.employee_id
    ,pt.status
    ,pt.description
    ,pt.hours
    ,pt.project_task_id
    ,pt.project_milestone_id
    ,pt.creation_date
    ,pt.modification_date
    ,pt.created_by
    ,pt.modified_by
    ,e.first_name
    ,e.first_name_arb
    ,e.employee_id
    FROM project_timesheet pt
    LEFT JOIN project_task pa ON pt.project_task_id = pa.project_task_id
    LEFT JOIN project p ON p.project_id = pt.project_id
    LEFT JOIN employee e ON e.employee_id = pt.employee_id
    Where pt.project_task_id = ${db.escape(req.body.project_task_id)}`,
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

  app.delete('/deleteProjectTimesheet', (req, res, next) => {

    let data = {project_timesheet_id : req.body.project_timesheet_id };
    let sql = "DELETE FROM project_timesheet WHERE ?";
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

  app.post('/getTimeSheetByTimesheetId', (req, res, next) => {
    db.query(`SELECT
    pt.project_timesheet_id 
    ,pt.timesheet_title
    ,pt.date
    ,pt.project_id
    ,pt.employee_id
    ,pt.status
    ,pt.description
    ,pt.hours
    ,pt.project_task_id
    ,pt.project_milestone_id
    ,pt.creation_date
    ,pt.modification_date
    ,pt.created_by
    ,pt.modified_by
    ,e.first_name
    ,e.first_name_arb
    ,e.employee_id
    FROM project_timesheet pt
    LEFT JOIN project_task pa ON pt.project_task_id = pa.project_task_id
    LEFT JOIN project p ON p.project_id = pt.project_id
    LEFT JOIN employee e ON e.employee_id = pt.employee_id
    Where pt.project_timesheet_id = ${db.escape(req.body.project_timesheet_id)}`,
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

  app.get('/getTranslationForProjectTask', (req, res, next) => {
    db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdProjectTask%'`,
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
  
app.get("/getProjectTitle", (req, res, next) => {
    db.query(
      `SELECT
    title,project_id
     From project `,
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

  app.post("/getProjectTitleId", (req, res, next) => {
    db.query(
      `SELECT
    p.title,
    p.project_id,
    e.employee_id
     From project p
  LEFT JOIN project_task t ON t.project_id=p.project_id
  LEFT JOIN employee e ON t.employee_id=e.employee_id
  WHERE t.employee_id=${db.escape(req.body.employee_id)} 
  GROUP BY p.project_id, e.employee_id`,
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

  app.post('/getStatsEmployeeId', (req, res, next) => {
    db.query(`SELECT
    p.title,
  e.first_name
  FROM
    project_task t
  LEFT JOIN employee e ON t.employee_id = e.employee_id
  LEFT JOIN project p ON t.project_id = p.project_id
  WHERE
    e.employee_id=${db.escape(req.body.employee_id)} AND p.project_id=${db.escape(req.body.project_id)}
    GROUP BY e.employee_id,p.project_id`,
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

  app.post('/getStatsId', (req, res, next) => {
    db.query(`SELECT
    t.employee_id,
    e.first_name,
    e.employee_id AS employees_id,
    p.project_id,
    p.title,
    SUM(t.completion) AS total_completion,
    COUNT(*) AS total_tasks,
    SUM(CASE WHEN t.status = 'Completed' THEN 1 ELSE 0 END) AS completed_tasks,
    SUM(CASE WHEN t.status = 'Pending' THEN 1 ELSE 0 END) AS pending_tasks,
    SUM(CASE WHEN t.status = 'InProgress' THEN 1 ELSE 0 END) AS in_progress_tasks,
    SUM(CASE WHEN t.status = 'OnHold' THEN 1 ELSE 0 END) AS on_hold_tasks
  FROM
    project_task t
  LEFT JOIN employee e ON t.employee_id = e.employee_id
  LEFT JOIN project p ON t.project_id = p.project_id
  WHERE
    t.employee_id= ${db.escape(req.body.employee_id)} AND t.project_id= ${db.escape(req.body.project_id)}
  GROUP BY
    t.employee_id, e.first_name, p.project_id, p.title`,
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

  

  app.get("/getJobOrderTitle", (req, res, next) => {
    db.query(
      `SELECT
      pj.project_job_id ,
      pj.project_id,
      pj.job_code,
      pj.job_title,
      pj.job_title_arb,
      pj.job_status,
      pj.job_status_arb
     From project_job pj
     left join project p on p.project_id = pj.project_id
     where pj.job_status!='Completed' AND pj.job_status!='Cancelled' `,
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

  app.get("/getCompanyName", (req, res, next) => {
    db.query(
      `SELECT
      company_name
      ,company_id
     From company `,
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


  app.post('/editProjectTask', (req, res, next) => {
    db.query(`UPDATE project_task 
              SET project_id=${db.escape(req.body.project_id)}
              ,employee_id=${db.escape(req.body.employee_id)}
              ,company_id=${db.escape(req.body.company_id)}
              ,start_date=${db.escape(req.body.start_date)}
              ,start_date_arb=${db.escape(req.body.start_date_arb)}
              ,end_date=${db.escape(req.body.end_date)}
              ,end_date_arb=${db.escape(req.body.end_date_arb)}
              ,completion=${db.escape(req.body.completion)}
              ,completion_arb=${db.escape(req.body.completion_arb)}
              ,task_title=${db.escape(req.body.task_title)}
              ,task_title_arb=${db.escape(req.body.task_title_arb)}
              ,status=${db.escape(req.body.status)}
              ,status_arb=${db.escape(req.body.status_arb)}
              ,media_id=${db.escape(req.body.media_id)}
              ,description=${db.escape(req.body.description)}
              ,description_arb=${db.escape(req.body.description_arb)}
              ,project_job_id=${db.escape(req.body.project_job_id)}
              ,estimated_hours=${db.escape(req.body.estimated_hours)}
              ,estimated_hours_arb=${db.escape(req.body.estimated_hours_arb)}
              ,actual_completed_date=${db.escape(req.body.actual_completed_date)}
              ,actual_completed_date_arb=${db.escape(req.body.actual_completed_date_arb)}
              ,actual_hours=${db.escape(req.body.actual_hours)}
              ,actual_hours_arb=${db.escape(req.body.actual_hours_arb)}
              ,task_type=${db.escape(req.body.task_type)}
              ,task_type_arb=${db.escape(req.body.task_type_arb)}
              ,priority=${db.escape(req.body.priority)}
              ,priority_arb=${db.escape(req.body.priority_arb)}
              ,creation_date=${db.escape(req.body.creation_date)}
              ,created_by=${db.escape(req.body.created_by)}
              ,modification_date=${db.escape(req.body.modification_date)}
              ,modified_by=${db.escape(req.body.modified_by)}
              WHERE project_task_id = ${db.escape(req.body.project_task_id)}`,
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


          app.post('/editProjectTimesheet', (req, res, next) => {
            db.query(`UPDATE project_timesheet
                      SET timesheet_title=${db.escape(req.body.timesheet_title)}
                      ,date=${db.escape(req.body.date)}
                      ,project_id=${db.escape(req.body.project_id)}
                      ,employee_id=${db.escape(req.body.employee_id)}
                      ,status=${db.escape(req.body.status)}
                      ,description=${db.escape(req.body.description)}
                      ,hours=${db.escape(req.body.hours)}
                      ,project_task_id=${db.escape(req.body.project_task_id)}
                      ,modification_date=${db.escape(req.body.modification_date)}
                      ,modified_by=${db.escape(req.body.modified_by)}
                      WHERE project_timesheet_id = ${db.escape(req.body.project_timesheet_id)}`,
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

app.post('/insertProjectTask', (req, res, next) => {
  let data = {
    project_id	: req.body.project_id
    , employee_id	: req.body.employee_id
    , start_date: req.body.start_date
    , end_date: req.body.end_date
    , completion	: req.body.completion
    , task_title: req.body.task_title
    , status: req.body.status
    , media_id: req.body.media_id
    , description:req.body.description
    , project_job_id:req.body.project_job_id
    , estimated_hours:req.body.estimated_hours
    , actual_completed_date:req.body.actual_completed_date
    , task_type:req.body.task_type
    , priority:req.body.priority
    , created_by:req.body.created_by
    , creation_date:req.body.creation_date
    , modified_by:req.body.modified_by
    , modification_date:req.body.modification_date
 };
  let sql = "INSERT INTO project_task SET ?";
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

app.post('/insertProjectTimesheet', (req, res, next) => {
  let data = {
    project_timesheet_id 	: req.body.project_timesheet_id 
    , timesheet_title	: req.body.timesheet_title
    , date: req.body.date
    , project_id: req.body.project_id
    , employee_id	: req.body.employee_id
    , status: req.body.status
    , description: req.body.description
    , hours: req.body.hours
    , project_task_id:req.body.project_task_id
    , project_milestone_id:req.body.project_milestone_id
    , creation_date:req.body.creation_date
    , modification_date:req.body.modification_date
    , created_by:req.body.created_by
    , modified_by:req.body.modified_by
 };
  let sql = "INSERT INTO project_timesheet SET ?";
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



app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;