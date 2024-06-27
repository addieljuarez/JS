// var a;
// console.log("El valor de a es " + a); // El valor de a es undefined

// console.log("El valor de b es " + b); // El valor de b es undefined
// var b;
// // Esto puede desconcertarte hasta que leas 'Elevación de variable' a continuación

// // console.log("El valor de c es " + c); // Error de referencia no detectado: c no está definida

// let x;
// console.log("El valor de x es " + x); // El valor de x es undefined

// console.log("El valor de y es " + y); // Error de referencia no detectada: y no está definida
// let y;



// if (true) {
//     var x = 5;
// }
// console.log(x); // x es 5


// if (true) {
//     let y = 5;
// }
// console.log(y); // ReferenceError: y no está definida



// /**
//  * Ejemplo 1
//  */
// console.log(x === undefined); // true
// var x = 3;

// /**
//  * Ejemplo 2
//  */
// // devolverá un valor de undefined
// var myVar = "my value";

// (function () {
//   console.log(myVar); // undefined
//   var myVar = "valor local";
// })();




// /* Declaración de función */

// foo(); // "bar"

// function foo() {
//   console.log("bar");
// }

// /* Expresión de función */

// baz(); // TypeError: baz no es una función

// var baz = function () {
//   console.log("bar2");
// };





// // No puedes declarar una constante con el mismo nombre que una función o una variable en el mismo ámbito. Por ejemplo:

// // ESTO CAUSARÁ UN ERROR
// function f() {}
// const f = 5;

// // ESTO TAMBIÉN CAUSARÁ UN ERROR
// function f() {
//   const g = 5;
//   var g;

//   // expresiones
// }


// Sin embargo, las propiedades de los objetos asignados a constantes no son protegidas, es por esto que la siguiente declaración se ejecuta sin problemas.

// JS
const MY_OBJECT = { key: "value" };
MY_OBJECT.key = "otherValue";



// Tipos de datos
// El último estándar ECMAScript define ocho tipos de datos:

// Siete tipos de datos que son primitivos:
// Booleano. true y false.
// null. Una palabra clave especial que denota un valor nulo. (Dado que JavaScript distingue entre mayúsculas y minúsculas, null no es lo mismo que Null, NULL o cualquier otra variante).
// undefined. Una propiedad de alto nivel cuyo valor no está definido.
// Number. Un número entero o un número con coma flotante. Por ejemplo: 42 o 3.14159.
// BigInt. Un número entero con precisión arbitraria. Por ejemplo: 9007199254740992n.
// String. Una secuencia de caracteres que representan un valor de texto. Por ejemplo: "Hola"
// Symbol (nuevo en ECMAScript 2015). Un tipo de dato cuyas instancias son únicas e inmutables
// y Object


console.log(`scope global`);
var variableGlobal = 'esta es una variable global';
console.log(window.variableGlobal);
console.log(`=============================================`);