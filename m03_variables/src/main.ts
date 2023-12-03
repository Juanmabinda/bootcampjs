import "./style.css";

// Grupos musicales

interface grupoMusical {
  nombre: string;
  año: number;
  activo: boolean;
  genero: string;
};

const estilo: string = "font-weigth: bold; font-size: 2rem; background-color: green";

const popRock: string = "Pop Rock";
const rock: string = "Rock";
const hardRock: string = "Hard Rock";
const clasica: string = "Clásica";

const grupo1 : grupoMusical = {
  nombre: "The Beatles",
  año: 1960,
  activo: true,
  genero: popRock
};

const grupo2 : grupoMusical = {
  nombre: "Queen",
  año: 1970,
  activo: false,
  genero: rock
};

const grupo3 : grupoMusical = {
  nombre: "AC DC",
  año: 1973,
  activo: true,
  genero: hardRock
};

const grupo4 : grupoMusical = {
  nombre: "Ludwing van Beethoven",
  año: 1770,
  activo: false,
  genero: clasica
};

const grupo5 : grupoMusical = {
  nombre: "The Rolling Stones",
  año: 1962,
  activo: true,
  genero: rock
};

console.log(`%c${grupo1.nombre}`, estilo);
console.log(`Año: ${grupo1.año}`);
console.log(`Activo: ${grupo1.activo}`);
console.log(`Género: ${grupo1.genero}`);

console.log(`%c${grupo2.nombre}`, estilo);
console.log(`Año: ${grupo2.año}`);
console.log(`Activo: ${grupo2.activo}`);
console.log(`Género: ${grupo2.genero}`);

console.log(`%c${grupo3.nombre}`, estilo);
console.log(`Año: ${grupo3.año}`);
console.log(`Activo: ${grupo3.activo}`);
console.log(`Género: ${grupo3.genero}`);

console.log(`%c${grupo4.nombre}`, estilo);
console.log(`Año: ${grupo4.año}`);
console.log(`Activo: ${grupo4.activo}`);
console.log(`Género: ${grupo4.genero}`);

console.log(`%c${grupo5.nombre}`, estilo);
console.log(`Año: ${grupo5.año}`);
console.log(`Activo: ${grupo5.activo}`);
console.log(`Género: ${grupo5.genero}`);
