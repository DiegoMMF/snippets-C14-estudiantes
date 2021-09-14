const express = require('express');
const app = express();

const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

const routes = require('./routes/main');
app.use('/', routes);

app.listen(3000, ()=>{
    console.log('Server up at: http://localhost:3000');    
});
