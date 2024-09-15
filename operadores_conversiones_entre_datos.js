//1- Operadores aritmeticos: declara 2 variables numericas y realiza las siguientes operaciones
//Declaracion de variables
let numero1 = 14;
let numero2 = 3;
var resultado = 0;
//Realizo las operaciones y las muestro
resultado = numero1 + numero2;
console.log("Suma: "+resultado);
resultado = numero1 - numero2;
console.log("Resta: "+resultado);
resultado = numero1 / numero2;
console.log("Division: "+resultado);
resultado = numero1 * numero2;
console.log("Multiplicacion: "+resultado);
resultado = numero1 % numero2;
console.log("Modulo: "+resultado);

/*2- Operadores de comparacion: declara 2 variables y utiliza los operadores de comparación para
verificar si son iguales y si son diferentes*/
//Declaro variables
let num1 = 4;
let num2 = 4;

//Realizo las comparaciones y las muestro
resultado = (num1 == num2);
console.log("Son iguales: "+resultado);
resultado = (num1 != num2);
console.log("Son distintas: "+resultado);

//3- Operadores logicos: Declara dos variables booleanas y utiliza los operadores lógicos &&, || y !.
//Declaro variables
let boolean1 = true;
let boolean2 = false;

//Utilizo los operadores logicos y muestro
resultado = (boolean1 && boolean2);
console.log("AND: "+resultado);
resultado = (boolean1 || boolean2);
console.log("OR: "+resultado);
resultado = (boolean1);
console.log("NO SON: "+resultado);

/*4- Conversion entre tipos de datos: convierte una variable de tipo string a number, una de number 
a string y una de boolean a string*/
//Declaro variables
let string = "22";
let number = 255;
let boolean = false;

//Convierto las variables y las muestro
resultado = parseInt(string);
console.log(resultado);
resultado = number.toString();
console.log(resultado);
resultado = boolean.toString();
console.log(resultado);