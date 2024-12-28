const fs = require('node:fs');
const musics = fs.readFileSync('public/data/musics.json', 'utf-8');
const musicsObject = JSON.parse(musics);

const musicModel = {
  // GET ALL MUSICS
  getAllMusics: () => {
    return musicsObject
  },
  // GET MUSIC BY ID
  getMusicById: (id) => {
    const music = musicsObject.find(music => music.id === +id);
    return music;
  },
  // POST MUSIC
  saveMusic: (music) => {
    music = {
      id: musicsObject[musicsObject.length - 1].id + 1,
      ...music,
      createdAt: new Date().toLocaleDateString('pt-BR')
    }
    musicsObject.push(music);
    fs.writeFileSync('public/data/musics.json', JSON.stringify(musicsObject, null, 2));
    return musicsObject.push(music);
  },
  // PUT MUSIC
  updateMusic: (music) => {
    const musicIndex = musicsObject.findIndex(selectedMusic => selectedMusic.id === +music.id);
    if(musicIndex === -1) return "Música não encontrada";
    musicsObject[musicIndex].title = music.title ? music.title : musicsObject[musicIndex].title;
    musicsObject[musicIndex].album = music.album ? music.album : musicsObject[musicIndex].album;
    musicsObject[musicIndex].artist = music.artist ? music.artist : musicsObject[musicIndex].artist;
    musicsObject[musicIndex].year = music.year ? music.year : musicsObject[musicIndex].year;
    fs.writeFileSync('public/data/musics.json', JSON.stringify(musicsObject, null, 2));
    return musicsObject[musicIndex];
  },
  // DELTE MUSIC
  deleteMusic: (id) => {
    const musicIndex = musicsObject.findIndex(music => music.id === +id);
    if(musicIndex === -1) return "Música não encontrada";
    musicsObject.splice(musicIndex, 1);
    fs.writeFileSync('public/data/musics.json', JSON.stringify(musicsObject, null, 2));
    return "Música excluída com sucesso";
  },
}

module.exports = musicModel;