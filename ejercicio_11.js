class Estudiante {
    constructor(nombre, asignaturas = ["Javascript", "HTML", "CSS"]) {
        this.nombre = nombre
        this.asignaturas = asignaturas
    }
    
    obtenDatos() {
        return {
            nombre: this.nombre,
            asignaturas: this.asignaturas

        }
    }     
}

let nuevo_estudiante = new Estudiante("Jorge")
console.log(nuevo_estudiante.obtenDatos())



