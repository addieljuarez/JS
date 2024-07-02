Array

Methods.

foreach()       = recorre un array
Push()          = agrega un elemento al final del array
Porp()          = eliminated el ultimo elemento de un array
Unshift()       = añane un elemnto al principio de un array
Shift()         = elimina el primer elemento de un array
Splice()        = elimina un unico elemento por su posicion, tambien elimina varios elementos.
Slice()         = copia un array.
arr[0]          = acceso a un elemento.
arr[‘0’]        = acceso a un elemento.
Length          = puede asignar un nuevo length o darme el tamaño del array si es de lectura


metodos estaticos

from()              = crea una nueva instancia de array con un objeto iterable
                        console.log(Array.from('foo')); 
                        // Expected output: Array ["f", "o", "o"]

fromAsync()         = crea una nueva instancia de array con un objeto iterable y es asyncrona
                        Array.fromAsync(asyncIterable).then((array) => console.log(array));
                        // [0, 1, 2, 3, 4]

isArray()           = devuelve un trie es es un array y un false en caso contrario 
                        console.log(Array.isArray([1, 3, 5]));
                        // Expected output: true

Of()                = crea una nueva instancia de array con un numero variable de parametros, independientemnete del numero y del tipo de dichos parametros. 
                        Array.of(7); // [7]
                        Array.of(1); // [1]
                        Array.of(1, 2, 3); // [1, 2, 3]
                        Array.of(undefined); // [undefined]


Propiedades de instancia. 

length             = propiedad que establece o devuelve el numero de elementos en un array
                        var frutas = ["Banana", "Orange", "Apple", "Mango"];
                        console.log(frutas.length); // 4        

unscopable        = propiedad que contiene nombres de propiedades que no se deben copiar en el objeto global
                        Array.prototype[Symbol.unscopables]
                        // { copyWithin: true, entries: true, fill: true, find: true, findIndex: true, keys: true, values: true }



Metodos de instancia (prototype)

Array.prototype.concat()            = Devuelve un nuevo array que es la concatenacion de aqui sobre el que se invoca seguido de otros array o valores
                                        const array1 = ['a', 'b', 'c'];
                                        const array2 = ['d', 'e', 'f'];
                                        const array3 = array1.concat(array2);
                                        console.log(array3);
                                        // Expected output: Array ["a", "b", "c", "d", "e", "f"]

Array.prototype.copyWhithin()       = Copia una secuencia de elementos de un array dentro del propio array sin modificar el length
                                        // Copy to index 1 all elements from index 3 to the end
                                        console.log(array1.copyWithin(1, 3));
                                        // Expected output: Array ["d", "d", "e", "d", "e"]

Array.prototype.entries()           = Retorno un nuevo objeto array iterator que contiene los pares clave/valor para cad inidice de la matriz
                                        const array1 = ['a', 'b', 'c'];
                                        const iterator1 = array1.entries();
                                        console.log(iterator1.next().value);
                                        // Expected output: Array [0, "a"]
                                        console.log(iterator1.next().value);
                                        // Expected output: Array [1, "b"]
