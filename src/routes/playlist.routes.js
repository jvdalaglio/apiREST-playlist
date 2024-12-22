const express = require('express');
const playlistController = require('../controllers/playlistController');

const playlistRouter = express.Router();

playlistRouter.get('/playlists', playlistController.index);

module.exports = playlistRouter;