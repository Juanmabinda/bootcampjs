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
  calculaValorCartaValido,
  reiniciarPuntuacion,
  generaNumeroAleatorio
} from "./motor";

const eventos = () => {
  const botonMePlanto = document.getElementById("me-planto");
  if (botonMePlanto != null && botonMePlanto != undefined) {
    botonMePlanto.addEventListener("click", mePlanto);
  };

  const botonDameCarta = document.getElementById("dame-carta");
  if (botonDameCarta != null && botonDameCarta != undefined) {
    botonDameCarta?.addEventListener("click", function() { dameCarta(calculaValorCartaValido(generaNumeroAleatorio())) } );
  };


  const botonNuevaPartida = document.getElementById("nueva-partida");
  if (botonNuevaPartida != null && botonNuevaPartida != undefined) {
    botonNuevaPartida.addEventListener("click", comenzarNuevaPartida);
  };

  const botonVerCarta = document.getElementById("ver-carta");
  if (botonVerCarta != null && botonVerCarta != undefined) {
    botonVerCarta?.addEventListener("click", function() { verSiguienteCarta(calculaValorCartaValido(generaNumeroAleatorio())) } );
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
