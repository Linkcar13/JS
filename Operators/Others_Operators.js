// String Operator (Concatenar) (+)
var name1= 'Carlos';
var lastname='Estrada';

var NameC= name1 + ' ' + lastname;
console.log(NameC);
// Coditional Operator (condition ? value1:value2)
console.log(2==3 ? 'son iguales':'son diferentes');

//Operador de Desestructuración
 var Dog={
age:'3 months',
state:'in adoption'
 };
  var {age}=Dog;
  console.log(Dog);
  console.log(age);
//Desestructurar Arrays
var arreglo=[1,2,3,4]; 
var [first,,third]=arreglo;
console.log(first);
console.log(third);


//poperty access

//Point operartor 
var persona= {
nombre:'Pato',
apellido:'Ganso'
}
console.log(persona.nombre);

//[] Notation 
console.log(persona['nombre']);

// Data Type operator
console.log(typeof'Dog');