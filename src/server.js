const express = require('express');
const musicRouter =  require('./routes/music.routes');
const playlistRouter = require('./routes/playlist.routes');

const app = express();

app.use(express.json());

app.use(musicRouter);
app.use(playlistRouter);

app.use(express.static('public'))

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
})