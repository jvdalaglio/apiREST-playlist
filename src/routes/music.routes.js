const express = require('express');
const musicController = require('../controllers/musicController');
const { verifyJWT } = require('../auth.middleware');

const musicRouter = express.Router();

musicRouter.get('/musics', musicController.index);
musicRouter.get('/musics/:id', musicController.getById);
musicRouter.post('/musics', verifyJWT , musicController.save);
musicRouter.put('/musics/:id', verifyJWT , musicController.update);
musicRouter.delete('/musics/:id', verifyJWT, musicController.delete);

module.exports = musicRouter;
