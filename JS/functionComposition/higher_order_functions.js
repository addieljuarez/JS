// funciones de alto orden 
// https://yeisondaza.com/funciones-de-alto-orden-en-javascript

// https://davidwalsh.name/javascript-objects-deconstruction

// las funciones son ciudadanos de primera clase 
// las funciones son objetos. 
// y estas pueden ser:
// - almacenadas en variables 
// - Pasadas como argumentos 
// - Retornadas funciones 


// 1.- Almacenadas en variables
// primero normal
function porTres(numero){
    return numero * 3;
}

console.log(porTres(10)); // 30

// ahora la almacenamos en variables 
const porTres2 = (numero) => porTres(3)
const multiplicaPorTres = porTres2;
// Poder almacenar una función en una variable.

console.log(multiplicaPorTres(10)); //30




// // pasar como argumento (callback)
// button.addEventlistener('click', clickAlert);

// function clickAlert(){
//     alert('touch me');
// }





// Regresar funciones
console.log('ejemplo 1 de regresar funciones');
function masGrandeQue(n){
    return m => m > n;
}

const masGrandeQue10 = masGrandeQue(10);
const masGrandeQue20 = masGrandeQue(20);

console.log('masGrandeQue10(12)', masGrandeQue10(12))
console.log('masGrandeQue20(12)', masGrandeQue20(12))

console.log('============================================')


// ejemplo 2 de regresar funciones
console.log('ejemplo 2 de regresar funciones');
let reemplace = texto => texto.replace(/mal/ig,"increible");

console.log(reemplace('JavaScript es un mal lenguaje'));


console.log('============================================')