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

router.get('/getall',(req,res)=>{
    res.send('This is getall inside product')
})

module.exports = router;