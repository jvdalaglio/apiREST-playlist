const express = require('express');
const musicController = require('../controllers/musicController');

const musicRouter = express.Router();

//MÈTODOS GET
musicRouter.get('/musics', musicController.index);
musicRouter.get('/musics/:id', musicController.getById);

//MÈTODOS POST
musicRouter.post('/musics', musicController.save);

//MÈTODOS PUT
musicRouter.put('/musics/:id', musicController.update);

//MÈTODOS DELETE
musicRouter.delete('/musics/:id', musicController.delete);

module.exports = musicRouter;
