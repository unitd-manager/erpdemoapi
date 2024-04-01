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

// app.get('/getCompany', (req, res, next) => {
//   db.query("SELECT company_id, company_name,company_name_arb FROM company",
//     (err, result) => {
//       if (err) {
//         console.log("error: ", err);
//         return res.status(500).send({
//           msg: 'Database error'
//         });
//        // result(err, null);
//        // return;
//       }
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
// app.get('/company/getNewCompanies', async (req, res) => {
//   const { selectedMonth } = req.query;

//   if (!selectedMonth) {
//     return res.status(400).json({ msg: 'Month is required' });
//   }

//   try {
//     const startDate = new Date(new Date().getFullYear(), selectedMonth - 1, 1);
//     const endDate = new Date(new Date().getFullYear(), selectedMonth, 0);

//     const newCompanies = await Company.find({
//       creation_date: { $gte: startDate, $lte: endDate }
//     });

//     const newCompaniesCount = newCompanies.length;

//     return res.status(200).json({ count: newCompaniesCount, msg: 'Success' });
//   } catch (error) {
//     console.error('Error fetching new companies count:', error);
//     return res.status(500).json({ msg: 'Database error' });
//   }
// });
app.get('/getNewCompanies', (req, res, next) => {
  db.query(
    `SELECT 
    c.creation_date,
    COUNT(c.creation_date) AS newCompanies,
   c.company_id,
   c.company_name
       FROM company c
      WHERE c.creation_date!='' `,
               (err, result) => {
      if (err) {
        console.log("Error fetching data:", err);
        res.status(500).send({ msg: 'Error fetching employee data' });
        return;
      }
      if (result.length > 0) {
        res.status(200).send({
          data: result,
          msg: 'Success'
        });
      } else {
        res.status(404).send({ msg: 'No employee data found' });
      }
    }
  );
});
// app.get('/getNewCompanies', (req, res, next) => {
//   const { selectedMonth } = req.query;

//   if (!selectedMonth) {
//     return res.status(400).send({
//       msg: 'Missing selectedMonth parameter',
//     });
//   }

//   db.query(
//     `SELECT COUNT(*) AS newCompanies 
//      FROM company 
//      WHERE MONTH(creation_date) = '' `,
//     [selectedMonth],
//     (err, result) => {
//       if (err) {
//         console.log('Error:', err);
//         return res.status(500).send({
//           msg: 'Database error',
//         });
//       }

//       const newCompaniesCount = result[0]?.newCompanies || 0;
//       return res.status(200).send({
//         data: { newCompanies: newCompaniesCount },
//         msg: 'Success',
//       });
//     }
//   );
// });

// app.post('/insertCompany', (req, res, next) => {

//   let data = {company_name: req.body.company_name,
//   email: req.body.email, 
//   address_street: req.body.address_street, 
//   address_town: req.body.address_town, 
//   address_state: req.body.address_state,
//     address_country: req.body.address_country,
//      address_flat: req.body.address_flat,
//     address_po_code: req.body.address_po_code,
//     phone: req.body.phone,
//     fax: req.body.fax, 
//     website: req.body.website,
//     supplier_type: req.body.supplier_type, 
//     industry: req.body.industry, 
//     company_size: req.body.company_size,
//     latitude: req.body.latitude,
//     longitude: req.body.longitude,
//     created_by: req.body.created_by,
//     creation_date: req.body.creation_date,
//     source: req.body.source};
//   let sql = "INSERT INTO company SET ?";
//   let query = db.query(sql, data,(err, result) => {
//     if (err) {
//       console.log("error: ", err);
//       result(err, null);
//       return;
//     } else {
//           return res.status(200).send({
//             data: result,
//             msg:'New Company has been created successfully'
//           });
//     }
//   });
// });
// app.post('/getContactByCompanyId', (req, res, next) => {
//   db.query(`SELECT * FROM contact WHERE company_id =${db.escape(req.body.company_id)}`,
//     (err, result) => {
     
//       if (err) {
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

app.get('/secret-route', userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send('This is the secret content. Only logged in users can see that!');
});

module.exports = app;