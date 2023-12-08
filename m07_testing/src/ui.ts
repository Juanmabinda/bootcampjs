import {
  partida,
  cartas
} from "./modelo";

import { sumarPuntuacion } from "./motor";


export const BOTON_DAME_CARTA : HTMLElement | null = document.getElementById("dame-carta");
export const BOTON_ME_PLANTO : HTMLElement | null = document.getElementById("me-planto");
export const BOTON_NUEVA_PARTIDA : HTMLElement | null = document.getElementById("nueva-partida");
export const BOTON_VER_CARTA : HTMLElement | null = document.getElementById("ver-carta");


export const muestraPuntuacion = () : void => {
  const elementoPuntuacion : HTMLElement | null = document.getElementById("puntuacion");
  if (elementoPuntuacion) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${partida.puntuacion.toString()}`;
  };
};

export const mostrarCarta = (numero : number) : void => {
  let srcCartaBack : string = cartas.back;

  const carta : HTMLElement | null = document.getElementById("carta");

  switch (numero) {
    case 1:
      srcCartaBack = cartas.as;
      sumarPuntuacion(1);
      break;
    case 2:
      srcCartaBack = cartas.dos;
      sumarPuntuacion(2);
      break;
    case 3:
      srcCartaBack = cartas.tres;
      sumarPuntuacion(3);
      break;
    case 4:
      srcCartaBack = cartas.cuatro;
      sumarPuntuacion(4);
      break;
    case 5:
      srcCartaBack = cartas.cinco;
      sumarPuntuacion(5);
      break;
    case 6:
      srcCartaBack = cartas.seis;
      sumarPuntuacion(6);
      break;
    case 7:
      srcCartaBack = cartas.siete;
      sumarPuntuacion(7);
      break;
    case 10:
      srcCartaBack = cartas.sota;
      sumarPuntuacion(0.5);
      break;
    case 11:
      srcCartaBack = cartas.caballo;
      sumarPuntuacion(0.5);
      break;
    case 12:
      srcCartaBack = cartas.rey;
      sumarPuntuacion(0.5);
      break;
    default:
      srcCartaBack = cartas.back;
      sumarPuntuacion(0.5);
      break;
    };

  if (carta instanceof HTMLImageElement) {
    carta.src = srcCartaBack;
  };
};

export const habilitaBotonVerCarta = () :void => {
  if (BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.disabled = false;
  };
};

export const deshabilitaBotonDameCarta = () : void => {
  if (BOTON_DAME_CARTA instanceof HTMLButtonElement) {
    BOTON_DAME_CARTA.disabled = true;
  };
}

export const habilitaBotonDameCarta = () : void => {
  if (BOTON_DAME_CARTA instanceof HTMLButtonElement) {
    BOTON_DAME_CARTA.disabled = false;
  };
}

export const deshabilitaBotonVerCarta = () : void => {
  if (BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.disabled = true;
  };
}

export const habilitaBotonNuevaPartida = () : void => {
  if (BOTON_NUEVA_PARTIDA instanceof HTMLButtonElement) {
    BOTON_NUEVA_PARTIDA.disabled = false;
  };
};

export const habilitaBotonMePlanto = () : void => {
  if (BOTON_ME_PLANTO instanceof HTMLButtonElement) {
    BOTON_ME_PLANTO.disabled = false;
  };
};

export const deshabilitaBotonMePlanto = () : void => {
  if (BOTON_ME_PLANTO instanceof HTMLButtonElement) {
    BOTON_ME_PLANTO.disabled = true;
  };
};





export const pintarMensajeFinal = (mensaje : string) :void => {
  const puntuacionMePlantoElemento : HTMLElement | null = document.getElementById("puntuacion-me-planto");
  if (puntuacionMePlantoElemento) {
    puntuacionMePlantoElemento.innerHTML = mensaje;
  };
};

export const colocarCartaDadaVuelta = () :void => {
  const carta = document.getElementById("carta");
  if (carta instanceof HTMLImageElement) {
    carta.src = cartas.back;
  };
};

export const reiniciarMensajes = () :void => {
  const puntuacionMePlantoElemento : HTMLElement | null = document.getElementById("puntuacion-me-planto");
  const textoQueHubieraPasado = document.getElementById("que-hubiera-pasado");

  if (puntuacionMePlantoElemento) {
    puntuacionMePlantoElemento.innerHTML = "";
  };


  if (textoQueHubieraPasado) {
    textoQueHubieraPasado.innerHTML = ""
  };
}


export const pintarIntentos = (intentos : number) : void => {
  const intentosElemento : HTMLElement | null = document.getElementById("intentos");

  if (intentosElemento) {
    intentosElemento.innerHTML = `Intentos: ${intentos}`;
  };

};

export const queHubieraPasado = () : void => {
  const textoQueHubieraPasado = document.getElementById("que-hubiera-pasado");

  if (partida.puntuacion !== 7.5) {
    if (textoQueHubieraPasado) {
      textoQueHubieraPasado.innerHTML = "Querés ver cual hubiera sido la siguiente carta? 👇 "
    };

    habilitaBotonVerCarta();
  };
};

export const verSiguienteCarta = (numero : number) : void => {
  mostrarCarta(numero);
  if (BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.disabled = true;
  };
};
