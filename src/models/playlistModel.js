const fs = require('node:fs');
const playlists = fs.readFileSync('public/data/playlists.json', 'utf-8');
const musics = fs.readFileSync('public/data/musics.json', 'utf-8');
const musicModel = require('../models/musicModel');

const playlistModel = {
  //GET ALL PLAYLISTS
  getAllPlaylists: () => {
    const playlistObject = JSON.parse(playlists);
    return playlistObject
  },
  // GET PLAYLIST BY ID
  getPlaylistById: (id) => {
    const playlistObject = JSON.parse(playlists);
    const playlist = playlistObject.find(playlist => playlist.id === +id);
    const musics = playlist.musics.map(musicId => musicModel.getMusicById(musicId));
    playlist.musics = musics;
    return playlist;
  },
  createPlaylist: (title) => {
    if(title && title !== "") {
      const playlist = {
        name: title,
        musics: [],
        tags: [],
      }
      return playlist
    }
    return "title is not defined"
  },
  savePlaylist: (playlist) => {
    const playlistObject = JSON.parse(playlists);
    const playlistToSave = {
      id: playlistObject[playlistObject.length - 1].id + 1,
      ...playlist
    }
    playlistObject.push(playlistToSave);
    fs.writeFileSync('public/data/playlists.json', JSON.stringify(playlistObject, null, 2));
    return playlistToSave;
  },
  addMusicToPlaylist: (playlistId, musicName) => {
    const playlistObject = JSON.parse(playlists);
    const musicsObject = JSON.parse(musics);
    const music = musicsObject.filter(music => music.title === musicName);
    if(music) {
      const playlistIndex = playlistObject.findIndex(playlist => playlist.id === +playlistId)
      if(playlistIndex !== -1) {
        if(!playlistObject[playlistIndex].musics.includes(music[0].id)) {
          playlistObject[playlistIndex].musics.push(music[0].id);
          fs.writeFileSync('public/data/playlists.json', JSON.stringify(playlistObject, null, 2))
          return playlistObject[playlistIndex]
        }
        return "Essa música já foi adicionada!"
      }
    }
  }
}

module.exports = playlistModel;