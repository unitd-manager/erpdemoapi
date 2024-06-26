var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var https = require('https');
const fileUpload = require('express-fileupload');

var privateKey  = fs.readFileSync('sslcrt/server.key', 'utf8');
var certificate = fs.readFileSync('sslcrt/server.crt', 'utf8');
var credentials = {key: privateKey, cert: certificate};

var httpServer = http.createServer(app);
var httpsServer = https.createServer(credentials, app);
let port = 2005;
let secureport = 2006;
httpServer.listen(port, () => {
    console.log(`Server Running in port:${port}`);
  });
httpsServer.listen(secureport, () => {
    console.log(`Server Running in secure port:${secureport}`);
  });
    
    
var bodyParser = require('body-parser');
var cors = require('cors');
const _ = require('lodash');
const mime = require('mime-types')

app.use(bodyParser.json({limit: "50mb"}));
app.use(cors());
app.use(
  bodyParser.urlencoded({
    limit: "50mb", extended: true, parameterLimit:50000
})
);

const project = require('./routes/project.js');
const pos = require('./routes/poss.js');
const projectreceipts = require('./routes/projectreceipts.js');
const Arouter = require('./routes/attachment.js');
const Auth = require('./routes/auth.js');
const tender = require('./routes/tender.js');
const employee = require('./routes/employee.js');
 const company = require('./routes/company.js');
const commonApi = require('./routes/commonApi.js');
const projecttabcostingsummary = require('./routes/projecttabcostingsummary.js');
 const indexRouter = require('./routes/fileUpload.js'); 
const projecttabmaterialusedportal = require('./routes/projecttabmaterialusedportal.js');
const projecttabdeliveryorder = require('./routes/projecttabdeliveryorder.js');
const purchaseorder = require('./routes/purchaseorder.js');
const projecttabfinanaceportal = require('./routes/projecttabfinanaceportal.js');
const projecttabsubconworkorder = require('./routes/projecttabsubconworkorder.js');
const projecttabmaterialstransferredportal = require('./routes/projecttabmaterialstransferredportal.js');
const content = require('./routes/content.js');
const valuelist = require('./routes/valuelist.js');
const staff = require('./routes/staff.js');
const subcategory = require('./routes/subcategory.js');
const category = require('./routes/category.js');
const booking = require('./routes/booking.js');
const loan = require('./routes/loan.js');
const leave = require('./routes/leave.js');
const expensehead = require('./routes/expensehead.js');
const clients = require('./routes/client.js');
const section = require('./routes/section.js');
const accounts = require('./routes/accounts.js');
const accountsMap = require('./routes/accountsMap.js');
const journal = require('./routes/journal.js');
const ledger = require('./routes/ledger.js');
const product = require('./routes/product.js');
const inventory = require('./routes/inventory.js');
 const tradingquote = require('./routes/tradingquote.js');
const projectquote = require('./routes/projectquote.js');
const goodsdelivery = require('./routes/goodsdelivery.js');
//const employeeModule = require('./routes/employeeModule.js');

const payrollmanagement = require('./routes/payrollmanagement.js');
const subcon = require('./routes/subcon.js');
const supplier = require('./routes/supplier.js');
const support = require('./routes/support.js');
const setting = require('./routes/setting.js');
const jobinformation = require('./routes/jobinformation.js');
const finance = require('./routes/finance.js');
const training = require('./routes/training.js');
const projectsalesorder = require('./routes/projectsalesorder.js');
const projectsalesreturn = require('./routes/projectsalesreturn.js');

const geocountry = require('./routes/geocountry.js');
const invoice = require('./routes/invoice.js');
const bank = require('./routes/bank.js');
const note = require('./routes/note.js');
const email = require('./routes/email.js');
const vehicle = require('./routes/vehicle.js');
const attendance = require('./routes/attendance.js');
const usergroup = require('./routes/usergroup.js');
const reports = require('./routes/reports.js');
const claim = require('./routes/claim.js');
const projecttabquote = require('./routes/projecttabquote.js');
const cpfcalculator = require('./routes/cpfcalculator.js');
const timesheet = require('./routes/timesheet.js');
const planning = require('./routes/planning.js');
const quote = require('./routes/quote.js');
const pricelistitem = require('./routes/pricelistitem.js');
const translation = require('./routes/translation.js');
const projecttask = require('./routes/projecttask.js');
const projectenquiry = require('./routes/projectenquiry.js');
const purchaserequest = require('./routes/purchaserequest.js');
const goodsreceipt = require('./routes/goodsreceipt.js');
const labourrequest = require('./routes/labourrequest.js');
const materialrequest = require('./routes/materialrequest.js');
const equipmentrequest = require('./routes/equipmentrequest.js');
const changerequest = require('./routes/changerequest.js');
const document = require('./routes/document.js');
const proposal = require('./routes/proposal.js');
const equipmentissue = require('./routes/equipmentissue.js');
const chartOfAccounts = require('./routes/chartOfAccounts.js');
 const MaterialIssue = require('./routes/MaterialIssue.js');
