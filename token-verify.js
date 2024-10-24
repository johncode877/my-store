require('dotenv').config();
const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET
const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEsInJvbGUiOiJjdXN0b21lciIsImlhdCI6MTcyOTczNjY2M30.Nap8V6udvKHRKDPaKbKHVLqFst4NQuQVArhdQp3bTYc";

function verifyToken(token, secret) {   
    return jwt.verify(token, secret);
}


const payload = verifyToken(token,secret);

console.log(payload);