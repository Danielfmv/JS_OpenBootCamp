// Una función sin parámetros que devuelva siempre "true"

function s_parametros() {
    return true
}

console.log(s_parametros())

// Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 
// 5 segundos después de haberse ejecutado

function promesa() {
    console.log("Hola soy una promesa")
}

//setTimeout(promesa, 5000)

// Una función generadora de índices pares automáticos

function* id_pares() {
    let id = 0
    while (true) {
        id += 2
        if (id == 20) {
            return id
        }
        yield id
    }
}

const gen = id_pares()

console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
