const jwt = require('jsonwebtoken');

const testingController = async function(req, res) {
  try {
    let decoded = jwt.verify(req.cookies.token, process.env.PRIVATE_KEY);
    console.log(decoded);
    return res.status(200).json({ decoded });
  } catch (error) {
    console.log(error);
    return res.status(401).json({ error });
  }
}

module.exports = testingController;
