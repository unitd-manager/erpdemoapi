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

app.get("/getCategory", (req, res, next) => {
  db.query(
    `SELECT 
  c.category_title,
  c.category_title_arb,
  c.sort_order,
  c.category_id,
  s.section_title,
  c.published,
  c.published_arb,
  c.section_id,
  c.category_type,
  c.category_type_arb,
  c.internal_link,
  c.internal_link_arb,
  c.meta_title,
  c.meta_title_arb,
  c.meta_description,
  c.meta_description_arb,
  c.meta_keyword,
  c.meta_keyword_arb,
  c.creation_date,
  c.created_by,
  c.created_by_arb,
  c.modification_date,
  c.modified_by,
  c.modified_by_arb
  ,c.seo_title
  ,c.seo_title_arb
  FROM category c LEFT JOIN (section s) ON s.section_id=c.section_id 
  
  ORDER By c.sort_order ASC`,
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

app.post("/getCategoryById", (req, res, next) => {
  db.query(
    `SELECT 
    c.category_title,
    c.category_title_arb,
    c.sort_order,
    c.category_id,
    s.section_title,
    c.published,
    c.published_arb,
    c.section_id,
    c.category_type,
    c.category_type_arb,
    c.internal_link,
    c.internal_link_arb,
    c.meta_title,
    c.meta_title_arb,
    c.meta_description,
    c.meta_description_arb,
    c.meta_keyword,
    c.meta_keyword_arb,
    c.creation_date,
    c.created_by,
    c.created_by_arb,
    c.modification_date,
    c.modified_by,
    c.modified_by_arb
    ,c.seo_title
  ,c.seo_title_arb
  FROM category c LEFT JOIN (section s) ON (s.section_id=c.section_id )
    WHERE c.category_id = ${db.escape(req.body.category_id)}`,
    (err, result) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
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

app.get("/getSectionTitle", (req, res, next) => {
  db.query(`SELECT  section_title,section_id FROM section  `, (err, result) => {
    if (err) {
      console.log("error: ", err);
      return;
    } else {
      return res.status(200).send({
        data: result,
        msg: "Success",
      });
    }
  });
});

app.get("/get-ValueList", (req, res, next) => {
  db.query(
    `SELECT 
      value,valuelist_id
      FROM valuelist WHERE key_text="Category Type"`,
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

// app.get("/get-ValueList", (req, res, next) => {
//   db.query(
//     `SELECT 
//       value,valuelist_id
//       FROM valuelist WHERE key_text="Category Type"`,
//     (err, result) => {
//       if (err) {
//         console.log("error: ", err);
//         return;
//       } else {
//         return res.status(200).send({
//           data: result,
//           msg: "Success",
//         });
//       }
//     }
//   );
// });

app.post("/edit-Category", (req, res, next) => {
  db.query(
    `UPDATE category 
            SET 
            category_title=${db.escape(req.body.category_title)}
            ,category_title_arb=${db.escape(req.body.category_title_arb)}
            ,section_id=${db.escape(req.body.section_id)}
            ,category_type=${db.escape(req.body.category_type)}
            ,category_type_arb=${db.escape(req.body.category_type_arb)}
            ,internal_link=${db.escape(req.body.internal_link)}
            ,internal_link_arb=${db.escape(req.body.internal_link_arb)}
            ,published=${db.escape(req.body.published)}
            ,published_arb=${db.escape(req.body.published_arb)}
            ,meta_title=${db.escape(req.body.meta_title)}
            ,meta_title_arb=${db.escape(req.body.meta_title_arb)}
            ,meta_description=${db.escape(req.body.meta_description)}
            ,meta_description_arb=${db.escape(req.body.meta_description_arb)}
            ,meta_keyword=${db.escape(req.body.meta_keyword)}
            ,meta_keyword_arb=${db.escape(req.body.meta_keyword_arb)}
            ,seo_title=${db.escape(req.body.seo_title)}
            ,seo_title_arb=${db.escape(req.body.seo_title_arb)}
            ,modification_date=${db.escape(req.body.modification_date)}
            ,modified_by=${db.escape(req.body.modified_by)}
            ,modified_by_arb=${db.escape(req.body.modified_by_arb)}
            ,section_id=${db.escape(req.body.section_id)}
            WHERE category_id= ${db.escape(req.body.category_id)}
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


app.post("/insertCategory", (req, res, next) => {
  let data = {
    category_id: req.body.category_id,
    section_id: req.body.section_id,
    category_title: req.body.category_title,
    category_title_arb: req.body.category_title_arb,
    category_type: "Content",
    category_type_arb: "Content",
    internal_link: req.body.internal_link,
    published: "0",
    published_arb: "0",
    meta_title: req.body.meta_title,
    meta_description: req.body.meta_description,
    meta_keyword: req.body.meta_keyword,
    creation_date: req.body.creation_date,
    created_by: req.body.created_by,
    created_by_arb: req.body.created_by_arb,
    seo_title: req.body.category_title,
    seo_title_arb: req.body.category_title_arb,
  };
  let sql = "INSERT INTO category SET ?";
  let query = db.query(sql, data, (err, result) => {
    if (err) {
      return res.status(400).send({
        data: err
      });
    } else {
      return res.status(200).send({
        data: result,
        msg: "Success",
      });
    }
  });
});
app.post("/updateSortOrder", (req, res, next) => {
  db.query(
    `UPDATE category 
              SET 
              sort_order=${db.escape(req.body.sort_order)}
              WHERE category_id= ${db.escape(req.body.category_id)}
              `,
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

// app.post("/insertCategory", (req, res, next) => {
//   let data = {
//     category_id: req.body.category_id,
//     section_id: req.body.section_id,
//     category_title: req.body.category_title,
//     category_type: "Content",
//     seo_title: req.body.category_title,
//     internal_link: req.body.internal_link,
//     published:'0',
//     meta_title: req.body.meta_title,
//     meta_description: req.body.meta_description,
//     meta_keyword: req.body.meta_keyword,
//     creation_date: req.body.creation_date,
//     modification_date: null,
//   };
//   let sql = "INSERT INTO category SET ?";
//   let query = db.query(sql, data, (err, result) => {
//     if (err) {
//       console.log("error: ", err);
//       return;
//     } else {
//       return res.status(200).send({
//         data: result,
//         msg: "Success",
//       });
//     }
//   });
// });

app.post("/deleteCategory", (req, res, next) => {
  let data = { category_id: req.body.category_id };
  let sql = "DELETE FROM category WHERE ?";
  let query = db.query(sql, data, (err, result) => {
    if (err) {
      console.log("error: ", err);
      return;
    } else {
      return res.status(200).send({
        data: result,
        msg: "Success",
      });
    }
  });
});
app.post("/getCategoryTitle", (req, res, next) => {
  db.query(
    `SELECT
  category_title,category_id,section_id
   From category 
   WHERE category_id =  ${db.escape(req.body.category_id)}`,
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

app.get('/getTranslationForCategory', (req, res, next) => {
  db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdCategory%'`,
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

app.get('/getCategoryTypeFromValueList', (req, res, next) => {
  db.query(
    `SELECT 
  value
  ,valuelist_id
  FROM valuelist WHERE key_text='Category Type'`,
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
    },
  )
})




app.get("/secret-route", userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send("This is the secret content. Only logged in users can see that!");
});

module.exports = app;
