array = []
contador_1 = 0
contador_2 = 1

function fibonacci(num) {
    for (let i = 1; i <= num; i++) {
        acumulado = contador_1 + contador_2;
        contador_1 = contador_2;
        contador_2 = acumulado;
        //console.log(contador_1)
        array.push(contador_1)
    }
}

fibonacci(10)
console.log(array);