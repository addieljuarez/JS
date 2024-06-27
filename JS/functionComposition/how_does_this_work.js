// 1.- ASIGNACION IMPLICITA
// invocado desde un metodo
const me = {
    name: 'Addiel',
    age: 20,
    speak: function(){
        console.log(this.name);
    },
}
// this, hace referencia al objeto, que contiene el método donde se invoca

me.speak();


// Una function recibe un objeto como parametro y le agrega el metodo speak, luego, se ejecuta la function sobre dos objetos
const sayName = function(obj){
    obj.speak = function() {
        console.log(this.name);
    };
};

const addiel = {
    name: 'Addiel',
    age: 20,
};

const juan = {
    name: 'Juan',
    age: 19,
}

sayName(juan);
sayName(addiel);

juan.speak(); // Juan
addiel.speak(); // Addiel
// este caso hace referencia al objeto que se añade al metodo



// En este caso hay una funciona que retorna un objeto,, que contiene un metodo speak, que invoca this

const person = function(name, age, mother){
    return{
        name: name,
        age: age,
        speak(){
            console.log(this.name);
        },
        mother: {
            name: mother,
            speak: function(){
                console.log(this.name);
            }
        }
    }
}

const ana = person('Ana', 30, 'Clara');

ana.speak(); // Ana
ana.mother.speak(); // Clara

// This en este caso hace referencia al objeto que contiene el metodo donde se invoca. 



// ===============================================================================================================
// ===============================================================================================================
// ASIGNACON EXPLICITA

const speak = function(l1, l2, l3){
    console.log(`Hi my name is ${this.name}
    and I programer on ${l1}, ${l2}, ${l3},`);
}

const yeison = {
    name: 'Yeison',
    age: 20,
};

const languages = ['JS', 'Python', 'C'];

// speak.call(yeison, languages[0], languages[1], languages[2]);

// speak.apply(yeison, languages);

const speakYeison = speak.bind(yeison, languages[0], languages[1], languages[2]);
speakYeison();





// Asignacion con un new
console.log('Asignacion con un new');

const Aminal = function(color, nombre, tipo){
    this.color = color;
    this.nombre = nombre;
    this.tipo = tipo;
}

const bipa = new Aminal('gris', 'Bipa', 'felino')
console.log(bipa);
console.log('============================================')

console.log('global this');
console.log(globalThis)
console.log('============================================')