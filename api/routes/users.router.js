const UserService = require('./../services/user.service');
const express = require('express');
const { faker }= require('@faker-js/faker');

const service = new UserService();
const router = express.Router();

router.get('/',async (req,res,next) => {

  try{
    const users = await service.find();
    res.json(users);
  } catch(error) { 
     next(error);
  }

  /*
    const {limit,offset} = req.query;
    if (limit && offset){
      res.json({
        limit,
        offset
      });
    } else {
      res.send('No hay parametros');
    }
  */

})

module.exports = router;
