// Declaracion de una variable Global y es accesible desde cualquier lugar
var hello = 'Hello';
let world = 'World';
const helloworld = 'Hello World';


const aFunction = () =>{
    // Estoy consultando variables globales
    console.log(hello);
    console.log(world);
    console.log(helloworld);
}

aFunction();


/* Errores comunes */
const helloworld = () => {
    // no deberiamos de asignar variables globales desde dentro de una funcion
    globalVar = 'im global'
}

helloworld();
console.log(globalVar);

const anotherFunction = () => {
    // no hacer dobles asignaciones
    var locaVar = globalVar = 'Im Global';
}

anotherFunction();
console.log(globalVar);