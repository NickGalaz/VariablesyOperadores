// EJERCICIO 1 y 2

// Se piden los números al usuario y se transforman a número (entero)
const num1 = parseInt(prompt("Ingresa un número mayor a 0", 10));
const num2 = parseInt(prompt("Ingresa otro número, diferente al anterior y también mayor a 0", 5));

const suma = num1 + num2;
const resta = num1 - num2;
let division = (num1 / num2);
// Dejar division con 2 decimales
division = division.toFixed(2);
const multiplicacion = num1 * num2;
const modulo = num1 % num2;

// Se escriben los resultados en el HTML
document.write(`<h1>La suma de esos números es: ${suma}</h1>`);
document.write(`<h1>La resta es: ${resta}</h1>`);
document.write(`<h1>La división es: ${division}</h1>`);
document.write(`<h1>El módulo es: ${modulo}</h1>`);


//Ejercicio 3
var celsius = +prompt("Ingresa la temperatura en grados celsius");
//transforma a kelvin
var kelvin = celsius + 273.15;
// transforma a farenheith
var faren = (celsius * 9 / 5) + 32;
/*muestra la conversion de unidades*/
document.write(`<h1>La temperatura celsius a farenheith es:  ${faren}</h1>`);
document.write(`<h1>y la temperatura celsius a kelvin es:  ${kelvin}</h1>`);


// EJERCICIO 4
// Se le pide al usuario ingresar cantidad de días
const cantDias = parseInt(prompt("Ingresa una cantidad de días", 373));
// Se calculan los años, redoneando el número con Math.floor()
let anyos = Math.floor(cantDias / 365);
// Cálculo del módulo, es decir, cuántos días restan
let resto_anyos = Math.floor(cantDias % 365);
// En base al módulo se calculan las semanas restantes
let semanas = Math.floor(resto_anyos / 7);
// Cálculo del módulo para las semanas, lo que nos da los días
let dias = Math.floor(resto_anyos % 7);

document.write(`<h1>${cantDias} días equivalen a ${anyos} año(s), ${semanas} semana(s) y ${dias} día(s)</h1>`);


// EJERCICIO 5
//se solicita el ingreso de los numeros
var numero1 = +prompt("ingresa numero 1");
var numero2 = +prompt("ingresa numero 2");
var numero3 = +prompt("ingresa numero 3");
var numero4 = +prompt("ingresa numero 4");
var numero5 = +prompt("ingresa numero 5");

/*se realiza la suma y el promedio*/
total = numero1 + numero2 + numero3 + numero4 + numero5;
prom = total / 5;

/*muestra resultados*/
document.write(`<h1>La suma de los numeros ingresados es: ${total} </h1>`);
document.write(`<h1>El Promedio de los es: ${prom}</h1>`);
