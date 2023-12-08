import { partida } from "./modelo";
import * as motor from "./motor";
import { vi } from "vitest";


describe("Comprobar si ha ganado el juego", () => {

  it("Al obtener una puntuación igual a 7.5, se gana el juego", () => {
    // Arrange
    partida.puntuacion = 7.5;
    const resultadoEsperado : string = "Esaaaaa! Felicitaciones!! 🎉🎉🎉🎊";

    // Act
    const resultado : string = motor.puntuacionFinal()

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Al obtener una puntuación mayor a 7.5, se pierde el juego", () => {
    // Arrange
    const resultadoEsperado : string = "Perdiste 😵";
    partida.puntuacion = 8;

    // Act
    const resultado : string = motor.puntuacionFinal();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });

  it("Al obtener una puntuación menor a 5 debería indicar que el jugador fue muy conservador", () => {
    // Arrange
    const resultadoEsperado : string = "Fuiste muy conservador/a! 😝";
    partida.puntuacion = 3;

    // Act
    const resultado : string = motor.puntuacionFinal();

    // Assert
    expect(resultado).toBe(resultadoEsperado);
  });


  describe("generaCartaAleatoria", () => {

    it("generaCartaAleatoria devuelve 10 si numeroAleatorio es igual a 8", () => {
      // Arrange
      const resultadoEsperado : number = 10;
      vi.spyOn(global.Math, "random").mockReturnValue(0.8);
      const numeroAleatorio : number = motor.generaNumeroAleatorio();

      // Act
      const resultado : number = motor.generaCartaAleatoria(numeroAleatorio);

      // Assert
      expect(resultado).toBe(resultadoEsperado)
    });

    it("generaCartaAleatoria debería devolver 11 si numeroAleatorio es igual a 9", () => {
      // Arrange
      const resultadoEsperado : number = 11;
      vi.spyOn(global.Math, "random").mockReturnValue(0.9)
      const numeroAleatorio : number = motor.generaNumeroAleatorio()

      // Act
      const resultado : number = motor.generaCartaAleatoria(numeroAleatorio)

      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });

  });

  describe("Devuelve y suma el valor de la carta obtenida", () => {
    it("Al sacar AS, debería sumar 1 a la puntuación", () => {
      // Arrange
      partida.puntuacion = 0;
      const resultadoEsperado : number = 1;
      vi.spyOn(global.Math, "random").mockReturnValue(0.05)
      const numeroAleatorio : number = motor.generaCartaAleatoria(motor.generaNumeroAleatorio());

      // Act
      const resultado = motor.sumarPuntuacion(numeroAleatorio);

      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });

    it("Al sacar rey, debería sumar 0.5 a la puntuación", () => {
      // Arrange
      partida.puntuacion = 0;
      const resultadoEsperado : number = 0.5;
      vi.spyOn(global.Math, "random").mockReturnValue(0.99)
      const numeroAleatorio : number = motor.generaCartaAleatoria(motor.generaNumeroAleatorio());

      // Act
      const resultado = motor.sumarPuntuacion(numeroAleatorio);

      // Assert
      expect(resultado).toBe(resultadoEsperado);
    });
  });

});
