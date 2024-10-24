const express = require('express');
const passport = require('passport');
const router = express.Router();
const JwtService = require('./../services/jwt.service');

const service = new JwtService();

router.post('/login',
  passport.authenticate('local', { session: false }),
  async (req, res, next) => {
    try {

      const user = req.user;

      const token = await service.generateToken(user);

      res.json({
        user,
        token
      });

    } catch (error) {
      next(error);
    }
  });


module.exports = router;