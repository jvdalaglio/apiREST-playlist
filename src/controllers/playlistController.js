const playlistModel = require('../models/playlistModel');

const playlistController = {
  index: (req, res) => {
    const playlists = playlistModel.getAllPlaylists();
    res.status(200).json(playlists);
  },
  getById: (req, res) => {
    const { id } = req.params;
    const playlist = playlistModel.getPlaylistById(id);
    if (!playlist) {
      res.status(404).send('Playlist não encontrada');
    } else {
      res.status(200).json(playlist);
    }
  },
  save: (req, res) => {
    const { title } = req.body;
    const newPlaylist = playlistModel.createPlaylist(title);
    if(typeof newPlaylist != 'string') {
      const savedResponse = playlistModel.savePlaylist(newPlaylist);
      return res.status(201).json(savedResponse);
    }
    return res.status(400).send(newPlaylist)
  },
  saveMusicToPlaylist: (req, res) => {
    const { musicName } = req.body;
    const { id } = req.params;

    const musicSaved = playlistModel.addMusicToPlaylist(id, musicName);
    if(typeof musicSaved != 'string') {
      return res.status(201).json(musicSaved);
    }
    return res.status(400).json(musicSaved)
  } 
};

module.exports = playlistController;