import {
  partida,
  cartas
} from "./modelo";

import {
  mostrarCarta,
  calculaValorCartaValido,
  generaNumeroAleatorio
} from "./motor";


export const BOTON_DAME_CARTA = document.getElementById("dame-carta");
export const BOTON_ME_PLANTO = document.getElementById("me-planto");
export const BOTON_NUEVA_PARTIDA = document.getElementById("nueva-partida");
export const BOTON_VER_CARTA = document.getElementById("ver-carta");

export const muestraPuntuacion = () : void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion != null && elementoPuntuacion != undefined && elementoPuntuacion instanceof HTMLDivElement) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${partida.puntuacion.toString()}`;
  };
};

export const pintarCarta = (cartaParaMostrar : string) : void => {
  const carta = document.getElementById("carta");
  if (carta instanceof HTMLImageElement) {
    carta.src = cartaParaMostrar;
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
  const puntuacionMePlantoElemento = document.getElementById("puntuacion-me-planto");
  if (puntuacionMePlantoElemento) {
    puntuacionMePlantoElemento.innerHTML = mensaje;
  };
};

export const colocarCartaDadaVuelta = () :void => {
  const carta = document.getElementById("carta");
  if (carta != null && carta!= undefined && carta instanceof HTMLImageElement) {
    carta.src = cartas.back;
  };
};

export const reiniciarMensajes = () :void => {
  const puntuacionMePlantoElemento = document.getElementById("puntuacion-me-planto");
  const textoQueHubieraPasado = document.getElementById("que-hubiera-pasado");

  if (puntuacionMePlantoElemento != null && puntuacionMePlantoElemento != undefined && puntuacionMePlantoElemento instanceof HTMLDivElement) {
    puntuacionMePlantoElemento.innerHTML = "";
  };

  if (textoQueHubieraPasado != null && textoQueHubieraPasado != undefined && textoQueHubieraPasado instanceof HTMLDivElement) {
    textoQueHubieraPasado.innerHTML = ""
  };
}


export const pintarIntentos = (intentos : number) : void => {
  const intentosElemento = document.getElementById("intentos");

  if (intentosElemento) {
    intentosElemento.innerHTML = `Intentos: ${intentos}`;
  };

};

export const queHubieraPasado = () : void => {
  const textoQueHubieraPasado = document.getElementById("que-hubiera-pasado");
    if (textoQueHubieraPasado != null && textoQueHubieraPasado != undefined && textoQueHubieraPasado instanceof HTMLDivElement) {
      textoQueHubieraPasado.innerHTML = "Quieres ver cual hubiera sido la siguiente carta? 👇 "
    };

    habilitaBotonVerCarta();
};

export const verSiguienteCarta = () : void => {
  const numero : number = calculaValorCartaValido(generaNumeroAleatorio());
  pintarCarta(mostrarCarta(numero));
  if (BOTON_VER_CARTA != null && BOTON_VER_CARTA != undefined && BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.disabled = true;
  };
};
