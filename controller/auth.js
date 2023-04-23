const mysql = require('mysql');
const jwt = require('jsonwebtoken');  
const bcrypt = require('bcrypt');

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});

exports.register= (req, res) => {
  console.log(req.body);

  const {name, email, password, password_c} = req.body
  db.query(`SELECT email FROM users WHERE email = ?`, [email], async (err, results) => {
    if(err) {
      console.log(err);
    }
    if (results.length > 0) {
      return res.render('register', {
        mesesage: "That email is already in use!"
      })
    }else if (password !== password_c) {
      return res.render('register', {
        mesesage: "Passwords do not match!"
      })
    }
    let hashedPassword = await bcrypt.hash(password, 8);
    console.log(hashedPassword);

    db.query('INSERT INTO users SET ?', {name: name, email: email, password: hashedPassword}, (err, results) => {
      if(err) {
        console.log(err);
      }else {
        return res.render('register', {
          mesesage: "Successfully registered!"
        });
      };
    });
    res.send('Hello World!');
  });
}; 