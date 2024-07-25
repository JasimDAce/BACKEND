const express = require('express');
const Model = require('../models/ProductModel');

const router = express.Router();

router.post('/add',(req,res)=>{
    console.log(req.body);

    //asynchronous that why we will get promise obj
    new Model(req.body).save()
    //thenc is the shortcut
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})

router.get('/getall',(req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
router.get('/getbyname/:name', (req,res) => {
    Model.find({name: req.params.name})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
router.delete('/deletebyid/:id',(req,res) => {
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
});

router.put('/updatebyid/:id',(req,res) => {
    Model.findByIdAndUpdate(req.params.id,req.body,{new : true})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})



module.exports = router;