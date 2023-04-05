const express = require('express');
const app = express();
const hbs = require('hbs');

app.set('view engine', 'hbs');  
app.use('/', require('./routes/page'));
app.use(express.static('.'));

app.listen(4000, () => {
    console.log('Server has been started on 4000...');
});


