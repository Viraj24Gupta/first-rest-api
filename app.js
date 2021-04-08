const express = require('express');
const app= express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bp = require('body-parser');
const path = require('path');

app.use(bp.json());

//render ejs files
// app.use(express.static(path.join(__dirname, '../')));

app.get('/',(req,res)=>{
    res.sendFile((path.join(__dirname, './templates/dg.html')))
});


//database connectivity

mongoose.connect(process.env.dburl, { useNewUrlParser: true,useUnifiedTopology: true },() => {
    console.log("db connected.");
});


//import routes
const route = require ('./routes/route');


//middleware for route
app.use('/' , route);

//listening
app.listen(1234,()=>{
    console.log("http://localhost:1234");
});