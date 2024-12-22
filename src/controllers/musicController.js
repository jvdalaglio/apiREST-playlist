const musicModel = require('../models/musicModel');

const musicController = {
  // GET /musics
  index: (req, res) => {
    const musics = musicModel.getAllMusics();
    res.status(200).json(musics);
  },

  // GET /musics/:id
  getById: (req, res) => {
    const { id } = req.params;
    const music = musicModel.getMusicById(id);
    if (!music) {
      res.status(404).send('Música não encontrada');
    } else {
      res.status(200).json(music);
    }
  },

  // POST /musics
  save: (req, res) => {
    const { title, album, artist, year } = req.body;
    const newMusic = {
      title,
      album,
      artist,
      year,
    }
    if(newMusic) {
      !title && res.status(400).json({error: 'O campo título é obrigatório'});
      !album && res.status(400).json({error: 'O campo album é obrigatório'});
      !artist && res.status(400).json({error: 'O campo artista é obrigatório'});
      !year && res.status(400).json({error: 'O campo ano é obrigatório'});
    }

    musicModel.saveMusic(newMusic);
    res.status(201).json(newMusic);
  },

  //PUT /musics/:id
  update: (req, res) => {
    const { id } = req.params;
    const { title, album, artist, year } = req.body;
    const music = {
      id,
      title,
      album,
      artist,
      year
    }
    if(!title && !album && !artist && !year) {
      return res.status(400).json({error: 'Objeto não pode estar vazio'});
    }
    const response = musicModel.updateMusic(music);
    if(response !== "Música não encontrada") {
      res.status(200).json(response);
    } else {
      res.status(404).send(response);
    }
  },

  // DELETE /musics/:id
  delete: (req, res) => {
    const {id} = req.params;
    const response = musicModel.deleteMusic(id);
    if(response !== "Música não encontrada") {
      res.status(204).json();
    } else {
      res.status(404).send(response);
    }
  }
};

module.exports = musicController;