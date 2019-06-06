const routes = require('express').Router();
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();


// routes.get('/api/login', loginHandler);
const jwtVerification = (req, res, next) => {
  const bearer = req.headers['authorization'];
  if(typeof bearer !== 'undefined'){
    const token = bearer.split(' ')[1];
    const secret = process.env.PRIVATE_KEY;
    console.log(secret);
    res.sendStatus(200);
    jwt.verify(token, secret)
  } else {
    console.log('somethimg');
    res.sendStatus(403);
  }
};

routes.post('/api/post', jwtVerification, (req,res) => {

});




module.exports = routes;
