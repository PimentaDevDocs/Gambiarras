const express = require('express');

const list = require('./listarArquivos.js');

const app = express();

app.use(express.json());

app.get('/', async (request, response) => {
  let { diretorio } = request.body;

  teste = await list(diretorio);
  console.log(teste);
  response.json(teste);
});

app.listen(3333, () => {
  console.log('Back-end funcionando.');
});
