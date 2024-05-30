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

app.post("/getgoodsdeliveryById", (req, res, next) => {
  db.query(
    ` SELECT 
    gd.project_goods_delivery_id
    ,gd.delivery_no
    ,gd.project_goods_delivery_date
      ,gd.project_order_id
      ,gd.project_goods_delivery_code
    ,o.order_code
    ,gd.project_goods_ref_no
    ,c.company_id
    ,c.company_name
    ,c.company_name_arb
    ,c.address_flat
    ,c.address_flat_arb
    ,c.address_street
    ,c.address_street_arb
    ,c.address_town
    ,c.address_country
     ,c.address_po_code
    ,c.phone
    ,cont.first_name
    ,cont.first_name_arb
    ,gd.project_goods_delivery_status
    ,gd.project_goods_delivery_status_arb
    ,gd.po_no
    ,opt.office_ref_no
    ,gd.sales_man
    ,gd.sales_man_arb
    ,gd.department
    ,gd.department_arb
    ,gd.creation_date
    ,gd.modification_date
    ,gd.created_by
    ,gd.modified_by
    ,gi.project_goods_delivery_item_id  
    ,gi.item_title
    ,gi.description  
       FROM project_goods_delivery gd  
       LEFT JOIN (project_orders o) ON (o.project_order_id=gd.project_order_id)  
       LEFT JOIN project_quote q ON (o.project_quote_id = q.project_quote_id )
       LEFT JOIN project_enquiry opt ON (opt.project_enquiry_id = q.project_enquiry_id)    
       LEFT JOIN (company c) ON (c.company_id=opt.company_id)    
       LEFT JOIN (contact cont) ON (q.contact_id = cont.contact_id)   
       LEFT JOIN (project_goods_delivery_item gi) ON (gi.project_goods_delivery_id = gd.project_goods_delivery_id)  
       WHERE gd.project_goods_delivery_id = ${db.escape(req.body.project_goods_delivery_id)}`,
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
app.get('/getTranslationforTradingGoods', (req, res, next) => {
  db.query(`SELECT t.value,t.key_text,t.arb_value FROM translation t WHERE key_text LIKE 'mdTradingGoods%'`,
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

app.post('/deleteGoodsDeliveryItems', (req, res, next) => {

  let data = {project_goods_delivery_id: req.body.project_goods_delivery_id};
  let sql = "DELETE FROM project_goods_delivery_item WHERE ?";
  let query = db.query(sql, data,(err, result) => {
    if (err) {
     return res.status(400).send({
              data: err,
              msg:'failed'
            });
    } else {
          return res.status(200).send({
            data: result,
            msg:'Success'
          });
    }
  });
});

app.get('/checkDeliveryItems', (req, res, next) => {
  db.query(
    `SELECT project_order_item_id FROM project_goods_delivery_item`,
    (err, result) => {
      if (err) {
        return res.status(400).send({
          data: err,
          msg: 'Failed'
        });
      } else {
        const quoteItemsIds = result.map((row) => row.order_item_id);
        return res.status(200).send({
          data: quoteItemsIds,
          msg: 'Success'
        });
      }
    }
  );
});

app.get("/getOrderCode", (req, res, next) => {
  db.query(`SELECT 
  o.order_code,
  o.project_order_id ,
  c.company_name,
  c.company_id
  from project_orders o   
  LEFT JOIN (project_goods_delivery gd) ON o.project_order_id = gd.project_order_id
  left join (company c) ON o.company_id = c.company_id
  WHERE
  o.project_order_id != '' 
  AND gd.project_order_id IS NULL`, (err, result) => {
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
  });
});

app.get("/getgoodsdelivery", (req, res, next) => {
  db.query(
    `SELECT 
    gd.project_goods_delivery_id
    ,gd.delivery_no
    ,gd.project_goods_delivery_date
    ,gd.project_goods_delivery_code
    ,gd.project_order_id
    ,o.order_code
    ,gd.project_goods_ref_no
    ,c.company_id
    ,c.company_name
    ,c.company_name_arb
    ,opt.office_ref_no
    ,gd.project_goods_delivery_status
    ,gd.project_goods_delivery_status_arb
    ,gd.po_no 
    ,gd.sales_man
    ,gd.sales_man_arb
    ,gd.department
    ,gd.creation_date
    ,gd.modification_date
    ,gd.created_by
    ,gd.modified_by    
       FROM project_goods_delivery gd  
       LEFT JOIN (project_orders o) ON (o.project_order_id=gd.project_order_id)
       LEFT JOIN project_quote q ON (o.project_quote_id = q.project_quote_id )
       LEFT JOIN project_enquiry opt ON (opt.project_enquiry_id = q.project_enquiry_id)    
       LEFT JOIN (company c) ON (c.company_id=opt.company_id)  
       WHERE gd.project_goods_delivery_id != ''
       ORDER BY project_goods_delivery_id DESC`,
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


app.post("/getgoodsdeliveryitemById", (req, res, next) => {
  db.query(
    ` SELECT gi.*
    
       FROM project_goods_delivery_item gi 
       WHERE gi.project_goods_delivery_id =${db.escape(req.body.project_goods_delivery_id)}
    `,
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

app.post("/getOrdersById", (req, res, next) => {
  db.query(
    ` SELECT o.project_order_id
    ,oi.project_order_item_id
    ,oi.description
    ,oi.item_title
    ,oi.item_title_arb
    ,oi.qty
    ,oi.unit_price
    ,oi.cost_price
    ,oi.unit
    ,oi.unit_arb
    ,oi.project_quote_id
    ,oi.quote_items_id
       FROM project_order_item oi 
       LEFT JOIN (project_orders o) ON o.project_order_id=oi.project_order_id 
       WHERE o.project_order_id =${db.escape(req.body.project_order_id)}`,
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

app.get("/getOrderById", (req, res, next) => {
  db.query(
    ` SELECT o.order_id
    ,oi.order_item_id
    ,oi.description
    ,oi.item_title
    ,oi.qty
    ,oi.unit_price
    ,oi.cost_price
    ,oi.unit
    ,oi.quote_id
    ,oi.quote_items_id
     
       FROM order_item oi 
       LEFT JOIN (orders o) ON o.order_id=oi.order_id 
       WHERE o.order_id !=''
    `,
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

app.post("/getOrdersitemById", (req, res, next) => {
  db.query(
    ` SELECT o.order_id
    ,oi.order_item_id
    ,oi.description
    ,oi.item_title
    ,oi.qty
    ,oi.unit_price
    ,oi.cost_price
    ,oi.unit
    ,oi.quote_id
    ,oi.quote_items_id
    
       FROM order_item oi 
       LEFT JOIN (orders o) ON o.order_id=oi.order_id 
       
       WHERE oi.order_item_id =${db.escape(req.body.order_item_id)}
    `,
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
app.post("/edit-goodsdelivery", (req, res, next) => {
  db.query(
    `UPDATE project_goods_delivery  
              SET 
               delivery_no=${db.escape(req.body.delivery_no)}
              ,project_goods_delivery_date=${db.escape(req.body.project_goods_delivery_date)}
              ,project_order_id=${db.escape(req.body.project_order_id)}
              ,project_goods_ref_no=${db.escape(req.body.project_goods_ref_no)}
              ,company_id=${db.escape(req.body.company_id)}
              ,contact_id=${db.escape(req.body.contact_id)}
              ,project_goods_delivery_status=${db.escape(req.body.project_goods_delivery_status)}
              ,project_goods_delivery_status_arb=${db.escape(req.body.project_goods_delivery_status_arb)}
              ,po_no=${db.escape(req.body.po_no)}
              ,sales_man=${db.escape(req.body.sales_man)}
              ,sales_man_arb=${db.escape(req.body.sales_man_arb)}
              ,department=${db.escape(req.body.department)}
              ,department_arb=${db.escape(req.body.department_arb)}
              ,modification_date=${db.escape(req.body.modification_date)}
              ,created_by=${db.escape(req.body.created_by)}
              ,modified_by=${db.escape(req.body.modified_by)}              
              WHERE project_goods_delivery_id =  ${db.escape(req.body.project_goods_delivery_id)}`,
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
app.post("/getQuoteLineItemsByIdss", (req, res, next) => {
  db.query(
    `SELECT
              qt.* 
              ,qt.project_goods_delivery_id
              ,qt.project_goods_delivery_item_id
              ,qt.creation_date
              ,qt.modification_date
              ,qt.created_by
              ,qt.modified_by
              FROM project_goods_delivery_item qt 
              WHERE qt.project_goods_delivery_id =  ${db.escape(req.body.project_goods_delivery_id)}`,
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

app.post("/edit-goodsdeliveryitem", (req, res, next) => {
  db.query(
    `UPDATE project_goods_delivery_item  
              SET 
               project_goods_delivery_id=${db.escape(req.body.project_goods_delivery_id)}
              ,quantity =${db.escape(req.body.quantity)}
              ,delivery_qty=${db.escape(req.body.delivery_qty)}  
              WHERE project_goods_delivery_item_id =  ${db.escape(req.body.project_goods_delivery_item_id)}`,
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

app.post("/insertgoodsdeliveryitem", (req, res, next) => {
  let data = {
    item_title: req.body.item_title,
    unit: req.body.unit,
    unit_price: req.body.unit_price,
    amount: req.body.amount,
    quantity: req.body.quantity,
    description: req.body.description,
    project_goods_delivery_id: req.body.project_goods_delivery_id,
    project_order_id: req.body.project_order_id,
    project_order_item_id: req.body.project_order_item_id,
  };
  let sql = "INSERT INTO project_goods_delivery_item SET ?";
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
app.post("/insertgoodsdelivery", (req, res, next) => {
  let data = {
    project_goods_delivery_id: req.body.project_goods_delivery_id,
    delivery_no: req.body.delivery_no,
    project_goods_delivery_date: req.body.project_goods_delivery_date,
    project_goods_delivery_code: req.body.project_goods_delivery_code,
    project_order_id: req.body.project_order_id,
    goods_ref_no: req.body.goods_ref_no,
    company_id: req.body.company_id,
    project_goods_delivery_status: req.body.project_goods_delivery_status,
    po_no: req.body.po_no,
    sales_man: req.body.sales_man,
    contact_id: req.body.contact_id,
    department: req.body.department,
    creation_date: req.body.creation_date,
    modification_date: req.body.modification_date,
    created_by: req.body.created_by,
    modified_by: req.body.modified_by,
  };
  let sql = "INSERT INTO project_goods_delivery SET ?";
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

app.get("/secret-route", userMiddleware.isLoggedIn, (req, res, next) => {
  console.log(req.userData);
  res.send("This is the secret content. Only logged in users can see that!");
});

module.exports = app;
