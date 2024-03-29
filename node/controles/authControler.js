const express = require('express');
const User = require('../models/user');
const router = express.Router();


router.post('/register', async(req, res)=>{
    try{
        const user = await User.create(req.body);

        return res.semd({user});
    } 
    catch(err){
        return res.status((400).send({ error: 'conexão falha'});
    }
    )
});

module.exports = app => app.use('/auth', router);