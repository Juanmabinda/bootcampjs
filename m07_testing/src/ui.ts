import {
  partida,
  cartas
} from "./modelo";


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

  if (carta instanceof HTMLImageElement) {
    carta.src = srcCartaBack;
  };
};

export const habilitaBotonVerCarta = () :void => {
  const botonVerCarta : HTMLElement | null = document.getElementById("ver-carta");
  if (botonVerCarta instanceof HTMLButtonElement) {
    botonVerCarta.disabled = false;
  };
};

export const deshabilitaBotonDameCarta = () : void => {
  const botonDameCarta : HTMLElement | null = document.getElementById("dame-carta");
  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = true;
  };
}

export const habilitaBotonDameCarta = () : void => {
  const botonDameCarta : HTMLElement | null = document.getElementById("dame-carta");
  if (botonDameCarta instanceof HTMLButtonElement) {
    botonDameCarta.disabled = false;
  };
}

export const deshabilitaBotonVerCarta = () : void => {
  const botonVerCarta : HTMLElement | null = document.getElementById("ver-carta");
  if (botonVerCarta instanceof HTMLButtonElement) {
    botonVerCarta.disabled = true;
  };
}

export const habilitaBotonNuevaPartida = () : void => {
  const botonNuevaPartida : HTMLElement | null = document.getElementById("nueva-partida");
  if (botonNuevaPartida instanceof HTMLButtonElement) {
    botonNuevaPartida.disabled = false;
  };
};

export const habilitaBotonMePlanto = () : void => {
  const botonMePlanto : HTMLElement | null = document.getElementById("me-planto");
  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = false;
  };
};

export const deshabilitaBotonMePlanto = () : void => {
  const botonMePlanto : HTMLElement | null = document.getElementById("me-planto");
  if (botonMePlanto instanceof HTMLButtonElement) {
    botonMePlanto.disabled = true;
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
  const botonVerCarta : HTMLElement | null = document.getElementById("ver-carta");
  mostrarCarta(numero);
  if (botonVerCarta instanceof HTMLButtonElement) {
    botonVerCarta.disabled = true;
  };
};
