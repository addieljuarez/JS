// console.log('');
// console.log('============================================')
console.log('Example without currying');
const suma = (a, b) => console.log(a + b);
console.log('const suma = (a, b) => console.log(a + b):');
suma(1, 6)
console.log('=============================================');


console.log('Example with currying');
const sumaCurrying = a => b => console.log(a + b);
console.log('const sumaCurrying = a => b => console.log(a + b);');
sumaCurrying(1)(6)
console.log('=============================================');



console.log('curryng 2');
const divisible = mod => num => num % mod;
console.log('divisible(10)(2)', divisible(10)(2));

const diviobleEn3 = divisible(3);
console.log('diviobleEn3(10)', diviobleEn3(10));

console.log('============================================')


console.log('currying 3');
const suma3 = x => y => x + y;
  
const suma10 = suma3(10);
const suma20 = suma3(20);

console.log(suma10(20));
console.log(suma20(20));
console.log('============================================')