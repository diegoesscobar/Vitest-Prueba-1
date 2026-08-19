export class Alumno {
  constructor(
    public nombre: string,
    public edad: number

  ) {}
  obtenerEstado(): string {
    return this.edad >= 18 ? "Mayor de edad" : "Menor de edad";
  }
  esMayorDeEdad(): boolean {
    return this.edad >= 18;
    
    
  }
}
