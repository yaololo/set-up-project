const User = require('../schemas/user');

const signupController = async function(req, res) {
  let user = new User();

  user.email = req.body.email;
  user.name = req.body.name;
  user.password = req.body.password;

  try {
    await user.save();
    res.send({ userInfo: user });
  } catch (error) {
    let formattedError = formatDbError(error);

    res.status(401).json({ error: formattedError });
  }
}

const formatDbError = (error) => {
  let formattedError = {
    name: error.name,
    msg: error.errmsg
  };

  if(error.name === 'ValidationError') {
    formattedError.msg = error.message;
  }

  return formattedError;
};

module.exports = signupController;
