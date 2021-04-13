const express = require('express');
const router = express.Router();
const dbejs = require('../models/db_schema');


//get new.ejs on home page

router.get('/', (req, res)=> {
    res.render('new',{title: 'first rest api'});
});


//retrieve data
router.post('/', async(req,res)=>{
    await dbejs.create({
        title: req.body.title,
        description: req.body.description
    } , (err,data)=>{
        if(err)
            console.log(err);
        else
            console.log("added to db");
    });
});

module.exports = router;
