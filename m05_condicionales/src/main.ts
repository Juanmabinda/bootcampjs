import "./style.css";

const eventos = () :void => {
  if(BOTON_ME_PLANTO != null && BOTON_ME_PLANTO != undefined && BOTON_ME_PLANTO instanceof HTMLButtonElement) {
    BOTON_ME_PLANTO.addEventListener("click", mePlanto);
  };

  if (BOTON_DAME_CARTA != null && BOTON_DAME_CARTA != undefined && BOTON_DAME_CARTA instanceof HTMLButtonElement) {
    BOTON_DAME_CARTA.addEventListener("click", function() { dameCarta() } );
  };

  if (BOTON_NUEVA_PARTIDA != null && BOTON_NUEVA_PARTIDA != undefined && BOTON_NUEVA_PARTIDA instanceof HTMLButtonElement) {
    BOTON_NUEVA_PARTIDA.addEventListener("click", comenzarNuevaPartida);
  };

  if(BOTON_VER_CARTA != null && BOTON_VER_CARTA != undefined && BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.addEventListener("click", function() { verSiguienteCarta() } );
  };
};

document.addEventListener("DOMContentLoaded", eventos);

interface Cartas {
  back: string;
  as: string;
  dos: string;
  tres: string;
  cuatro: string;
  cinco: string;
  seis: string;
  siete: string;
  sota: string;
  caballo: string;
  rey: string;
};

const cartas : Cartas = {
  back: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/back.jpg",
  as: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/1_as-copas.jpg",
  dos: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/2_dos-copas.jpg",
  tres: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/3_tres-copas.jpg",
  cuatro: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/4_cuatro-copas.jpg",
  cinco: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/5_cinco-copas.jpg",
  seis: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/6_seis-copas.jpg",
  siete: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/7_siete-copas.jpg",
  sota: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/10_sota-copas.jpg",
  caballo: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/11_caballo-copas.jpg",
  rey: "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/cartas/copas/12_rey-copas.jpg"
};

let puntuacion : number = 0;

const BOTON_DAME_CARTA = document.getElementById("dame-carta");
const BOTON_ME_PLANTO = document.getElementById("me-planto");
const BOTON_NUEVA_PARTIDA = document.getElementById("nueva-partida");
const BOTON_VER_CARTA = document.getElementById("ver-carta");


const muestraPuntuacion = () : void => {
  const elementoPuntuacion = document.getElementById("puntuacion");
  if (elementoPuntuacion != null && elementoPuntuacion != undefined && elementoPuntuacion instanceof HTMLDivElement) {
    elementoPuntuacion.innerHTML = `Tu puntuación: ${puntuacion.toString()}`;
  };
};

const generaNumeroAleatorio = () : number => {
  let numeroAleatorio : number = Math.floor(Math.random() * 10) + 1;
  return numeroAleatorio
};

const calculaValorCartaValido = (numeroAleatorio : number) : number => {
  if (numeroAleatorio > 7) {
    numeroAleatorio += 2;
  };

  return numeroAleatorio;
};

const dameCarta = () : void => {
  const numero : number = calculaValorCartaValido(generaNumeroAleatorio());
  pintarCarta(mostrarCarta(numero));
  sumarPuntuacion(asignaPuntuacion(numero));
  muestraPuntuacion();
  comprobarPartida();
};

const comprobarPartida = () => {
  if (puntuacion >= 7.5) {
    puntuacionFinal();
    deshabilitaBotonMePlanto();
    deshabilitaBotonDameCarta();
  }else {
    habilitaBotonMePlanto();
    habilitaBotonNuevaPartida();
  };
};


const asignaPuntuacion = (numero : number) : number => {
  let puntuacion : number = 0;
  numero <= 7
  ? puntuacion = numero
  : puntuacion = 0.5;

  return puntuacion;
};


const mostrarCarta = (numero : number) : string => {
  let srcCartaBack : string = cartas.back;

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

  return srcCartaBack;
};

const pintarCarta = (cartaParaMostrar : string) : void => {
  const carta = document.getElementById("carta");
  if (carta instanceof HTMLImageElement) {
    carta.src = cartaParaMostrar;
  };
};

const habilitaBotonVerCarta = () :void => {
  if (BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.disabled = false;
  };
};

const deshabilitaBotonDameCarta = () : void => {
  if (BOTON_DAME_CARTA instanceof HTMLButtonElement) {
    BOTON_DAME_CARTA.disabled = true;
  };
}

