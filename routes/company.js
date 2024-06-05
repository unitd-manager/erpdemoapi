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

app.get('/getCompany', (req, res, next) => {
  db.query("SELECT company_id, company_name,company_name_arb FROM company",
    (err, result) => {
      if (err) {
        console.log("error: ", err);
        return res.status(500).send({
          msg: 'Database error'
        });
       // result(err, null);
       // return;
      }
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


app.get('/getCompanyDashboard', (req, res, next) => {
  db.query(`
    SELECT 
      DATE_FORMAT(STR_TO_DATE(creation_date, '%d-%m-%Y %h:%i:%s %p'), '%M') AS month,
      COUNT(*) AS companyCount
    FROM 
      company
    WHERE
      YEAR(STR_TO_DATE(creation_date, '%d-%m-%Y %h:%i:%s %p')) = YEAR(CURDATE())
    GROUP BY 
      MONTH(STR_TO_DATE(creation_date, '%d-%m-%Y %h:%i:%s %p'))
    ORDER BY 
      MONTH(STR_TO_DATE(creation_date, '%d-%m-%Y %h:%i:%s %p'))
  `,
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

app.get('/getNewCompanies', (req, res, next) => {
  const { selectedMonth } = req.query;

  if (!selectedMonth) {
    return res.status(400).send({
      msg: 'Missing selectedMonth parameter',
    });
  }

  db.query(
    `SELECT COUNT(*) AS newCompanies 
     FROM company 
     WHERE MONTH(creation_date) = ?`,
    [selectedMonth],
    (err, result) => {
      if (err) {
        console.log('Error:', err);
        return res.status(500).send({
          msg: 'Database error',
        });
      }

      const newCompaniesCount = result[0]?.newCompanies || 0;
      return res.status(200).send({
        data: { newCompanies: newCompaniesCount },
        msg: 'Success',
      });
    }
  );
});

app.post('/insertCompany', (req, res, next) => {

  let data = {company_name: req.body.company_name,
    company_name_arb: req.body.company_name_arb,
  email: req.body.email, 
  email_arb: req.body.email_arb, 
  address_street: req.body.address_street, 
  address_street_arb: req.body.address_street_arb, 
  address_flat_arb: req.body.address_flat_arb, 
  address_flat: req.body.address_flat, 
  address_town: req.body.address_town, 
  address_state: req.body.address_state,
    address_country: req.body.address_country,
    address_country_arb: req.body.address_country_arb,
    address_po_code_arb: req.body.address_po_code_arb,
    address_po_code: req.body.address_po_code,
    phone: req.body.phone,
    phone_arb: req.body.phone_arb,
    fax: req.body.fax, 
    fax_arb: req.body.fax_arb, 
    website: req.body.website,
    website: req.body.website,
    supplier_type: req.body.supplier_type, 
    supplier_type_arb: req.body.supplier_type_arb,
    industry: req.body.industry,
    industry_arb: req.body.industry_arb, 
    company_size: req.body.company_size,
    company_size_arb: req.body.company_size_arb,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    created_by: req.body.created_by,
    creation_date: req.body.creation_date,
    source: req.body.source,
    source_arb: req.body.source_arb};
  let sql = "INSERT INTO company SET ?";
  let query = db.query(sql, data,(err, result) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    } else {
          return res.status(200).send({
            data: result,
            msg:'New Company has been created successfully'
          });
    }
  });
});
app.post('/getContactByCompanyId', (req, res, next) => {
  db.query(`SELECT * FROM contact WHERE company_id =${db.escape(req.body.company_id)}`,
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