import {suma, multiplica} from './modulos/controller.js'
import chalk from 'chalk';

const sum = suma(1, 2);
const producto = multiplica(4, 5)


console.log(chalk.green(`Hola aquí está el resultado de tus funciones: obtuviste con la suma ${suma(1, 2)} y con el producto ${multiplica(4, 5)}`));

