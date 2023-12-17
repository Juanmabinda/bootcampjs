import {
  partida,
  cartas
} from "./modelo";

import {
  mostrarCarta,
  calculaValorCartaValido,
  generaNumeroAleatorio
} from "./motor";


export const muestraPuntuacion = () : void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion != null && elementoPuntuacion != undefined && elementoPuntuacion instanceof HTMLDivElement) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${partida.puntuacion.toString()}`;
  };
};



export const habilitaBotonVerCarta = () :void => {
  const botonVerCarta = document.getElementById("ver-carta");
  if (botonVerCarta instanceof HTMLButtonElement) {
    botonVerCarta.disabled = false;
  };
};

export const pintarCarta = (cartaParaMostrar : string) : void => {
  const carta = document.getElementById("carta");
  if (carta instanceof HTMLImageElement) {
    carta.src = cartaParaMostrar;
  };
};

export const deshabilitaBotonDameCarta = () : void => {
  const botonDameCarta = document.getElementById("dame-carta");
  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = true;
  };
}

export const habilitaBotonDameCarta = () : void => {
  const botonDameCarta = document.getElementById("dame-carta");
  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = false;
  };
}

export const deshabilitaBotonVerCarta = () : void => {
  const botonVerCarta = document.getElementById("ver-carta");
  if (botonVerCarta instanceof HTMLButtonElement) {
    botonVerCarta.disabled = true;
  };
}

export const habilitaBotonNuevaPartida = () : void => {
  const botonNuevaPartida = document.getElementById("nueva-partida");
  if (botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.disabled = false;
  };
};

export const habilitaBotonMePlanto = () : void => {
  const botonMePlanto = document.getElementById("me-planto");
  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = false;
  };
};

export const deshabilitaBotonMePlanto = () : void => {
  const botonMePlanto = document.getElementById("me-planto");
  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = true;
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
  if (carta != null && carta != undefined && carta instanceof HTMLImageElement) {
    carta.src = cartas.back;
  };
};

export const reiniciarMensajes = () :void => {
  const puntuacionMePlantoElemento = document.getElementById("puntuacion-me-planto");
  const textoQueHubieraPasado = document.getElementById("que-hubiera-pasado");

  if (puntuacionMePlantoElemento) {
    puntuacionMePlantoElemento.innerHTML = "";
  };


  if (textoQueHubieraPasado) {
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
};;

export const verSiguienteCarta = () : void => {
  const numero : number = calculaValorCartaValido(generaNumeroAleatorio());
  const botonVerCarta = document.getElementById("ver-carta");
  mostrarCarta(numero);
  if (botonVerCarta != null && botonVerCarta !== undefined && botonVerCarta instanceof HTMLButtonElement) {
    botonVerCarta.disabled = true;
  };
};
