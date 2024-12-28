const express = require('express');
require('dotenv').config();
const musicRouter =  require('./routes/music.routes');
const playlistRouter = require('./routes/playlist.routes');
const authRouter = require('./routes/auth.routes');

const app = express();

app.use(express.json());

app.use(authRouter);
app.use(musicRouter);
app.use(playlistRouter);

app.use(express.static('public'))

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor iniciado em http://localhost:${PORT}`);
})