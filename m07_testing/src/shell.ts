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
  generaCartaAleatoria,
  reiniciarPuntuacion,
  generaNumeroAleatorio
} from "./motor";

const eventos = () => {
  const botonMePlanto : HTMLElement | null = document.getElementById("me-planto");
  botonMePlanto?.addEventListener("click", mePlanto);

  const botonDameCarta : HTMLElement | null = document.getElementById("dame-carta");
  botonDameCarta?.addEventListener("click", function() { dameCarta(generaCartaAleatoria(generaNumeroAleatorio())) } );

  const botonNuevaPartida : HTMLElement | null = document.getElementById("nueva-partida");
  botonNuevaPartida?.addEventListener("click", comenzarNuevaPartida);

  const botonVerCarta : HTMLElement | null = document.getElementById("ver-carta");

  botonVerCarta?.addEventListener("click", function() { verSiguienteCarta(generaCartaAleatoria(generaNumeroAleatorio())) } );
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
