
console.log(`ejemplo 1`);
function say(){
    var name = 'Addiel';
    function sayName(){
        console.log(name);
    }
    return sayName;
}

var sayAddiel = say();
sayAddiel();
console.log(`=============================================`);


console.log(`Ejemplo 2`);
const makeCounter = (counter, step) => {
    const next = () => {
        return counter += step;
    }
    return next;
}

const counter2 = makeCounter(10, 2);
counter2();
counter2();
counter2();
console.log(counter2());
console.log(`=============================================`);


// console.log(``);
// console.log(`=============================================`);