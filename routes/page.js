const express = require('express');
const router = express.Router();
const app = express();

router.get('/', (req, res) => res.render('home'));
router.get('/register', (req, res) => res.render('register'));
router.get('/login', (req, res) => res.render('login'));
router.get('/logout', (req, res) => res.render('logout'));

router.get('/profile', (req, res) => res.render('profile'));

module.exports = router;
