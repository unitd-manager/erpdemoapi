const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const db = require("../config/Database.js");
const userMiddleware = require("../middleware/UserModel.js");
var md5 = require("md5");
const fileUpload = require("express-fileupload");
const _ = require("lodash");
const mime = require("mime-types");
var bodyParser = require("body-parser");
var cors = require("cors");
var app = express();
app.use(cors());

app.use(
  fileUpload({
    createParentPath: true,
  })
);
app.get("/getClients", (req, res, next) => {
  db.query(
    `SELECT c.company_name
  ,c.company_name_arb
  ,c.company_id
  ,c.phone
  ,c.phone_arb
  ,c.status
  ,c.website
  ,c.website_arb
  ,c.email
  ,c.email_arb
  ,c.status
  ,c.fax
  ,c.fax_arb
  ,c.flag
  ,c.address_flat
  ,c.address_flat_arb
  ,c.address_street
  ,c.address_street_arb
  ,c.address_country
  ,c.address_po_code
  ,c.address_po_code_arb
  ,c.retention
  ,c.creation_date
  ,c.creation_date
  From company c 
  Where c.company_id !=''
  ORDER BY c.company_id DESC`,
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

app.post("/getClientsById", (req, res, next) => {
  db.query(
    `Select c.company_name
  ,c.company_name_arb
  ,c.company_id
  ,c.phone
  ,c.phone_arb
  ,c.website
  ,c.website_arb
  ,c.email
  ,c.email_arb
  ,c.status
  ,c.fax
  ,c.fax_arb
  ,c.address_flat
  ,c.address_flat_arb
  ,c.address_street
  ,c.address_street_arb
  ,c.address_country
  ,c.address_po_code
  ,c.address_po_code_arb
  ,c.retention
  ,c.creation_date
  ,c.modification_date
  ,c.created_by
  ,c.modified_by
  From company c 
  Where c.company_id =${db.escape(req.body.company_id)}`,
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

app.post("/getContactByCompanyId", (req, res, next) => {
  db.query(
    `SELECT * FROM contact WHERE company_id =${db.escape(req.body.company_id)}`,
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

app.post("/editClients", (req, res, next) => {
  db.query(
    `UPDATE company
            SET company_name=${db.escape(req.body.company_name)}
            ,company_name_arb=${db.escape(req.body.company_name_arb)}
            ,phone=${db.escape(req.body.phone)}
            ,phone_arb=${db.escape(req.body.phone_arb)}
            ,website=${db.escape(req.body.website)}
            ,website_arb=${db.escape(req.body.website_arb)}
            ,email=${db.escape(req.body.email)}
            ,email_arb=${db.escape(req.body.email_arb)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,modified_by=${db.escape(req.body.modified_by)}
            ,fax=${db.escape(req.body.fax)}
            ,fax_arb=${db.escape(req.body.fax_arb)}
            ,address_flat=${db.escape(req.body.address_flat)}
            ,address_flat_arb=${db.escape(req.body.address_flat_arb)}
            ,address_street=${db.escape(req.body.address_street)}
            ,address_street_arb=${db.escape(req.body.address_street_arb)}
            ,address_country=${db.escape(req.body.address_country)}
            ,address_po_code=${db.escape(req.body.address_po_code)}
            ,address_po_code_arb=${db.escape(req.body.address_po_code_arb)}
            ,retention=${db.escape(req.body.retention)}
            WHERE company_id=${db.escape(req.body.company_id)}`,
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

app.post("/insertCompany", (req, res, next) => {
  let data = {
    company_name: req.body.company_name,
    company_name_arb: req.body.company_name_arb,
    email: req.body.email,
    address_street: req.body.address_street,
    address_town: req.body.address_town,
    address_state: req.body.address_state,
    address_country: req.body.address_country,
    address_po_code: req.body.address_po_code,
    phone: req.body.phone,
    fax: req.body.fax,
    notes: req.body.notes,
    creation_date: req.body.creation_date,
    modification_date: req.body.modification_date,
    mobile: req.body.mobile,
    flag: req.body.flag,
    address_flat: req.body.address_flat,
    status: "current",
    website: req.body.website,
    category: req.body.category,
    comment_by: req.body.comment_by,
    company_size: req.body.company_size,
    industry: req.body.industry,
    source: req.body.source,
    group_name: req.body.group_name,
    supplier_type: req.body.supplier_type,
    created_by: req.body.created_by,
    modified_by: req.body.modified_by,
    chi_company_name: req.body.chi_company_name,
    chi_company_address: req.body.chi_company_address,
    company_address_id: req.body.company_address_id,
    contact_person: req.body.contact_person,
    billing_address_flat: req.body.billing_address_flat,
    billing_address_street: req.body.billing_address_street,
    billing_address_country: req.body.billing_address_country,
    billing_address_po_code: req.body.billing_address_po_code,
    client_code: req.body.client_code,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    retention: req.body.retention,
  };
  let sql = "INSERT INTO company SET ?";
  let query = db.query(sql, data, (err, result) => {
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
  });
});

app.post("/deleteCompany", (req, res, next) => {
  let data = { company_id: req.body.company_id };
  let sql = "DELETE FROM company WHERE ?";
  let query = db.query(sql, data, (err, result) => {
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
  });
});

app.get("/getContactLinked", (req, res, next) => {
  db.query(
    `SELECT c.contact_id 
  ,c.first_name
  ,c.first_name_arb
  ,c.email
  ,c.phone
  ,c.mobile
  ,c.position_arb
  ,c.position
  ,c.department 
  ,c.department_arb
  ,c.salutation
 ,c.salutation_arb
  FROM contact c WHERE c.company_id != ''`,
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



app.post("/getContactLinkedByCompanyId", (req, res, next) => {
  db.query(
    `SELECT c.company_id
   ,c.contact_id 
  ,c.first_name
  ,c.first_name_arb
  ,c.email
  ,c.phone
  ,c.phone_direct
  ,c.fax
  ,c.mobile
  ,c.position
  ,c.position_arb
  ,c.department 
  ,c.salutation
  FROM contact c WHERE company_id=${db.escape(req.body.company_id)}`,
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

app.post("/getContactLinkedByContactId", (req, res, next) => {
  db.query(
    `SELECT c.company_id
  ,c.contact_id 
  ,c.first_name
  ,c.first_name_arb
  ,c.email
  ,c.phone
  ,c.phone_direct
  ,c.fax
  ,c.mobile
  ,c.position
  ,c.department 
   ,c.salutation
  FROM contact c WHERE contact_id =  ${db.escape(req.body.contact_id)}`,
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

app.post("/editContact", (req, res, next) => {
  db.query(
    `UPDATE contact
            SET 
            first_name=${db.escape(req.body.first_name)}
            ,first_name_arb=${db.escape(req.body.first_name_arb)}
            ,email=${db.escape(req.body.email)}
            ,phone_direct=${db.escape(req.body.phone_direct)}
            ,phone=${db.escape(req.body.phone)}
            ,mobile=${db.escape(req.body.mobile)}
            ,fax=${db.escape(req.body.fax)}
            ,position=${db.escape(req.body.position)}
            ,position_arb=${db.escape(req.body.position_arb)}
            ,department_arb=${db.escape(req.body.department_arb)}
            ,department=${db.escape(req.body.department)}
            ,salutation=${db.escape(req.body.salutation)}
            WHERE contact_id = ${db.escape(req.body.contact_id)}`,
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

app.post("/getContactLinkedById", (req, res, next) => {
  db.query(
    `SELECT 
   c.contact_id 
  ,c.first_name
  ,c.first_name_arb
  ,c.email
  ,c.phone
  ,c.mobile
  ,c.position
  ,c.department 
  ,c.salutation
  FROM contact c WHERE company_id =  ${db.escape(req.body.company_id)}`,
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
app.get("/getCountry", (req, res, next) => {
  db.query(`SELECT * from geo_country`, (err, result) => {
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
  });
});

app.post("/insertContact", (req, res, next) => {
  let data = {
    company_name: req.body.company_name,
    position: req.body.position,
    position_arb: req.body.position_arb,
    email: req.body.email,
    address_street: req.body.address_street,
    address_area: req.body.address_area,
    address_town: req.body.address_town,
    address_state: req.body.address_state,
    address_country: req.body.address_country,
    address_po_code: req.body.address_po_code,
    phone: req.body.phone,
    fax: req.body.fax,
    sort_order: req.body.sort_order,
    published: req.body.published,
    creation_date: req.body.creation_date,
    modification_date: req.body.modification_date,
    protected: req.body.protected,
    pass_word: req.body.pass_word,
    subscribe: req.body.subscribe,
    first_name: req.body.first_name,
    first_name_arb: req.body.first_name_arb,
    last_name: req.body.last_name,
    mobile: req.body.mobile,
    religion: req.body.religion,
    relationship: req.body.relationship,
    known_as_name: req.body.known_as_name,
    address_street1: req.body.address_street1,
    address_town1: req.body.address_town1,
    address_country1: req.body.address_country1,
    flag: req.body.flag,
    sex: req.body.sex,
    date_of_birth: req.body.date_of_birth,
    random_no: req.body.random_no,
    member_status: req.body.member_status,
    direct_tel: req.body.direct_tel,
    member_type: req.body.member_type,
    address_flat: req.body.address_flat,
    phone_direct: req.body.phone_direct,
    company_id: req.body.company_id,
    salutation: req.body.salutation,
    department: req.body.department,
    created_by: req.body.created_by,
    modified_by: req.body.modified_by,
    published_test: req.body.published_test,
    company_address_street: req.body.company_address_street,
    company_address_flat: req.body.company_address_flat,
    company_address_town: req.body.company_address_town,
    company_address_state: req.body.company_address_state,
    company_address_country: req.body.company_address_country,
    company_address_id: req.body.company_address_id,
    category: req.body.category,
    status: req.body.status,
    user_group_id: req.body.user_group_id,
    name: req.body.name,
    notes: req.body.notes,
    user_name: req.body.user_name,
    address: req.body.address,
    login_count: req.body.login_count,
  };
  let sql = "INSERT INTO contact SET ?";
  let query = db.query(sql, data, (err, result) => {
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
  });
});

app.post("/deleteContact", (req, res, next) => {
  let data = { contact_id: req.body.contact_id };
  let sql = "DELETE FROM contact WHERE ?";
  let query = db.query(sql, data, (err, result) => {
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
  });
});
app.post("/getProjectsByIdCompany", (req, res, next) => {
  db.query(
    `SELECT title
  ,category
  ,company_id
  ,project_value
  ,status
  ,contact_id
  ,start_date
  ,estimated_finish_date
  ,description
  ,project_manager_id
  ,project_id
  ,project_code
  FROM project WHERE company_id=${db.escape(req.body.company_id)}`,
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

app.post("/getTendersByIdcompany", (req, res, next) => {
  db.query(
    `SELECT 
  title
  ,office_ref_no
  ,company_id
  ,contact_id
  ,mode_of_submission
  ,services
  ,site_show_date
  ,site_show_attendee
  ,actual_submission_date
  ,project_end_date
  ,status
  ,email
  ,opportunity_id
  ,opportunity_code
  ,price
  ,itq_ref_no
  FROM opportunity WHERE company_id=${db.escape(req.body.company_id)}`,
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
app.post("/getMainInvoiceByidCompany", (req, res, next) => {
  db.query(
    `SELECT 
  i.invoice_id
  ,i.invoice_code
  ,i.invoice_date
  ,i.invoice_amount
  ,i.invoice_due_date
  ,i.title
  ,i.status
  ,i.invoice_type 
  ,cont.contact_id 
  ,c.company_id 
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
  ,ca.address_flat AS comp_mul_address_flat 
  ,ca.address_street AS comp_mul_address_street 
  ,ca.address_town AS comp_mul_address_town 
  ,ca.address_state AS comp_mul_address_state 
  ,ca.address_country AS comp_mul_address_country 
  ,DATEDIFF(Now() ,i.invoice_due_date) AS age 
  ,(IF(ISNULL(( SELECT FORMAT(SUM(invoice_amount), 0) 
  FROM invoice 
  WHERE project_id = i.project_id AND invoice_code < i.invoice_code AND status != LOWER('Cancelled') )), 0, ( SELECT FORMAT(SUM(invoice_amount), 0) 
  FROM invoice 
  WHERE project_id = i.project_id AND invoice_code < i.invoice_code AND status != LOWER('Cancelled') ))) AS prior_invoice_billed ,b.title AS branch_name 
  FROM invoice i LEFT JOIN (project p) ON (i.project_id = p.project_id) 
  LEFT JOIN (contact cont) ON (p.contact_id = cont.contact_id) 
  LEFT JOIN (company c) ON (p.company_id = c.company_id) 
  LEFT JOIN (company_address ca)ON (cont.company_address_id = ca.company_address_id) 
  LEFT JOIN branch b ON(p.branch_id = b.branch_id)
   WHERE c.company_id = ${db.escape(req.body.company_id)}`,
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

app.post("/update-flag", (req, res, next) => {
  db.query(
    `UPDATE company
            SET flag=${db.escape(req.body.flag)}
            WHERE company_id=${db.escape(req.body.company_id)}`,
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

app.post("/getInvoiceLinkedById", (req, res, next) => {
  db.query(
    `SELECT
  i.invoice_id
 ,i.item_title
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
 ,i.order_id
 ,i.order_item_id
 ,o.order_id
 ,c.company_id
  from invoice_item i
  LEFT JOIN orders o ON o.order_id=i.order_id
  LEFT JOIN company c  ON c.company_id=o.company_id
WHERE c.company_id= ${db.escape(req.body.company_id)}`,
    (err, result) => {
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
    }
  );
});

app.get("/secret-route", userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send("This is the secret content. Only logged in users can see that!");
});

module.exports = app;
