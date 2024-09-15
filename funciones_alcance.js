/* 1- Funciones: Crea una función que tome dos números como parámetros y
devuelva su suma.
Crea una función que tome un arreglo de números como parámetro y
devuelva el promedio de esos números.*/

//Creo las funciones
function devuelveSuma(numero1, numero2){
    return numero1 + numero2;
}

function devuelvePromedio(arreglo){
    let cantidad  = arreglo.length;
    var suma = 0;
    for(let i=0;i<cantidad;i++){
        suma += arreglo[i];
    }
    return suma / cantidad;
}

//Las utilizo y muestro
console.log(devuelveSuma(4,6));
console.log(devuelvePromedio([8,7,8.5,3,6.5,6]));

/*2- Alcance de Variables:
Dentro de una función, declara una variable local y otra global con el
mismo nombre. Muestra ambas variables dentro y fuera de la función
para observar el alcance de cada una.
*/
//Declaro la variable global
var hola = "Hola Mundo";

//Declaro la funcion
function alcance(){
    //Declaro la variable local
    var hola = "Mundo Hola";
    //Muestro variables dentro de la funcion
    console.log(hola);
};

//Utilizo la funcion
alcance();

//Muestro variables fuera de la funcion
console.log(hola);