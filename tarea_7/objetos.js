// Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)

const datos_pers = {
    nombre: "Daniel",
    apellido: "Moreno",
    edad: 27,
    altura: 1.78,
    eresDesarrollador: true
};

// Una variable que obtenga tu edad a partir del objeto anterior

const edad = datos_pers.edad;
console.log(edad)

// Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales 
// de tus dos mejores amig@s

const lista_datos = [
    datos_pers,
    amigo1 = { nombre: "Cristian", apellido: "Fuquen", edad: 26, altura: 1.74, eresDesarrollador: false},
    amigo2 = { nombre: "Maria", apellido: "López", edad: 28, ltura: 1.65, eresDesarrollador: false}
]

console.log(lista_datos)

// Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor

const mayor_amenor = lista_datos.sort((a, b) => b.edad -a.edad);

console.log(mayor_amenor)