// // Example 1 this context
// console.log('Example This context');
// const person = {
//     firstName: 'Jhon',
//     lastName: 'Doe',
//     printName: function(){
//         console.log(this.firstName + ' ' + this.lastName);
//         return 'Nombre ' + this.firstName + ' ' + this.lastName
//     },
// };

// // Execute the printName method
// person.printName(); //Jhon Doe
// // Here, I am calling the printName() method using the person object, so the this keyword inside the method refers to the person object.

// const printFullName = person.printName
// printFullName(); //undefined undefined
// // Why does this happen?
// // Aquí, estamos almacenando una referencia de person.printName a la variable printFullName. Después de eso, 
// // lo llamamos sin una referencia de objeto, por lo que ahora se referirá al objeto de ventana (global) o indefinido (en modo estricto).

// console.log('=============================================');

// console.log('Example This context 2');
// function myFunction() {
//     this.a = 5;
// } 
// myFunction();

// // var obj1 = Object.create(a);

// console.log(a);

// // console.log('this', this.a)
// // console.log(obj1);
// // console.log(a);
// // console.log(Object.prototype.this.a);
// console.log('=============================================');


// console.log('Example this 3');
// const persona = {
//     name: 'Pepín',
//     surname: 'Fernandez',
//     fullname: function() {
//         console.log(this) // OJO !!
//         return this.name + ' ' + this.surname
//     }
// }
// persona.fullname()
// console.log('=============================================');


// console.log('Example this 4');
// this.x = 9;
// const module1 = {
//     x: 81,
//     getX: function(){
//         return this.x;
//     }
// }
// console.log(module1.getX())

// const getX = module1.getX;
// console.log(getX());
// console.log('=============================================');



// // Example Bind: 
// console.log('Example Bind');
// const john = {
//     name: 'John',
//     age: 24,
// };
// const jane = {
//     name: 'Jane',
//     age: 22,
// };

// function greeting(){
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
// }
// greeting.lang = 'Espa';
// console.log(greeting.lang);

// const greetingJhon = greeting.bind(john);
// greetingJhon();

// const greetingJane = greeting.bind(jane);
// greetingJane();

// greeting()

// console.log('=============================================');


// // Example bind 2
// console.log('Example Bind 2');
// function greeting2(lang){
//     console.log(`${lang}: I am ${this.name}`);
// }
// const john2 = {
//     name: 'John'
// };
// const jane2 = {
//     name: 'Jane'
// };

// const greetingJhon2 = greeting2.bind(john2, 'En');
// const greetingJane2 = greeting2.bind(jane2, 'Es');

// greetingJhon2();
// greetingJane2();

// console.log('=============================================');




// // Example bind 3
// console.log('Example Bind 3');
// const obj = {
//     nombre: 'Pepin',
//     saludoConEdad: function(edad){
//         return `Soy ${this.nombre} y tengo ${edad}`
//     }
// }

// console.log('ejecuta la funcion y le enviamos el parametro de edad');
// console.log('obj.saludoConEdad(6)');
// console.log(obj.saludoConEdad(6)); //'Soy Pepín y tengo 6 años'

// console.log('hacemos el bind el cual crea une copia de la funcion y le asigna el this de donde lo va a tomar');
// console.log(`const saludo = obj.saludoConEdad.bind({nombre: 'Addiel'});`);
// const saludo = obj.saludoConEdad.bind({nombre: 'Addiel'});
// console.log(`le pasamos el arguento faltante`);
// console.log(`saludo(9)`);
// console.log(saludo(9)); // Soy Addiel y tengo 9
// console.log('=============================================');





// // Example Call
// console.log('Example Call 1');
// function greetingCall() {
//     console.log(`Hi, I am ${this.name} and I am ${this.age} years old`);
// }
// const johnCall = {
//     name: 'John',
//     age: 24,
// };
// const janeCall = {
//     name: 'Jane',
//     age: 22,
// };
//   // Hi, I am John and I am 24 years old
// greetingCall.call(johnCall);
//   // Hi, I am Jane and I am 22 years old
// greetingCall.call(janeCall);
// console.log('=============================================');



// // Example Apply 
// console.log('Example Apply 1');

// function greet(greeting, lang) {
//     console.log(lang);
//     console.log(`${greeting}, I am ${this.name} and I am ${this.age} years old`);
// }

// const johnApply = {
//     name: 'John',
//     age: 24,
// };
// const janeApply = {
//     name: 'Jane',
//     age: 22,
// };

// greet.apply(johnApply, ['Hi', 'En']);
// greet.apply(janeApply, ['Hola', 'Es']);
// console.log('=============================================');





// Example bind 3
console.log('Example Bind 3');
const obj = {
    nombre: 'Pepin',
    saludoConEdad: function(edad){
        return `Soy ${this.nombre} y tengo ${edad}`
    }
}

console.log('ejecuta la funcion y le enviamos el parametro de edad');
console.log('obj.saludoConEdad(6)');
console.log(obj.saludoConEdad(6)); //'Soy Pepín y tengo 6 años'

console.log(`Bind`);
console.log('hacemos el bind el cual crea une copia de la funcion y le asigna el this de donde lo va a tomar');
console.log(`const saludo = obj.saludoConEdad.bind({nombre: 'Addiel'});`);
const saludo = obj.saludoConEdad.bind({nombre: 'Addiel'});
console.log(`le pasamos el arguento faltante`);
console.log(`saludo(9)`);
console.log(saludo(9)); // Soy Addiel y tengo 9

console.log(`Call`);
console.log('Call no se puede guardar en otra variable (osea no se hace copia) por lo cual el argumento se pasa de inemdiato ');
console.log(`const saludo2 = obj.saludoConEdad.call({nombre: 'Addiel2'}, 44);`);
const saludo2 = obj.saludoConEdad.call({nombre: 'Addiel2'}, 44);
console.log(saludo2);

console.log(`Apply`);
console.log('Apply es igual que call pero este recibe un arreglo');
console.log(`const saludo3 = obj.saludoConEdad.apply({nombre: 'Addiel3'}, [99]);`);
const saludo3 = obj.saludoConEdad.apply({nombre: 'Addiel3'}, [99]);
console.log(saludo3);

console.log('=============================================');


console.log(globalThis);
