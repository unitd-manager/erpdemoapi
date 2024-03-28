const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const db = require('../config/Database.js')
const userMiddleware = require('../middleware/UserModel.js')
var md5 = require('md5')
const fileUpload = require('express-fileupload')
const _ = require('lodash')
const mime = require('mime-types')
var bodyParser = require('body-parser')
var cors = require('cors')
var app = express()
app.use(cors())

app.use(
  fileUpload({
    createParentPath: true,
  }),
)

app.get('/getSubCategory', (req, res, next) => {
  db.query(
    `SELECT sc.sub_category_id 
  ,sc.sub_category_title 
  ,sc.sub_category_title_arb
  ,sc.sort_order 
  ,sc.sub_category_type
  ,sc.sub_category_type_arb
  ,sc.chi_title 
  ,sc.display_type
  ,sc.published
  ,sc.published_arb
  ,sc.show_navigation_panel 
  ,sc.external_link 
  ,sc.external_link_arb
  ,sc.template 
  ,sc.creation_date 
  ,sc.created_by
  ,sc.created_by_arb
  ,sc.modification_date 
  ,sc.modified_by
  ,sc.modified_by_arb
  ,sc.published_test
  ,sc.internal_link 
  ,sc.meta_title
  ,sc.meta_title_arb
  ,sc.meta_description
  ,sc.meta_description_arb
  ,sc.meta_keyword
  ,sc.meta_keyword_arb 
  ,sc.seo_title
  ,sc.seo_title_arb
  ,s.section_title
  ,s.section_title_arb
  ,sc.show_in_nav
  ,sc.category_id
  ,ca.category_title 
  ,ca.category_title_arb 
  FROM sub_category sc 
  LEFT JOIN category ca ON sc.category_id=ca.category_id 
  LEFT JOIN section s  ON ca.section_id=s.section_id 
  WHERE sc.sub_category_id !=''
  ORDER BY sc.sort_order ASC`,
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

app.post('/getSubCategoryById', (req, res, next) => {
  db.query(
    `SELECT sc.sub_category_id 
    ,sc.sub_category_title 
    ,sc.sub_category_title_arb
    ,sc.sort_order 
    ,sc.sub_category_type
    ,sc.sub_category_type_arb
    ,sc.chi_title 
    ,sc.display_type
    ,sc.published
    ,sc.published_arb
    ,sc.show_navigation_panel 
    ,sc.external_link 
    ,sc.external_link_arb
    ,sc.template 
    ,sc.creation_date 
    ,sc.created_by
    ,sc.created_by_arb
    ,sc.modification_date 
    ,sc.modified_by
    ,sc.modified_by_arb
    ,sc.published_test
    ,sc.internal_link 
    ,sc.meta_title
    ,sc.meta_title_arb
    ,sc.meta_description
    ,sc.meta_description_arb
    ,sc.meta_keyword
    ,sc.meta_keyword_arb 
    ,sc.seo_title
    ,sc.seo_title_arb
    ,s.section_title
    ,s.section_title_arb
    ,sc.show_in_nav
    ,sc.category_id
    ,ca.category_title 
    ,ca.category_title_arb  
    FROM sub_category sc 
    LEFT JOIN category ca ON sc.category_id=ca.category_id 
    LEFT JOIN section s  ON ca.section_id=s.section_id
  WHERE sub_category_id = ${db.escape(req.body.sub_category_id)}`,
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
          msg: 'SubCategory has been get successfully',
        })
      }
    },
  )
})

app.get('/getCategory', (req, res, next) => {
  db.query(
    `SELECT
  ca.category_id
  ,ca.category_title
  ,ca.category_title_arb
  ,s.section_title
  ,s.section_title_arb
  ,CONCAT(ca.category_title, '/', s.section_title ) AS concattitle
  ,CONCAT(ca.category_title_arb, '/', s.section_title_arb) AS concattitle_arb
  From category ca
  INNER JOIN section s ON (ca.section_id = s.section_id)
  WHERE ca.category_id  !=''`,
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
          msg: 'Category has been get successfully',
        })
      }
    },
  )
})

app.post('/updateSortOrder', (req, res, next) => {
  db.query(
    `UPDATE sub_category 
            SET 
            sort_order=${db.escape(req.body.sort_order)}
            WHERE sub_category_id= ${db.escape(req.body.sub_category_id)}`,
    (err, result) => {
      if (err) {
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

app.post('/insertSubCategory', (req, res, next) => {
  let data = {
    sub_category_id: req.body.sub_category_id,
    sub_category_title: req.body.sub_category_title,
    sub_category_title_arb: req.body.sub_category_title_arb,
    sort_order: req.body.sort_order,
    sub_category_type: 'Content',
    sub_category_type_arb: 'Content',
    chi_title: req.body.chi_title,
    display_type: req.body.display_type,
    published: '0',
    published_arb: '0',
    show_navigation_panel: req.body.show_navigation_panel,
    category_id: req.body.category_id,
    external_link: req.body.external_link,
    external_link_arb: req.body.external_link_arb,
    template: req.body.template,
    creation_date: req.body.creation_date,
    created_by: req.body.created_by,
    modification_date: null,
    published_test: req.body.published_test,
    internal_link: req.body.internal_link,
    internal_link_arb: req.body.internal_link_arb,
    meta_title: req.body.meta_title,
    meta_title_arb: req.body.meta_title_arb,
    meta_keyword: req.body.meta_keyword,
    meta_keyword_arb: req.body.meta_keyword_arb,
    meta_description: req.body.meta_description,
    meta_description_arb: req.body.meta_description_arb,
    seo_title: req.body.sub_category_title,
    seo_title_arb: req.body.sub_category_title_arb,
  }
  let sql = 'INSERT INTO sub_category SET ?'
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
        msg: 'New Subcategory has been created successfully',
      })
    }
  })
})

