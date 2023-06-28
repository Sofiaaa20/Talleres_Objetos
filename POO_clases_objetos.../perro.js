/*1. Crea una clase llamada "Perro" con un atributo llamado "nombre". Agrega un método llamado ladrar() que imprima en la consola "¡Woof!" junto al nombre del perro. */

class Perro {

    constructor(nombre){
        this.nombre = nombre
    }

    ladrar(){
        return "Woof "+this.nombre;
    }

}
let perrito = new Perro("Canela");
console.log(perrito.ladrar());