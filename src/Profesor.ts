export class Profesor
            extends Persona {


  constructor(
     nombre: string,
     legajo: number
    ) {

   super (nombre, legajo);
   
   this.nombre = nombre;
   this.legajo = legajo;
    }}
    