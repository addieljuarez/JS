
console.log('Example Template string');
const test = (texto) => {
    console.log(`el texto es ${texto}`);
}
test `prueba`;


console.log('=============================================');

console.log('Example Template string to number');
const test3 = (number) => {
    console.log(`el texto es ${Number(number) * 2}`);
}

test3 `5`;
console.log('=============================================');