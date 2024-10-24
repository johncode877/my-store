const express = require('express');
const { config } = require('./../config/configEnv');
const passport = require('passport');
const router = express.Router();
const jwt = require('jsonwebtoken');



router.post('/login', 
  passport.authenticate('local',{session:false}),
  async (req, res, next) => {
  try {    

    const user = req.user;
    const secret = config.jwtSecret;    
    
    const jwtConfig = {      
      expiresIn: '1800000',// 10 minutos en milisegundos
    };

    const payload = {
      sub: user.id ,
      role: user.role
    };
    
    const token = jwt.sign(payload,secret,jwtConfig);

    res.json({
      user,
      token
    });

  } catch (error) {
    next(error);
  }
});


module.exports = router;