const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();
const verifyJWT = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) {
    return res.status(403).json({ message: 'Token não fornecido' });
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    console.log('token', token)
    console.log('decoded', decoded)
    console.log('err', err)
    if (err) {
      return res.status(403).json({ message: 'Token inválido', error: err.message });
    }

    req.user = decoded;
    next();
  });
};

module.exports = { verifyJWT };