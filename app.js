const express = require('express');
const app= express();
const dotenv = require('dotenv').config();
const mongoose = require('mongoose');
const bp = require('body-parser');
const path = require('path');

//middleware for route and new
app.use(bp.urlencoded({extended:true}));

//database connectivity

mongoose.connect(process.env.dburl, { useNewUrlParser: true,useUnifiedTopology: true },() => {
    console.log("db connected.");
});

//set path directory for ejs files
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//import routes
const route = require ('./routes/route');
const newRouter = require('./routes/new');
app.use('/' , route);
app.use('/', newRouter);

//listening
app.listen(1234,()=>{
    console.log("http://localhost:1234");
});
