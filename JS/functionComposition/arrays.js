// console.log(``);
// console.log(`=============================================`);
const numbers = [3, -1, 1, 4, 1, 5];
numbers
  .filter((num) => num > 0)
  .forEach((num, idx, arr) => {
    // Without the arr argument, there's no way to easily access the
    // intermediate array without saving it to a variable.
    // console.log(arr[idx - 1], num, arr[idx + 1]);
    console.log(arr)
  });
// undefined 3 1
// 3 1 4
// 1 4 1
// 4 1 5
// 1 5 undefined



console.log(`Array general`);
let frutas = ["Manzana", "Banana"];
console.log(`=============================================`);


console.log(`Recorrer un Array`);
frutas.forEach(function (elemento, indice, array) {
    console.log(elemento, indice, array);
});
// Manzana 0
// Banana 1
console.log(`=============================================`);


console.log(`Añadir un elemento al final de un Array`);
let nuevaLongitud = frutas.push("Naranja"); // Añade "Naranja" al final
console.log('frutas', frutas)
console.log(`=============================================`);



console.log(`Eliminar el último elemento de un Array`);
let ultimo = frutas.pop(); // Elimina "Naranja" del final
console.log('frutas', frutas)
console.log(`=============================================`);


console.log(`Añadir un elemento al principio de un Array`);
const nuevaLongitud2 = frutas.unshift('Fresa');
console.log('frutas', frutas)
console.log(`=============================================`);

console.log(`Eliminar el primer elemento de un Array`);
const primero = frutas.shift();
console.log('frutas', frutas)
console.log(`=============================================`);

console.log(`Encontrar el índice de un elemento del Array`);
frutas.push('Fresa');
const pos = frutas.indexOf('Banana');
console.log(pos)
console.log('frutas', frutas)
console.log(`=============================================`);


console.log(`Eliminar un único elemento mediante su posición`);
const elementoEliminado = frutas.splice(pos, 1);
console.log('frutas', frutas)
console.log(`=============================================`);


console.log(`Eliminar varios elementos a partir de una posición`);
let vegetales = ["Repollo", "Nabo", "Rábano", "Zanahoria"];
console.log(vegetales);
// ["Repollo", "Nabo", "Rábano", "Zanahoria"]

let pos1 = 1,
  numElementos = 2;

let elementosEliminados = vegetales.splice(pos1, numElementos);
// ["Nabo", "Rábano"] ==> Lo que se ha guardado en "elementosEliminados"

console.log(vegetales);
console.log(`=============================================`);


console.log(`Copiar un Array`);
const copiarArray = vegetales.slice();
console.log(copiarArray)
console.log(`=============================================`);


console.log(`Keys`);
console.log(frutas);
console.log(Object.keys(frutas))
console.log(`=============================================`);



console.log(`disminuir el length`);
console.log(frutas);
frutas.length = 1;
console.log(Object.keys(frutas))
console.log(`=============================================`);




console.log(`=============================================`);
console.log(`=============================================`);
console.log(`METODOS ESTATICOS`);
console.log(`=============================================`);
console.log(`=============================================`);


console.log(`Array() constructor`);
console.log(`crea nuevos arreglos`);
new Array('1','2');
new Array(5)
Array('1','2');
Array(5)

console.log(`no importa ponerle el new o solo Arrar =====  new Array('1','2')  Array('1','2')`, )
console.log(`=============================================`);

console.log(`hacer un nuevo array con un length`);
const nuevoLength = Array(5);
console.log(nuevoLength);                                                   // [ <5 empty items> ]
console.log(nuevoLength[0])                                                 // undefined
console.log(`=============================================`);




console.log(`Array.from()`);
// hace un map interno
console.log(`crea una nueva instancia de Array a partir de un objeto iterable.`);
console.log(`Array.from('foo')`, Array.from('foo'));                                    // [ 'f', 'o', 'o' ]
console.log(`Array.from([1, 2, 3])`, Array.from([1, 2, 3]));                            // [ 1, 2, 3 ]
console.log(`Array.from([1, 2, 3], x => x + 1)`, Array.from([1, 2, 3], x => x + 1));    // [ 2, 3, 4 ]
console.log(`=============================================`);




console.log(`Array.isArray()`);
// regresa un true on un false si es o no es array
console.log(Array.isArray([1, 2, 3]));               // true
console.log(Array.isArray({ foo: 123 }));            // false
console.log(Array.isArray("foobar"));                // false
console.log(Array.isArray(undefined));               // false
console.log(`=============================================`);




// console.log(``);
// console.log(`=============================================`);
// console.log(``);
// console.log(`=============================================`);
// console.log(``);
// console.log(`=============================================`);
// console.log(``);
// console.log(`=============================================`);
// console.log(``);
// console.log(`=============================================`);
// console.log(``);
// console.log(`=============================================`);
// console.log(``);
// console.log(`=============================================`);
// console.log(``);
// console.log(`=============================================`);
// console.log(``);
// console.log(`=============================================`);
