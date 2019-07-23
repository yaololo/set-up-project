const testingController = require('../../controller/testingController');
const route = require('express').Router();
const signupController = require('../../controller/signupController');
const loginController = require('../../controller/loginController');

route.post('/signup', signupController);
route.post('/login', loginController);
route.post('/tokenTesting', testingController);

module.exports = route;
