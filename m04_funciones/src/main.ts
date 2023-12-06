import "./style.css";

// Turnos
/*
Se agrega una validación para que el número de turno no sea negativo tanto
cuando se presiona el botón "Anterior" o se define un nuevo turno.
 */

const eventos = () : void => {
  const siguiente : HTMLElement | null = document.getElementById("siguiente");
  if (siguiente !== null && siguiente !== undefined) {
    siguiente.addEventListener("click", sumar);
  };

  const anterior : HTMLElement | null = document.getElementById("anterior");
  if (anterior !== null && anterior !== undefined) {
    anterior.addEventListener("click", restar);
  };

  const resetear : HTMLElement | null = document.getElementById("reset");
  if (resetear !== null && resetear !== undefined) {
    resetear.addEventListener("click", reset);
  };

  const definir : HTMLElement | null = document.getElementById("cambiar-turno");
  if (definir !== null && definir !== undefined) {
    definir.addEventListener("click", definirTurno);
  };

};

document.addEventListener("DOMContentLoaded", eventos);

let turno : number = 0;

function reset() : void {
  turno = 0;
  pintarTurno();
};

function restar() : void {
  if (turno > 0) {
    turno--;
    pintarTurno();
  };
};

function sumar() : void {
  turno++;
  pintarTurno();
};

function definirTurno() : void {
  const nuevoTurno : HTMLElement | null = document.getElementById("cambiar-numero");

  if (nuevoTurno !== null && nuevoTurno !== undefined) {
    if (nuevoTurno instanceof HTMLInputElement) {
      if(parseInt(nuevoTurno.value) >= 0) {
        turno = parseInt(nuevoTurno.value.padStart(2, "0"));
        pintarTurno()
        };
      };
    }
  };

const pintarTurno = () :void => {
  const pintarTurnoElement : HTMLElement | null = document.getElementById("numero-turno");
  if (turno >= 0) {
    if (pintarTurnoElement) {
      pintarTurnoElement.innerHTML = turno.toString().padStart(2, "0");
    };
  };
};
