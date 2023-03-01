const express = require('express');
const app = express();

app.set('view engine', 'hbs');  

app.use('/', require('./routes/page'));

app.listen(3000, () => {
    console.log('Server has been started on 3000...');
}); 