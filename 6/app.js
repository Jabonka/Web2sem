var express=require('express');
const router = require('./api/v1/route');


var app=express();

const PORT=3000;
const host='127.0.0.1';

app.use(express.static(__dirname+'./public'));

app.use('/',router);
app.listen(PORT, host, () => {
    console.log(`Server starting on ${host}:${PORT}`)
})