const purchaseinvoice = require('./routes/purchaseinvoice.js');
const joborder = require('./routes/joborder.js');
const purchasereturn = require('./routes/purchasereturn.js');
const dashboardforpurchaseorder = require('./routes/dashboardforpurchaseorder.js');
const supplierpricelistitem = require('./routes/supplierpricelistitem.js');
const uom = require('./routes/uom.js');
const enquiry = require('./routes/enquiry.js');
const projectsalesinvoice = require('./routes/projectsalesinvoice.js');
const milestone = require("./routes/milestone.js");
const creditnote = require('./routes/creditnote.js');
const debitnote = require('./routes/debitnote.js');
const stats = require("./routes/stats.js");
const projectgoodsdelivery = require('./routes/projectgoodsdelivery.js');

app.use('/projectgoodsdelivery', projectgoodsdelivery);
app.use('/debitnote', debitnote);
app.use('/creditnote', creditnote);
app.use('/supplierpricelistitem', supplierpricelistitem);
app.use('/invoice', invoice);
app.use('/vehicle', vehicle);
app.use('/note', note);
app.use('/bank', bank);
app.use('/jobinformation', jobinformation);
app.use('/finance', finance);
app.use('/poss', pos);
app.use('/training', training);
app.use('/projectsalesorder', projectsalesorder);
app.use('/geocountry', geocountry);
app.use('/support', support);
app.use('/setting', setting);
app.use('/supplier', supplier);
app.use('/subcon', subcon);
app.use('/accounts', accounts);
app.use('/accountsMap', accountsMap);
app.use('/journal', journal);
app.use('/ledger', ledger);
app.use('/inventory', inventory);
app.use('/payrollmanagement', payrollmanagement);
//app.use('/employeeModule',employeeModule);
app.use('/product', product);
app.use('/project', project);
app.use('/projectreceipts', projectreceipts);
app.use('/attachment', Arouter);
app.use('/api', Auth);
app.use('/tender', tender);
app.use('/employee', employee);
 app.use('/company', company);
app.use('/commonApi', commonApi);
app.use('/labourrequest', labourrequest);
 app.use('/tradingquote', tradingquote);
app.use('/projectquote', projectquote);
app.use('/goodsdelivery', goodsdelivery);
app.use('/projecttabcostingsummary', projecttabcostingsummary);
app.use('/projecttabmaterialusedportal',projecttabmaterialusedportal);
app.use('/projecttabdeliveryorder', projecttabdeliveryorder);
app.use('/purchaseorder', purchaseorder);
app.use('/projecttabfinanceportal', projecttabfinanaceportal);
app.use('/projecttabsubconworkorder', projecttabsubconworkorder);
app.use('/projecttabmaterialstransferredportal',projecttabmaterialstransferredportal);
app.use('/content', content);
// app.use('/file', indexRouter);
app.use('/valuelist', valuelist);
app.use('/staff', staff);
app.use('/subcategory', subcategory);
app.use('/category', category);
app.use('/booking', booking);
app.use('/leave', leave);
app.use('/clients', clients);
app.use('/loan', loan);
app.use('/expensehead', expensehead);
app.use('/section', section);
app.use('/email', email);
app.use('/attendance', attendance);
app.use('/usergroup', usergroup);
app.use('/reports', reports);
app.use('/claim', claim);
app.use('/projecttabquote', projecttabquote);
app.use('/timesheet', timesheet);
app.use('/cpfCalculator', cpfcalculator);
app.use('/planning', planning);
app.use('/quote', quote);
app.use('/pricelistitem', pricelistitem);
app.use('/translation', translation);
app.use('/projecttask', projecttask);
app.use('/projectenquiry', projectenquiry);
 app.use('/projectsalesreturn', projectsalesreturn);

app.use('/purchaserequest', purchaserequest);
app.use('/goodsreceipt', goodsreceipt);
app.use('/changerequest', changerequest);
app.use('/document', document);
app.use('/proposal', proposal);
app.use('/joborder', joborder);
app.use('/materialrequest', materialrequest);
app.use('/MaterialIssue', MaterialIssue);
app.use('/purchasereturn', purchasereturn);
app.use('/equipmentrequest', equipmentrequest);
app.use('/equipmentissue', equipmentissue);
app.use('/chartOfAccounts', chartOfAccounts);
app.use('/purchaseinvoice', purchaseinvoice);
app.use('/dashboardforpurchaseorder', dashboardforpurchaseorder);
app.use('/uom', uom);
app.use('/enquiry', enquiry);
app.use('/projectsalesinvoice', projectsalesinvoice);
app.use("/milestone", milestone);
app.use("/stats", stats);

app.use(fileUpload({
    createParentPath: true
}));
module.exports = app;

function newFunction() {
  return './routes/pos.js';
}