const habilitaBotonDameCarta = () : void => {
  if (BOTON_DAME_CARTA instanceof HTMLButtonElement) {
    BOTON_DAME_CARTA.disabled = false;
  };
}

const deshabilitaBotonVerCarta = () : void => {
  if (BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.disabled = true;
  };
}

const habilitaBotonNuevaPartida = () : void => {
  if (BOTON_NUEVA_PARTIDA instanceof HTMLButtonElement) {
    BOTON_NUEVA_PARTIDA.disabled = false;
  };
};

const habilitaBotonMePlanto = () : void => {
  if (BOTON_ME_PLANTO instanceof HTMLButtonElement) {
    BOTON_ME_PLANTO.disabled = false;
  };
};

const deshabilitaBotonMePlanto = () : void => {
  if (BOTON_ME_PLANTO instanceof HTMLButtonElement) {
    BOTON_ME_PLANTO.disabled = true;
  };
};

const sumarPuntuacion = (numero : number) : void => {
  puntuacion += numero;
};

const mePlanto = () : void => {
  puntuacionFinal();
  deshabilitaBotonDameCarta();
  deshabilitaBotonMePlanto();
  queHubieraPasado();
};

const puntuacionFinal = () : void => {
  let mensaje : string = obtenerMensajeFinalPuntuacion();
  pintarMensajeFinal(mensaje);
};

const obtenerMensajeFinalPuntuacion = () :string => {
  let mensaje : string = "";

  if (puntuacion < 5) {
    mensaje = "Has sido muy conservador 🥴";
  } else if (puntuacion < 6 ) {
    mensaje = "Te ha entrado el canguelo eh? 🤭🤭";
  } else if (puntuacion >= 6 && puntuacion <= 7) {
    mensaje = "Casi casi... 🙃";
  } else if (puntuacion === 7.5) {
    mensaje = "¡Lo has clavado! ¡Enhorabuena! 🎉🎉🎉🎊";
  }else if(puntuacion > 7.5) {
    mensaje = "Lo siento, has perdido 😵";
  };

  return mensaje;
};


const pintarMensajeFinal = (mensaje : string) :void => {
  const puntuacionMePlantoElemento = document.getElementById("puntuacion-me-planto");
  if (puntuacionMePlantoElemento) {
    puntuacionMePlantoElemento.innerHTML = mensaje;
  };
};

const colocarCartaDadaVuelta = () :void => {
  const carta = document.getElementById("carta");
  if (carta != null && carta != undefined && carta instanceof HTMLImageElement) {
    carta.src = cartas.back;
  };
};

const reiniciarMensajes = () :void => {
  const puntuacionMePlantoElemento = document.getElementById("puntuacion-me-planto");
  const textoQueHubieraPasado = document.getElementById("que-hubiera-pasado");

  if (puntuacionMePlantoElemento != null && puntuacionMePlantoElemento != undefined && puntuacionMePlantoElemento instanceof HTMLDivElement) {
    puntuacionMePlantoElemento.innerHTML = "";
  };


  if (textoQueHubieraPasado != null && textoQueHubieraPasado != undefined && textoQueHubieraPasado instanceof HTMLDivElement) {
    textoQueHubieraPasado.innerHTML = ""
  };
}

const reiniciarPuntuacion = () => puntuacion = 0;


const comenzarNuevaPartida  = () : void => {
  colocarCartaDadaVuelta();
  reiniciarMensajes();
  reiniciarPuntuacion();
  muestraPuntuacion();
  habilitaBotonDameCarta();
  deshabilitaBotonVerCarta();
  deshabilitaBotonMePlanto();
};

const queHubieraPasado = () : void => {
  const textoQueHubieraPasado = document.getElementById("que-hubiera-pasado");
    if (textoQueHubieraPasado != null && textoQueHubieraPasado != undefined && textoQueHubieraPasado instanceof HTMLDivElement) {
      textoQueHubieraPasado.innerHTML = "Quieres ver cual hubiera sido la siguiente carta? 👇 "
    };

    habilitaBotonVerCarta();
};

const verSiguienteCarta = () : void => {
  const numero : number = calculaValorCartaValido(generaNumeroAleatorio())
  pintarCarta(mostrarCarta(numero));
  if (BOTON_VER_CARTA != null && BOTON_VER_CARTA != undefined && BOTON_VER_CARTA instanceof HTMLButtonElement) {
    BOTON_VER_CARTA.disabled = true;
  };
};
