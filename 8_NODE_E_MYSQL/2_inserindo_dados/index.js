const express = require('express');
const exphbs = require('express-handlebars');
const mysql = require('mysql2');

const app = express();

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use(
	express.urlencoded({
		extended: true,
	})
);

app.use(express.json());

app.post('/books/insertbook', (req, res) => {
	const title = req.body.title;
	const pagesqty = req.body.pagesqty;

	const sql = `INSERT INTO books (title, pagesqty) VALUES ('${title}','${pagesqty}')`;

	conn.query(sql, (err) => {
		if (err) console.log(err);

		res.redirect('/');
	});
});

app.get('/', (req, res) => {
	console.log('chamei o get da home');
	res.render('home');
});

const conn = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: 'Banco1234!',
	database: 'nodemysql',
});

conn.connect((err) => {
	if (err) console.log(err);

	console.log('Conectou ao MySql');

	app.listen(3000, () => {
		console.log('App rodando na porta 3000...');
	});
});
