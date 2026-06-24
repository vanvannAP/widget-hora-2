function actualizarChibi() {
  const hora = new Date().getHours();
  const chibi = document.getElementById("chibi");

  if (hora >= 6 && hora < 12) {
    chibi.src = "src/chibi-desayuno.mp4";
  } else if (hora >= 13 && hora <= 17) {
    chibi.src = "src/chibi-pc.mp4";
  } else if (hora >= 18 && hora <= 22) {
    chibi.src = "src/chibi_tv.mp4";
  } else {
    chibi.src = "src/chibi-sleep.mp4";
  }
}

function mostrarHora() {
  const ahora = new Date();
  const horas = ahora.getHours().toString().padStart(2, '0');
  const minutos = ahora.getMinutes().toString().padStart(2, '0');
  document.getElementById("hora").textContent = `${horas}:${minutos}`;
}

actualizarChibi();
mostrarHora();
setInterval(actualizarChibi, 60 * 60 * 1000);
setInterval(mostrarHora, 60 * 1000);