import { describe, expect, test } from "vitest";
import { Alumno } from "../src/Alumno";

describe("Alumno", () => {

  test("un alumno de 18 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Juan", 18);

    const resultado = alumno.esMayorDeEdad();

    expect(resultado).toBe(true);
  });

});  test("un alumno de 25 años debe ser mayor de edad", () => {
    const alumno = new Alumno("Ana", 25);

    expect(alumno.esMayorDeEdad()).toBe(true);
  });

  test("un alumno de 17 años no debe ser mayor de edad", () => {
    const alumno = new Alumno("Pedro", 17);

    expect(alumno.esMayorDeEdad()).toBe(false);
    
  });

  test("un alumno de 18 años debe tener el estado 'Mayor de edad'", () => {
    const alumno = new Alumno("Laura", 18);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });

  test ("un alumno de 16 años debe tener el estado 'Menor de edad'", () => {
    const alumno = new Alumno("Carlos", 16);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  }); 
  test("un alumno de 20 años debe tener el estado 'Mayor de edad'", () => {
    const alumno = new Alumno("Sofía", 20);
    expect(alumno.obtenerEstado()).toBe("Mayor de edad");
  });
  test("un alumno de 15 años debe tener el estado 'Menor de edad'", () => {
    const alumno = new Alumno("Diego", 15);
    expect(alumno.obtenerEstado()).toBe("Menor de edad");
  });
