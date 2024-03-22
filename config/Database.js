var mysql = require('mysql');

var db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'erpdemo',
    //database: 'erpdemo'
});

module.exports = db;