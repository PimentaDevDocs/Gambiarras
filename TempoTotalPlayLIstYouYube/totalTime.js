start = () => {
  document
    .querySelector('#publisher-container')
    .lastChild.lastElementChild.appendChild(showInfo());
};

getAllTime = () => {
  let timeSeconds = 0;
  let videos = document.querySelectorAll('#playlist-items');

  videos.forEach((video) => {
    if (video.__data.data.lengthText) {
      timeParts = video.__data.data.lengthText.simpleText.split(':');
      seconds = 0;
      if (timeParts.lengthText > 2)
        seconds =
          timeParts[0] * 60 * 60 + timeParts[1] * 60 + parseInt(timeParts[2]);
      else seconds = timeParts[0] * 60 + parseInt(timeParts[1]);
      timeSeconds += seconds;
    }
  });
  return timeSeconds;
};

fixTime = (totalTime) => {
  let minutos = 60;
  let horas = 3600;
  let dias = 86400;

  if (totalTime > dias) {
    var dia = Math.floor(totalTime / dias);
    totalTime = totalTime - dias * dia;
  } else {
    var dia = 0;
  }

  if (totalTime > horas) {
    var hora = Math.floor(totalTime / horas);
    totalTime = totalTime - horas * hora;
  } else {
    var hora = 0;
  }

  if (totalTime > minutos) {
    var minuto = Math.floor(totalTime / minutos);
    totalTime = totalTime - minutos * minuto;
  } else {
    var hora = 0;
  }

  var segundos = totalTime;

  var horaTotal = dia * 24 + hora;

  return `${horaTotal}:${minuto}:${segundos}`;
};

showInfo = () => {
  getAllTime();
  var x = document.createElement('span');
  var t = document.createTextNode(` Tempo total = ${fixTime(getAllTime())}`);
  return x.appendChild(t);
};
start();
