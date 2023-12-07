import { partida } from "./modelo";

import {
  mostrarCarta,
  muestraPuntuacion,
  puntuacionFinal,
  deshabilitaBotonMePlanto,
  deshabilitaBotonDameCarta,
  habilitaBotonMePlanto,
  habilitaBotonNuevaPartida,
  queHubieraPasado
} from "./ui";

export const generaCartaAleatoria = () : number => {
  let numeroAleatorio : number = Math.floor(Math.random() * 12) + 1;

  if (numeroAleatorio == 8) {
    numeroAleatorio = 7;
  } else if(numeroAleatorio == 9) {
    numeroAleatorio = 10;
  };

  return numeroAleatorio;
};

export const dameCarta = (numero : number) : void => {
  mostrarCarta(numero);
  muestraPuntuacion();
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
