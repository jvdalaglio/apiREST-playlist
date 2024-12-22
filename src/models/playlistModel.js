const fs = require('node:fs');
const playlists = fs.readFileSync('public/data/playlists.json', 'utf-8');
const playlistObject = JSON.parse(playlists);

const playlistModel = {
  //GET ALL PLAYLISTS
  getAllPlaylists: () => {
    return playlistObject
  },
  // GET PLAYLIST BY ID
  getPlaylistById: (id) => {
    const playlist = playlistObject.find(playlist => playlist.id === +id);
    return playlist;
  }
}

module.exports = playlistModel;