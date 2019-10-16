const User = require('../schemas/user');
const formatDbError = require('./shared/errorformatter');
const jwt = require('jsonwebtoken');

const loginController = async (req, res) => {
  let password = req.body.password;
  if(typeof password !== 'string') {
    return res.status(401).json({ error: { type: 'Validation Error', msg: 'password must be a string' } })
  }

  try {
    let user = await User.findOne({ email: req.body.email });
    if(!user) {
      return res.status(401).json({ error: { type: 'Validation Error', msg: 'Wrong email' } });
    }

    let isValidPassword = user.validPassword(req.body.password);
    if(!isValidPassword) {
      return res.status(401).json({ error: { type: 'Validation Error', msg: 'Wrong password' } });
    }
    
    console.log(user.sdfdf);
    console.log(user.asdfsa());
    return res.status(200).json({ success: { msg: 'Login successful', userInfo: user.toJSON() } });
  } catch (error) {
    let formattedError = formatDbError(error);
    return res.status(401).json({ error: formattedError });
  }
}

module.exports = loginController;
