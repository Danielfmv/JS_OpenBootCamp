// Una variable que contenga la lista de la compra (mínimo 5 elementos)

const lista_compras = ["Arroz", "Frijol", "Leche", "Huevos", "Verduras", "Carne"]

// Modifica la lista de la compra y añádele "Aceite de Girasol"

lista_compras.push("Aceite de Girasol")
console.log(lista_compras)

// Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

lista_compras.pop("Aceite de Girasol")
console.log(lista_compras)

// Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

const lista_peliculas = [
    { titulo: "El club de la pelea", director: "David Fincher", fecha:1999 },
    { titulo: "El Señor de los Anillos", director: "Peter Jackson", fecha: 2001},
    { titulo: "Alita Battle Angel", director: "Robert Rodriguez", fecha:2019 }
]

// Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

const peliculas_2010 = lista_peliculas.filter(pel => pel.fecha > 2010)
console.log(peliculas_2010)

// Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

const directores = lista_peliculas.map(dir => dir.director)
console.log(directores)

// Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

const titulos = lista_peliculas.map(title => title.titulo)
console.log(titulos)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

const dir_title = directores.concat(titulos)
console.log(dir_title)

// Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)

const dir_title_prop = [...directores, ...titulos]
console.log(dir_title_prop)















