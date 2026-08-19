export class Persona {
  constructor(
    public nombre: string,
    public legajo: number
    ) {}}


    
//Persona se extiende de Profesor, lo que significa que hereda sus propiedades y métodos. 
public class Profesor extends Persona {
    constructor(
        nombre: string,
        legajo: number
    )
        super(nombre, legajo);




//Alumno se extiende de Persona, lo que significa que hereda sus propiedades y métodos.
export class Alumno extends Persona {
    constructor(
        nombre: string,
        legajo: number
    ) {
        super(nombre, legajo);
    }
}
