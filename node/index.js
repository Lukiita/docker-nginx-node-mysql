const express = require('express');
const app = express();
const port = 3000;
const config = {
	host: 'db',
	user: 'root',
	password: 'root',
	database: 'nodedb'
};

const mysql = require('mysql');
const connection = mysql.createConnection(config);

const sql = `INSERT INTO people(name) VALUES('Lukita')`;
connection.query(sql);

const select = `SELECT name FROM people`
var peoplesName;
connection.query(select, (err, result) => peoplesName = result)
connection.end();


app.get('/', (req, res) => {
	res.send('<h1>Full Cycle Rocks!</h1>' + peoplesName.map((res, index) => '<h2> - ' + res.name + ' ' + (index + 1) + '</h2>').join(''));
});

app.listen(port, () => {
	console.log('Rodando na porta', port);
});