const express = require('express');
const hbs = require('hbs');
const app = express();
const mysql = require('mysql');
const path = require('path');
const dotenv = require('dotenv');

dotenv.config({path : './.env'});

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
})

db.connect((err) => {
  if (err) {
    console.log(err);
  }else{
    console.log("Connected to database");
  }
});

const publicDirectory = path.join(__dirname, './public');
app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false}));
app.use('/', require("./routes/page"));
app.use('/auth', require('./routes/auth'));
app.set('view engine', 'hbs');
app.use(express.static('.'));

app.listen(2000, (req, res) => {
  console.log("server listening on port 2000");
});