const express= require('express');
const router = express.Router();

const db= require ('../models/db_schema');


//gets back all data
router.get('/post', async(req,res)=>{
    try{
        const return_data= await db.find();
        res.json(return_data);
    }
    catch {err} {
        res.json({message : err})
    }
});
//submits data
router.post('/post', async (req,res)=>{
    const db1= new db({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const saved_data = await db1.save();
        res.json(saved_data);
    }
    catch(err){
        res.json({message: err})
    }
});
//return data by id
router.get('/post/:data_id', async(req,res)=>{
    try{
        const return_data_id = await db.findById(req.params.data_id);
        res.json(return_data_id);
    }
    catch (err) {
        res.json({message: err});
    }
});
//delete data by id
router.delete('/post/:data_id', async(req,res)=>{
    try{
        const remove_data = await db.remove({_id: req.params.data_id});
        res.json(remove_data)
    }
    catch (err) {
        res.json({message: err})
    }
});
//update data by data id
router.patch('/post/:data_id',async(req,res)=>{
    try{
        const update_data= await db.updateOne({_id: req.params.data_id}, {$set:{title: req.body.title,
                description:req.body.description}});
        res.json(update_data)
    }
    catch (err) {
        res.json({message: err})
    }
});

module.exports = router;