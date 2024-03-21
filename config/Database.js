var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'erpdemonew',
    //database: 'erpdemo'
});

module.exports = db;