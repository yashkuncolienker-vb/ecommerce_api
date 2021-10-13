const jwt = require('jsonwebtoken');

const verifyToken = (req, res, next) => {
  try {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];
    if (!token) {
      return res.status(401).send('A token is required for authentication');
    }
    const decoded = jwt.verify(token, process.env.TOKEN_KEY);
    console.log(decoded);
    req.usr_id = decoded._id;
    return next();
  } catch (err) {
    return res.status(400).send('Invalid Token');
  }
};

module.exports = verifyToken;
