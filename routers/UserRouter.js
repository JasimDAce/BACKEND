const express = require('express');
 const Model = require('../models/UserModel');

//initialize
 const router = express.Router();

router.post('/add',(req,res) => {
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
});

// getall 
router.get('/getall',(req,res) => {
    Model.find()
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json(err);
    });
})
// getbyid 
router.get('/getbyid',(req,res) => {
    res.send('response from user getbyid');
})
// update
router.get('/update',(req,res) => {
    res.send('response from user update');
})
// delete
router.get('/delete',(req,res) => {
    res.send('response from user delete');
})

module.exports = router;


//npm init -y
//npm i express
//npm i nodemon
//add dev script


//get - read 
//post - create
//put - update
//Delete - delete

// router and model for product.



//TODO: Response Status Code
//100-199 are for informational response
//200-299 are for success response
//300-399 are for Redirection Response 
//400-499 are for error (specifically client side error)
//500-599 are for server side error
