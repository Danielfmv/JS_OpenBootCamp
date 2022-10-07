// La fecha de hoy

const fecha_actual = new Date();
console.log(fecha_actual)

// La fecha de tu nacimiento

const nacimiento = new Date(1995, 1, 24, 23, 48, 51);
console.log(nacimiento)

// Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento

const tarde = fecha_actual > nacimiento;
console.log(tarde)

// Una variable que contenga el día de tu nacimiento

const dia_nacimiento = nacimiento.getDate();
console.log(dia_nacimiento)

// Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)

const mes_nacimiento = nacimiento.getMonth();
console.log(mes_nacimiento)

// Una variable que contenga el año de tu nacimiento (con 4 dígitos)

const año_nacimiento = nacimiento.getFullYear();
console.log(año_nacimiento)









