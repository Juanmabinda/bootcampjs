import {
  partida,
  cartas
} from "./modelo";

import {
  muestraPuntuacion,
  deshabilitaBotonMePlanto,
  deshabilitaBotonDameCarta,
  habilitaBotonMePlanto,
  habilitaBotonNuevaPartida,
  queHubieraPasado,
  pintarMensajeFinal,
  pintarCarta
} from "./ui";

export const generaNumeroAleatorio = () : number => {
  let numeroAleatorio : number = Math.floor(Math.random() * 10) + 1;
  return numeroAleatorio
};

export const calculaValorCartaValido = (numeroAleatorio : number) : number => {
  if (numeroAleatorio > 7) {
    numeroAleatorio += 2;
  };

  return numeroAleatorio;
};

export const mostrarCarta = (numero : number) : string => {
  let srcCartaBack : string = cartas.back;

  switch (numero) {
    case 1:
      srcCartaBack = cartas.as;
      break;
    case 2:
      srcCartaBack = cartas.dos;
      break;
    case 3:
      srcCartaBack = cartas.tres;
      break;
    case 4:
      srcCartaBack = cartas.cuatro;
      break;
    case 5:
      srcCartaBack = cartas.cinco;
      break;
    case 6:
      srcCartaBack = cartas.seis;
      break;
    case 7:
      srcCartaBack = cartas.siete;
      break;
    case 10:
      srcCartaBack = cartas.sota;
      break;
    case 11:
      srcCartaBack = cartas.caballo;
      break;
    case 12:
      srcCartaBack = cartas.rey;
      break;
    default:
      srcCartaBack = cartas.back;
      break;
    };

  return srcCartaBack
};

const asignaPuntuacion = (numero : number) : number => {
  let puntuacion : number = 0;
  numero <= 7
  ? puntuacion = numero
  : puntuacion = 0.5;

  return puntuacion;
};

export const dameCarta = () : void => {
  const numero : number = calculaValorCartaValido(generaNumeroAleatorio());
  pintarCarta(mostrarCarta(numero));
  sumarPuntuacion(asignaPuntuacion(numero));
  muestraPuntuacion();
  comprobarPartida();
};

const comprobarPartida = () => {
  if (partida.puntuacion >= 7.5) {
    puntuacionFinal();
    deshabilitaBotonMePlanto();
    deshabilitaBotonDameCarta();
  }else {
    habilitaBotonMePlanto();
    habilitaBotonNuevaPartida();
  };
};

export const sumarPuntuacion = (numero : number) : void => {
  partida.puntuacion += numero;
};

export const mePlanto = () : void => {
  puntuacionFinal();
  deshabilitaBotonDameCarta();
  deshabilitaBotonMePlanto();
  queHubieraPasado();
};

export const reiniciarPuntuacion = () => partida.puntuacion = 0;

export const puntuacionFinal = () : void => {
  let mensaje : string = obtenerMensajeFinalPuntuacion();
  pintarMensajeFinal(mensaje);
};

const obtenerMensajeFinalPuntuacion = () :string => {
  let mensaje : string = "";

  if (partida.puntuacion < 5) {
    mensaje = "Has sido muy conservador 🥴";
  } else if (partida.puntuacion < 6 ) {
    mensaje = "Te ha entrado el canguelo eh? 🤭🤭";
  } else if (partida.puntuacion >= 6 && partida.puntuacion <= 7) {
    mensaje = "Casi casi... 🙃";
  } else if (partida.puntuacion === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena! 🎉🎉🎉🎊";
  }else if(partida.puntuacion > 7.5) {
    mensaje = "Lo siento, has perdido 😵";
    deshabilitaBotonDameCarta();
    deshabilitaBotonMePlanto();
  };

  return mensaje;
};
