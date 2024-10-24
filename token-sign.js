require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET

const payload = {
   sub: 1, // identificador del token
   role: 'customer' 
   // scope es utilizado para los permisos  
};

function signToken(payload, secret) {   
    return jwt.sign(payload, secret);
}


const token = signToken(payload,secret);

console.log(token);