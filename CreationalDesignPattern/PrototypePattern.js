const dog = {
    name: 'dog',
    age: 5,
    bark: function () {
        console.log(`woof woof, I am ${this.name}, and I am ${this.age} years old`);
    }
}

const dog1 = Object.create(dog);
dog1.bark(); // woof woof

console.log(dog1) // {}

dog1.name = 'dog1';
dog1.age = 6;
dog1.bark(); // woof woof, I am dog1, and I am 6 years old