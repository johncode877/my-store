require('dotenv').config();

const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET

const jwtConfig = {
    //expiresIn: '7d',
    expiresIn: '600000',// 10 minutos en milisegundos
};

const payload = {
   sub: 1, // identificador del token
   role: 'customer' 
   // scope es utilizado para los permisos  
};

function signToken(payload, secret,jwtConfig) {   
    return jwt.sign(payload, secret,jwtConfig);
}


const token = signToken(payload,secret,jwtConfig);

console.log(token);