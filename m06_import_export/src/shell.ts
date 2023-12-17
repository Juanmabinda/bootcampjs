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
  calculaValorCartaValido,
  reiniciarPuntuacion,
  generaNumeroAleatorio
} from "./motor";

const eventos = () => {
  if (BOTON_ME_PLANTO != null && BOTON_ME_PLANTO != undefined && BOTON_ME_PLANTO instanceof HTMLButtonElement) {
    BOTON_ME_PLANTO.addEventListener("click", mePlanto);
  };

  if (BOTON_DAME_CARTA != null && BOTON_DAME_CARTA != undefined && BOTON_DAME_CARTA instanceof HTMLButtonElement) {
    BOTON_DAME_CARTA.addEventListener("click", function() { dameCarta() } );
  };

  if (BOTON_NUEVA_PARTIDA != null && BOTON_NUEVA_PARTIDA != undefined && BOTON_NUEVA_PARTIDA instanceof HTMLButtonElement) {
    BOTON_NUEVA_PARTIDA.addEventListener("click", comenzarNuevaPartida);
  };

  if (BOTON_VER_CARTA != null && BOTON_VER_CARTA != undefined && BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.addEventListener("click", function() { verSiguienteCarta() } );
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
