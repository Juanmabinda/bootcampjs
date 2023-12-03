import "./style.css";

// Turnos
/*
Se agrega una validación para que el número de turno no sea negativo tanto
cuando se presiona el botón "Anterior" o se define un nuevo turno.
 */

function reset() : void {
  const turno : HTMLElement | null = document.getElementById("numero-turno");
  if (turno !== null && turno !== undefined) {
    turno.innerHTML = "00";
  };
};

function restar() : void {
  const turno : HTMLElement | null = document.getElementById("numero-turno");
  if (turno !== null && turno !== undefined) {
  let turnoActual : number = parseInt(turno.innerHTML);
  const nuevoTurno : number = turnoActual -= 1;
  if (turnoActual >= 0) {
    turno.innerHTML = nuevoTurno.toString().padStart(2, "0");
  };
  };
};

function sumar() : void {
  const turno : HTMLElement | null = document.getElementById("numero-turno");
  if (turno !== null && turno !== undefined) {
    let turnoActual : number = parseInt(turno.innerHTML);
    const nuevoTurno : number = turnoActual += 1;
    turno.innerHTML = nuevoTurno.toString().padStart(2, "0");
  }

};

function definirTurno() : void {
  const turno : HTMLElement | null = document.getElementById("numero-turno");
  const nuevoTurno : HTMLElement | null = document.getElementById("cambiar-numero");
  if (nuevoTurno !== null && nuevoTurno !== undefined) {
    if(parseInt((nuevoTurno as HTMLInputElement).value) >= 0) {
      if (turno !== null && turno !== undefined) {
        turno.innerHTML = (nuevoTurno as HTMLInputElement).value.toString().padStart(2, "0");
        (nuevoTurno as HTMLInputElement).value = "";
      };
    };
  }
};


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
