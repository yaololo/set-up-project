const formatDbError = require('./shared/errorformatter');
const User = require('../schemas/user');
const jwt = require('jsonwebtoken');

const signupController = async function(req, res) {
  let password = req.body.password;
  if(typeof password !== 'string') {
    return res.status(401).json({ error: { type: 'Validation Error', msg: 'password must be a string' } })
  }

  let user = new User();
  user.email = req.body.email;
  user.name = req.body.name;
  user.setHashedPassword(password);

  try {
    await user.save();
    let userInfo = user.toJSON();
    let token = jwt.sign(userInfo, process.env.PRIVATE_KEY,  { expiresIn: '2h' });

    // set token to cookie
    res.cookie('token', token, { httpOnly: true, sameSite: 'Lax' });
    return res.send({ userInfo });
  } catch (error) {
    let formattedError = formatDbError(error);
    return res.status(401).json({ error: formattedError });
  }
}

module.exports = signupController;
