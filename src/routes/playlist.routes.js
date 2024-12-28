const express = require('express');
const playlistController = require('../controllers/playlistController');
const { verifyJWT } = require('../auth.middleware');

const playlistRouter = express.Router();

playlistRouter.get('/playlists', playlistController.index);
playlistRouter.get('/playlists/:id', playlistController.getById);
playlistRouter.post('/playlists', verifyJWT, playlistController.save);
playlistRouter.post('/playlists/:id', verifyJWT, playlistController.saveMusicToPlaylist);

module.exports = playlistRouter;