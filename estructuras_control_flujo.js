/*1- if/else: Crea una función que tome un número como parámetro e imprima si
es positivo, negativo o cero.*/
//Declaro la funcion
function probandoIfElse(numero){
    if(numero > 0){
        console.log("Es positivo");
    }else if(numero < 0){
        console.log("Es negativo");
    }else{
        console.log("Es cero");
    }
};
//Utilizo la funcion pasandole un numero
probandoIfElse(-14);

/*2- switch: Crea una función que tome un número del 1 al 7 como parámetro e
imprima el día de la semana correspondiente utilizando switch.*/
//Declaro la funcion
function probandoSwitch(numero){
    switch(numero){
        case 1:
            console.log("Lunes");
            break;
        case 2:
            console.log("Martes");
            break;
        case 3:
            console.log("Miercoles");
            break;
        case 4:
            console.log("Jueves");
            break;
        case 5:
            console.log("Viernes");
            break;
        case 6:
            console.log("Sabado");
            break;
        case 7:
            console.log("Domingo");
            break;
        default:
            console.log("El valor ingresado no es valido.");
            break;
    }
};

//Utilizo la funcion
probandoSwitch(4);

/*3- while: Utiliza un bucle while para imprimir los números del 1 al 5.*/
//Declaro una variable contador y la utilizo en el bucle while
let contador=1;
while(contador <= 5){
    console.log(contador);
    contador++;
};

/*4- for: Utiliza un bucle for para imprimir los números pares del 2 al 10.*/
//Declaro mi variable para asignar un limite al bucle
let limite = 10;
for(let i=1;i<=limite;i++){
    if((i%2)==0){
        console.log(i);
    }
};