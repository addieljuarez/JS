// patron Minix

class Usuario {
    constructor(nombre, edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

const minix = {
    saludar(){
        console.log(`Hola ${this.nombre}`);
        console.log(`Tengo ${this.edad} años`);
    },
    despedir(){
        console.log(`Adios ${this.nombre}`);
        console.log(`Tengo ${this.edad} años`);
    }
}

Object.assign(Usuario.prototype, minix)

console.log(Usuario.prototype);

const usuario = new Usuario('Chanchito Feliz', 19);
usuario.saludar();