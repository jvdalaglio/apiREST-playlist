const playlistModel = require('../models/playlistModel');

const playlistController = {
  index: (req, res) => {
    const playlists = playlistModel.getAllPlaylists();
    res.status(200).json(playlists);
  }
};

module.exports = playlistController;