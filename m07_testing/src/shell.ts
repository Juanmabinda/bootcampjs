import "./style.css";

import { partida } from "./modelo";

import {
  verSiguienteCarta,
  pintarIntentos,
  colocarCartaDadaVuelta,
  reiniciarMensajes,
  muestraPuntuacion,
  habilitaBotonDameCarta,
  deshabilitaBotonVerCarta,
  deshabilitaBotonMePlanto
} from "./ui";

import {
  mePlanto,
  dameCarta,
  reiniciarPuntuacion,
} from "./motor";

const eventos = () => {
  const botonMePlanto = document.getElementById("me-planto");
  if (botonMePlanto != null && botonMePlanto != undefined && botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.addEventListener("click", mePlanto);
  };

  const botonDameCarta = document.getElementById("dame-carta");
  if (botonDameCarta != null && botonDameCarta != undefined && botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.addEventListener("click", function() { dameCarta() } );
  };


  const botonNuevaPartida = document.getElementById("nueva-partida");
  if (botonNuevaPartida != null && botonNuevaPartida != undefined && botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.addEventListener("click", comenzarNuevaPartida);
  };

  const botonVerCarta = document.getElementById("ver-carta");
  if (botonVerCarta != null && botonVerCarta != undefined && botonVerCarta instanceof HTMLButtonElement) {
    botonVerCarta.addEventListener("click", function() { verSiguienteCarta() } );
  };
};

document.addEventListener("DOMContentLoaded", eventos);

const comenzarNuevaPartida  = () : void => {
  partida.intentos++;
  pintarIntentos(partida.intentos);
  colocarCartaDadaVuelta();
  reiniciarMensajes();
  reiniciarPuntuacion();
  muestraPuntuacion();
  habilitaBotonDameCarta();
  deshabilitaBotonVerCarta();
  deshabilitaBotonMePlanto();
};
