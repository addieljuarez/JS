// // Syntax
// class ClassName {
//   constructor() { ... }
//   method_1() { ... }
//   method_2() { ... }
//   method_3() { ... }
// }


// Create and use a Class
class Car {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }

    // Methods
    age(){
        const date = new Date();
        return date.getFullYear() - this.year;
    }
}

const myCar = new Car('Ford', 2014);
console.log(`My car1 is ${myCar.age()} years old.`);



// Send parameters to Class methods
class Car2 {
    constructor(name, year){
        this.name = name;
        this.year = year;
    }
    // method
    age(x){
        return x - this.year
    }
}

const date2 = new Date();
let year = date2.getFullYear();

const myCar2 = new Car2('ford2', 2014)
console.log(`Hi, my car2 is ${myCar2.age(year)} years old`);