const express = require('express');
const router = express.Router();
const db = require('../mysqlset');
const {isSaved} = require('./middlewares');

router.get('/',isSaved,async(req,res,next)=>{
    res.status(200).send('성공');
});

router.post('/',isSaved,(req,res,next)=>{
    const {store} = req.body;
    console.log(store);   
    const queryresult = new Promise((resolve,reject)=>{
        db.query(`SELECT name FROM store WHERE name LIKE'%${store}%'`,(error,result)=>{
            if(error){
               reject(error);
            }
            resolve(result);
        });
    }).then((result)=>{
        res.status(201).send(result);
    }).catch((error)=>{
        res.status(404).send('fail');
        next(404);
    });
});


module.exports = router;
