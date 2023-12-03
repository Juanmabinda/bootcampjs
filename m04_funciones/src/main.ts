import "./style.css";

// Turnos
/*
Se agrega una validación para que el número de turno no sea negativo tanto
cuando se presiona el botón "Anterior" o se define un nuevo turno.
 */

function reset() {
  const turno = document.getElementById("numero-turno");
  if (turno !== null && turno !== undefined) {
    turno.innerHTML = "00";
  };
};

function restar() {
  const turno = document.getElementById("numero-turno");
  if (turno !== null && turno !== undefined) {
  let turnoActual = parseInt(turno.innerHTML);
  const nuevoTurno = turnoActual -= 1;
  if (turnoActual >= 0) {
    turno.innerHTML = nuevoTurno.toString().padStart(2, "0");
  };
  };
};

function sumar() {
  const turno = document.getElementById("numero-turno");
  if (turno !== null && turno !== undefined) {
    let turnoActual = parseInt(turno.innerHTML);
    const nuevoTurno = turnoActual += 1;
    turno.innerHTML = nuevoTurno.toString().padStart(2, "0");
  }

};

function definirTurno() {
  const turno = document.getElementById("numero-turno");
  const nuevoTurno = parseInt((document.getElementById("cambiar-numero") as HTMLInputElement).value);
  if (nuevoTurno >= 0) {
    if (turno !== null && turno !== undefined) {
      turno.innerHTML = nuevoTurno.toString().padStart(2, "0");
    };
  };
};


const siguiente = document.getElementById("siguiente");
if (siguiente !== null && siguiente !== undefined) {
  siguiente.addEventListener("click", sumar);
};

const anterior = document.getElementById("anterior");
if (anterior !== null && anterior !== undefined) {
  anterior.addEventListener("click", restar);
};

const resetear = document.getElementById("reset");
if (resetear !== null && resetear !== undefined) {
  resetear.addEventListener("click", reset);
};

const definir = document.getElementById("cambiar-turno");
if (definir !== null && definir !== undefined) {
  definir.addEventListener("click", definirTurno);
};
