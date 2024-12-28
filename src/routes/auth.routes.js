const express = require('express');
const { login } = require('../controllers/loginController');

const authRouter = express.Router();

authRouter.post('/login', login);

module.exports = authRouter;
