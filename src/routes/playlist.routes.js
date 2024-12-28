const express = require('express');
const playlistController = require('../controllers/playlistController');

const playlistRouter = express.Router();

playlistRouter.get('/playlists', playlistController.index);
playlistRouter.get('/playlists/:id', playlistController.getById);
playlistRouter.post('/playlists', playlistController.save);
playlistRouter.post('/playlists/:id', playlistController.saveMusicToPlaylist);

module.exports = playlistRouter;