// console.log('');
// console.log('============================================')
// impure
console.log('function impure');
function sumadorFactory(suma = 0){
    return function (cantidad){
        suma = suma + cantidad
        return suma
    }
}
const sumadorA = sumadorFactory();
console.log('sumadorA(2)', sumadorA(2)); //2
console.log('sumadorA(2)', sumadorA(2)); //4
console.log('============================================')



console.log('make it pure');
function sumadorFactory1(suma = 0){
    return function (cantidad){
        // suma = suma + cantidad
        return suma + cantidad
    }
}
const sumadorA1 = sumadorFactory1();
console.log('sumadorA1(2)', sumadorA1(2)); //2
console.log('sumadorA1(2)', sumadorA1(2)); //2
console.log('============================================')



//Impuro
console.log('Impure 2');
var minimo = 10;

function comparaMinimo(num) {
  return num < minimo; // depende de un valor externo
}
console.log(comparaMinimo(10))
console.log('============================================')
