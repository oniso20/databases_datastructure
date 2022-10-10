const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'testdbnew',
});

connection.connect();

connection.query('select * FROM tasks', (error, results, fields) => {
    if (error) {
        return console.log(error);
    }
    return console.log(results);
});
connection.end();