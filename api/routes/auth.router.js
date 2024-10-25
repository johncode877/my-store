const express = require('express');
const passport = require('passport');
const router = express.Router();

const AuthService = require('./../services/auth.service');
const authService = new AuthService();

//const JwtService = require('./../services/jwt.service');
//const service = new JwtService();



router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {

      const user = req.user;
      res.json(authService.signToken(user));

      /*
      const token = await service.generateToken(user);

      res.json({
        user,
        token
      });
      */

    } catch (error) {
      next(error);
    }
  });


router.post('/recovery',
  async (req, res, next) => { 
    try{
      const { email } = req.body;
      const rta = await authService.sendEmail(email);
      res.json(rta);
    }catch(error){
      next(error);
    }
  }
);



module.exports = router;