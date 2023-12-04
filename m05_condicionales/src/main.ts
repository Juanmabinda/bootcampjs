import "./style.css";

let puntuacion : number = 0;
const BOTON_DAME_CARTA = document.getElementById("dame-carta");
const BOTON_ME_PLANTO = document.getElementById("me-planto");
const BOTON_NUEVA_PARTIDA = document.getElementById("nueva-partida");
const BOTON_VER_CARTA = document.getElementById("ver-carta");


const muestraPuntuacion = () : void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${puntuacion.toString()}`;
  };
}

const dameCarta = () : void => {
  let numeroAleatorio = Math.floor(Math.random() * 12) + 1;
  if (BOTON_ME_PLANTO instanceof HTMLButtonElement) {
    BOTON_ME_PLANTO.disabled = false;
  }

  if (BOTON_NUEVA_PARTIDA instanceof HTMLButtonElement) {
    BOTON_NUEVA_PARTIDA.disabled = false;
  }

  if (numeroAleatorio == 8) {
    numeroAleatorio = 7;
  } else if(numeroAleatorio == 9) {
    numeroAleatorio = 10;
  };

  mostrarCarta(numeroAleatorio);
  muestraPuntuacion();
  evaluaPuntuacion();
};

const mostrarCarta = (numero : number) : void => {
  let src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
  const carta = document.getElementById("carta");

  switch (numero) {
    case 1:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg";
      sumarPuntuacion(1);
      break;
    case 2:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg";
      sumarPuntuacion(2);
      break;
    case 3:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg";
      sumarPuntuacion(3);
      break;
    case 4:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg";
      sumarPuntuacion(4);
      break;
    case 5:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg";
      sumarPuntuacion(5);
      break;
    case 6:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg";
      sumarPuntuacion(6);
      break;
    case 7:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg";
      sumarPuntuacion(7);
      break;
    case 10:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg";
      sumarPuntuacion(0.5);
      break;
    case 11:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg";
      sumarPuntuacion(0.5);
      break;
    case 12:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg";
      sumarPuntuacion(0.5);
      break;
    default:
      src = "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg";
      sumarPuntuacion(0.5);
      break;
    };

  if (carta instanceof HTMLImageElement) {
    carta.src = src;
  }
};

const evaluaPuntuacion = () : void => {
  const gameOverElement = document.getElementById("game-over");

  if (puntuacion > 7.5) {
    if (gameOverElement) {
      gameOverElement.innerHTML = "HAS PERDIDO";
      deshabilitaBotonDameCarta();
      deshabilitaBotonMePlanto();
    };
  };
};

const deshabilitaBotonDameCarta = () : void => {
  if (BOTON_DAME_CARTA instanceof HTMLButtonElement) {
    BOTON_DAME_CARTA.disabled = true;
  };
}

const deshabilitaBotonMePlanto = () : void => {
  if (BOTON_ME_PLANTO instanceof HTMLButtonElement) {
    BOTON_ME_PLANTO.disabled = true;
  };
}

const sumarPuntuacion = (numero : number) : void => {
  puntuacion += numero;
};

const mePlanto = () => {
  puntuacionFinal();
  deshabilitaBotonDameCarta();
  deshabilitaBotonMePlanto();
  queHubieraPasado();
};

const puntuacionFinal = () => {
  const puntuacionMePlantoElemento = document.getElementById("puntuacion-me-planto");
  let mensaje = "";

  if (puntuacion < 5) {
    mensaje = "Has sido muy conservador 🥴🥴";
  } else if (puntuacion < 6 ) {
    mensaje = "Te ha entrado el canguelo eh? 🤭🤭🤭";
  } else if (puntuacion >= 6 && puntuacion <= 7) {
    mensaje = "Casi casi... 🙃🙃🙃";
  } else if (puntuacion === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena! 🎉🎉🎉🎊";
  }

  if (puntuacionMePlantoElemento) {
    puntuacionMePlantoElemento.innerHTML = mensaje;
  };
};

const comenzarNuevaPartida  = () => {
  location.reload()
}

const queHubieraPasado = () => {
  const textoQueHubieraPasado = document.getElementById("que-hubiera-pasado");
  if (textoQueHubieraPasado) {
    textoQueHubieraPasado.innerHTML = "Quieres ver cual hubiera sido la siguiente carta? 👇 "
  }

  if (BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.disabled = false;
  };

};

const verSiguienteCarta = () : void => {
  let numeroAleatorio = Math.floor(Math.random() * 12) + 1;

  if (numeroAleatorio == 8) {
    numeroAleatorio = 7;
  } else if(numeroAleatorio == 9) {
    numeroAleatorio = 10;
  };

  mostrarCarta(numeroAleatorio);
  if (BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.disabled = true;
  };

};

BOTON_ME_PLANTO?.addEventListener("click", mePlanto);

BOTON_DAME_CARTA?.addEventListener("click", dameCarta);

BOTON_NUEVA_PARTIDA?.addEventListener("click", comenzarNuevaPartida);

BOTON_VER_CARTA?.addEventListener("click", verSiguienteCarta )
