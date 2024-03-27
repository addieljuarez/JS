Object.prototype.log = function() {
    console.log(this);
}

// it's not recommended to modify the prototype of built-in objects for example Object, Array, etc.
// because it can cause unexpected behavior in the future.
// context of this is not the object itself, it's the global object.
// Object.prototype.log = () => {
//     console.log(this);
// }

const x = { a: 1 };

x.log(); // { a: 1 }