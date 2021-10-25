/**
 * VARIABLES
 * 
 * Existen 3 formas de definir variables:
 * var
 * let
 * const: references a constant variable
 */

// variables con VAR

var nombre = 'Carlos';
var x=2;
console.log(nombre);
console.log(x);

var persona={
    name:'Carlos',
    lastname:'Estrada',
    age:21 
};
console.log(persona);

var variable;
console.log(variable); //variable undefined
variable=22.6;
console.log(variable);// se define la variable

// variables con let (se puede usar para bloques de codigos var es para variables globales)

let nombre1 = 'Pato';
console.log(nombre1);

//Bloque de código 

{
    let saludo ='Hi :v';
    console.log(saludo);
}

// Variables con const

const PI=3.14151692;
console.log(PI);
