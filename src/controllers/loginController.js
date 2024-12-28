const { generateToken } = require('./authController');

const login = (req, res) => {
  const { username, password } = req.body;

  const user = {
    id: 1,
    username: 'Teste123',
    password: 'senha123',
  };

  if (username === user.username && password === user.password) {
    const token = generateToken(user);

    return res.status(200).json({
      message: 'Login bem-sucedido!',
      token: token,
    });
  } else {
    return res.status(401).json({
      message: 'Credenciais inválidas',
    });
  }
};

module.exports = { login };