// app.post('/insertsubcategory', (req, res, next) => {

//   let data = {sub_category_id	:req.body.sub_category_id
//    , title	:req.body.title
//    , seo_title	: req.body.title
//  };
//   let sql = "INSERT INTO sub_category SET ?";
//   let query = db.query(sql, data,(err, result) => {
//     if (err) {
//       console.log("error: ", err);
//       return;
//     } else {
//           return res.status(200).send({
//             data: result,
//             msg:'Success'
//           });
//     }
//   });
// });

// app.post('/insertsubcategory', (req, res, next) => {

//   let data = {
//     title	: req.body.title
//    , seo_title: req.body.title};
//   let sql = "INSERT INTO sub_category SET ?";
//   let query = db.query(sql, data,(err, result) => {
//     if (err) {
//       console.log("error: ", err);
//       return;
//     } else {
//           return res.status(200).send({
//             data: result,
//             msg:'New Subcategory has been created successfully'
//           });
//     }
//   });
// });

app.post('/insertCategory', (req, res, next) => {
  let data = {
    category_id: req.body.category_id,
    meta_title: req.body.meta_title,
    meta_keyword: req.body.meta_keyword,
    category_title: req.body.category_title,
    meta_description: req.body.meta_description,
  }
  let sql = 'INSERT INTO category SET ?'
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
        msg: 'New category has been created successfully',
      })
    }
  })
})

app.get('/getSubCategoryTypeFromValueList', (req, res, next) => {
  db.query(
    `SELECT 
  value
  ,valuelist_id
  FROM valuelist WHERE key_text='Sub Category Type'`,
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


app.post('/editSubCategory', (req, res, next) => {
  db.query(
    `UPDATE sub_category 
            SET 
            sub_category_title=${db.escape(req.body.sub_category_title)}
            ,sub_category_title_arb=${db.escape(req.body.sub_category_title_arb)}
            ,category_id=${db.escape(req.body.category_id)}
            ,sort_order=${db.escape(req.body.sort_order)}
            ,sub_category_type=${db.escape(req.body.sub_category_type)}
            ,sub_category_type_arb=${db.escape(req.body.sub_category_type_arb)}
            ,chi_title=${db.escape(req.body.chi_title)}
            ,display_type=${db.escape(req.body.display_type)}
            ,published =${db.escape(req.body.published)}
            ,published_arb =${db.escape(req.body.published_arb)}
            ,show_navigation_panel=${db.escape(req.body.show_navigation_panel)}
            ,external_link=${db.escape(req.body.external_link)}
            ,external_link_arb=${db.escape(req.body.external_link_arb)}
            ,template=${db.escape(req.body.template)}
            ,creation_date =${db.escape(req.body.creation_date)}
            ,created_by =${db.escape(req.body.created_by)}
            ,created_by_arb =${db.escape(req.body.created_by_arb)}
            ,modification_date =${db.escape(req.body.modification_date)}
            ,modified_by =${db.escape(req.body.modified_by)}
            ,modified_by_arb =${db.escape(req.body.modified_by_arb)}
            ,published_test=${db.escape(req.body.published_test)}
            ,internal_link  =${db.escape(req.body.internal_link)}
            ,internal_link_arb  =${db.escape(req.body.internal_link_arb)}
            ,show_in_nav=${db.escape(req.body.show_in_nav)}
            ,meta_title=${db.escape(req.body.meta_title)}
            ,meta_title_arb=${db.escape(req.body.meta_title_arb)}
            ,meta_description=${db.escape(req.body.meta_description)}
            ,meta_description_arb=${db.escape(req.body.meta_description_arb)}
            ,meta_keyword=${db.escape(req.body.meta_keyword)}
            ,meta_keyword_arb=${db.escape(req.body.meta_keyword_arb)}
            ,seo_title=${db.escape(req.body.seo_title)}
            ,seo_title_arb=${db.escape(req.body.seo_title_arb)}
            WHERE sub_category_id = ${db.escape(req.body.sub_category_id)}`,
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

app.post('/editCategory', (req, res, next) => {
  db.query(
    `UPDATE category
            SET 
            category_title=${db.escape(req.body.category_title)} 
            category_title_arb=${db.escape(req.body.category_title_arb)} 
            WHERE category_id = ${db.escape(req.body.category_id)}`,
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
          msg: 'SubCategory has been Edited successfully',
        })
      }
    },
  )
})

app.post('/deleteSubCategory', (req, res, next) => {
  let data = { sub_category_id: req.body.sub_category_id }
  let sql = 'DELETE FROM sub_category WHERE ?'
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
        msg: 'SubCategory has been removed successfully',
      })
    }
  })
})

app.get('/getTranslationForSubCategory', (req, res, next) => {
  db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdSubCategory%'`,
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

module.exports = app
