// Una cadena de texto con tu Nombre

let str_nombre = "Daniel Felipe";

// Otra cadena de texto con tu Apellido

let str_apellido = "Moreno Villamil";

// Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido 
// con un espacio entre medias

let str_estudiante = str_nombre.concat(" ", str_apellido);
console.log(str_estudiante)

// Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante 
// pero todo en mayúsculas

let str_estudianteMayus = str_estudiante.toUpperCase();
console.log(str_estudianteMayus)

// Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante 
// pero todo en minúsculas

let str_estudianteMinus = str_estudiante.toLowerCase();
console.log(str_estudianteMinus)

// Una variable que contenga el número de letras de la cadena "estudiante" contando 
// los espacios

let longitud_est = str_estudiante.length;
console.log(longitud_est)

// Una variable que contenga la primera letra del Nombre

let first_let_nom = str_nombre[0];
console.log(first_let_nom)

// Otra variable que contenga la última letra del Apellido

console.log(str_apellido.length) // --> 15

let last_let_ape = str_apellido[14];
console.log(last_let_ape)

// Una cadena de texto que elimine los espacios de la variable "estudiante"

let str_est_sinesp = str_estudiante.replace(/ /g, "");
console.log(str_est_sinesp)

// Una variable booleana que diga si el Nombre está contenido en la 
// variable "estudiante"

let bool_var = str_estudiante.includes(str_nombre);
console.log(bool_var)

