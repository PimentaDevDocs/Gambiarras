const fs = require('fs').promises;

setArquivos = async (arq, listaDeArquivos, dir) => {
  arquivos = arq
  if (!arquivos) arquivos = [];
  for (let k in listaDeArquivos) {
    let stat = await fs.stat(`${dir}/${listaDeArquivos[k]}`);
    if (stat.isDirectory()) 
    setArquivos(arquivos, listaDeArquivos[k], dir)
    else
    arquivos.push({ diretorio: listaDeArquivos[k], arquivos: [] });
  }
  return arquivos
}

listArqDir = async (dir, arquivos) => {
  let listaDeArquivos = await fs.readdir(dir.replace('\\', '/'));

  arquivos = setArquivos(arquivos, listaDeArquivos, dir);

  for (let k in listaDeArquivos) {
    let stat = await fs.stat(dir + '/' + listaDeArquivos[k]);
    //abre as pastas
    if (stat.isDirectory()) {
      await listArqDir(
        dir + '/' + listaDeArquivos[k],
        arquivos
      );
    }
    //lista os arquivos
    else {
      for (let i = 0; i < arquivos.length; i++) {
        if (arquivos[i].diretorio === dir.split('/')[dir.split('/').length - 1]) {
          arquivos[i].arquivos.push(listaDeArquivos[k]);
        }
      }
    }
  }
  return arquivos;
}

module.exports = listArqDir;