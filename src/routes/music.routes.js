const express = require('express');
const musicController = require('../controllers/musicController');

const musicRouter = express.Router();

musicRouter.get('/musics', musicController.index);
musicRouter.get('/musics/:id', musicController.getById);
musicRouter.post('/musics', musicController.save);
musicRouter.put('/musics/:id', musicController.update);
musicRouter.delete('/musics/:id', musicController.delete);

module.exports = musicRouter;
