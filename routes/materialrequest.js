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

app.get('/getMaterialRequest', (req, res, next) => {
  db.query(`select
  lr.material_request_id
  ,lr.project_id
  ,lr.material_request_code
  ,lr.material_request_date
  ,lr.request_date
  ,lr.site_reference
  ,lr.site_reference_arb
  ,lr.approved_by
  ,lr.approved_by_arb
            ,lr.approved_date
            ,lr.approved_date_arb
            ,lr.shipping_method
            ,lr.shipping_method_arb
            ,lr.payment_terms
            ,lr.payment_terms_arb
            ,lr.material_status
            ,lr.material_status_arb
            ,lr.delivery_terms
            ,lr.delivery_terms_arb
            ,lr.request_by
            ,lr.request_by_arb
  ,lr.creation_date
  ,lr.modification_date
  ,p.title AS proj_title
  ,p.project_code
  From material_request lr
  LEFT JOIN (project p)   ON (p.project_id   = lr.project_id) 
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


app.get('/getTranslationForMaterialRequest', (req, res, next) => {
  db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdMaterialRequest%'`,
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

app.post('/getMaterialRequestById', (req, res, next) => {
  db.query(`select
  lr.material_request_id
  ,lr.project_id
  ,lr.material_request_code
  ,lr.material_request_code_arb
  ,lr.material_request_date
  ,lr.material_request_date_arb
  ,lr.request_date
  ,lr.request_date_arb
  ,lr.site_reference
  ,lr.site_reference_arb
  ,lr.approved_by
  ,lr.approved_by_arb
            ,lr.approved_date
            ,lr.approved_date_arb
            ,lr.shipping_method
            ,lr.shipping_method_arb
            ,lr.payment_terms
            ,lr.payment_terms_arb
            ,lr.material_status
            ,lr.material_status_arb
            ,lr.delivery_terms
            ,lr.delivery_terms_arb
            ,lr.request_by
            ,lr.request_by_arb
  ,lr.creation_date
  ,lr.modification_date
  ,p.title AS proj_title
  ,p.project_code
  From material_request lr
  LEFT JOIN (project p)   ON (p.project_id   = lr.project_id) 
            where lr.material_request_id = ${db.escape(req.body.material_request_id)}`,
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


app.post('/editMaterialRequest', (req, res, next) => {
  db.query(`UPDATE material_request 
            SET 
            project_id=${db.escape(req.body.project_id)}
            ,request_date=${db.escape(req.body.request_date)}
            ,request_date_arb=${db.escape(req.body.request_date_arb)}
            ,request_by=${db.escape(req.body.request_by)}
            ,request_by_arb=${db.escape(req.body.request_by_arb)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,material_request_date=${db.escape(req.body.material_request_date)}
            ,material_status=${db.escape(req.body.material_status)}
            ,material_status_arb=${db.escape(req.body.material_status_arb)}
            ,site_reference=${db.escape(req.body.site_reference)}
            ,site_reference_arb=${db.escape(req.body.site_reference_arb)}
            ,delivery_terms=${db.escape(req.body.delivery_terms)}
            ,delivery_terms_arb=${db.escape(req.body.delivery_terms_arb)}
            ,approved_by=${db.escape(req.body.approved_by)}
            ,approved_by_arb=${db.escape(req.body.approved_by_arb)}
            ,approved_date=${db.escape(req.body.approved_date)}
            ,payment_terms=${db.escape(req.body.payment_terms)}
            ,payment_terms_arb=${db.escape(req.body.payment_terms_arb)}
            ,shipping_method=${db.escape(req.body.shipping_method)}
            ,shipping_method_arb=${db.escape(req.body.shipping_method_arb)}
            WHERE material_request_id = ${db.escape(req.body.material_request_id)}`,
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

app.post('/insertMaterialRequest', (req, res, next) => {

  let data = {
    material_request_id:req.body.material_request_id	
   , project_id: req.body.project_id
   , material_request_code:req.body.material_request_code	
   , creation_date: req.body.creation_date
   , modification_date: req.body.modification_date
   , request_date: req.body.request_date
   , created_by: req.body.created_by
  
  };
  let sql = "INSERT INTO material_request SET ?";
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

app.post('/deleteMaterialRequest', (req, res, next) => {

  let data = {material_request_id: req.body.material_request_id};
  let sql = "DELETE FROM material_request WHERE ?";
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

app.post('/insertQuoteItems', (req, res, next) => {

  let data = {
    product_id:req.body.product_id
    , amount: req.body.amount
    , type: req.body.type
    , status: req.body.status
    , material_request_id: req.body.material_request_id
    , product_id: req.body.product_id
    , supplier_id:req.body.supplier_id
    , created_by: req.body.created_by
    , quantity: req.body.quantity
    , created_by: req.body.created_by
    , creation_date: req.body.creation_date
    , unit: req.body.unit
    , remarks: req.body.remarks
    
    , brand: req.body.brand
    , unit_price: req.body.unit_price
  
 };
  let sql = "INSERT INTO material_request_item SET ?";
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

app.post('/getMRLineItemsById', (req, res, next) => {
  db.query(`select mri.*
  ,p.title AS product_name
  ,sr.company_name AS supplier_name
            From material_request_item mri
            LEFT JOIN (product p)   ON (p.product_id   = mri.product_id) 
            LEFT JOIN (supplier sr)   ON (sr.supplier_id   = mri.supplier_id) 
            Where mri.material_request_id =${db.escape(req.body.material_request_id)}`,
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

app.post('/editMaterialRequestItem', (req, res, next) => {
  db.query(`UPDATE material_request_item 
            SET brand =${db.escape(req.body.brand)}
            ,quantity=${db.escape(req.body.quantity)}
            ,unit=${db.escape(req.body.unit)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,modified_by=${db.escape(req.body.modified_by)}
            ,unit_price=${db.escape(req.body.unit_price)}
            ,amount=${db.escape(req.body.amount)}
            WHERE material_request_item_id = ${db.escape(req.body.material_request_item_id)}`,
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
  
app.post('/deleteMaterialRequestItem', (req, res, next) => {

  let data = {material_request_item_id: req.body.material_request_item_id};
  let sql = "DELETE FROM material_request_item WHERE ?";
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

app.post("/getMaterialrequestItemsById", (req, res, next) => {
  db.query(
    `SELECT 
    m.material_request_item_id ,
    m.supplier_id,
    m.product_id,
    m.material_request_id,
    m.type,
    m.brand,
    m.unit,
    m.quantity,
    m.unit_price,
    m.amount,
    m.status,
    m.remarks,
    m.creation_date,
    m.modification_date,
    m.created_by,
    m.modified_by,
    p.title,
    p.description,
    s.company_name
    FROM material_request_item m
    LEFT JOIN product p ON p.product_id=m.product_id
    LEFT JOIN supplier s ON s.supplier_id=m.supplier_id
    WHERE m.material_request_id =${db.escape(req.body.material_request_id)}`,
    (err, result) => {
      if (result.length == 0) {
        return res.status(400).send({
          msg: "No result found",
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

app.post("/getMaterialtequestDataById", (req, res, next) => {
  db.query(
    `SELECT
    m.material_request_id
   ,m.project_id
   ,m.material_request_date
   ,m.material_request_date_arb
   ,m.material_request_code
   ,m.material_request_code_arb
   ,c.company_name
   ,c.company_name_arb
   ,c.address_flat
   ,c.address_street
   ,c.address_town
   ,c.address_country
   ,c.address_po_code
   ,c.phone
   ,cont.first_name
   ,cont.first_name_arb
   FROM material_request m
   LEFT JOIN (project p) ON (p.project_id=m.project_id)
   LEFT JOIN (company c) ON (c.company_id=p.company_id)
   LEFT JOIN (contact cont) ON (cont.contact_id = p.contact_id) 
   WHERE m.material_request_id =${db.escape(req.body.material_request_id)}  ORDER BY m.material_request_id DESC`,
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



app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;