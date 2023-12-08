import "./style.css";

import { partida } from "./modelo";

import {
  BOTON_ME_PLANTO,
  BOTON_DAME_CARTA,
  BOTON_NUEVA_PARTIDA,
  BOTON_VER_CARTA,
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
  generarNumeroAleatorio
} from "./motor";

const eventos = () => {
  BOTON_ME_PLANTO?.addEventListener("click", mePlanto);

  BOTON_DAME_CARTA?.addEventListener("click", function() { dameCarta(generaCartaAleatoria(generarNumeroAleatorio())) } );

  BOTON_NUEVA_PARTIDA?.addEventListener("click", comenzarNuevaPartida);

  BOTON_VER_CARTA?.addEventListener("click", function() { verSiguienteCarta(generaCartaAleatoria(generarNumeroAleatorio())) } );
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
