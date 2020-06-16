a = 2;
var a;
// El valor resultante es 2 porque Hoisting eleva las declaraciones
console.log(a);


// El valor resultante es undefindet porque Hoisting eleva las declaraciones mas no las inicializaciones
console.log(a);
var a = 2;




// llamo una funcion que aun no esta construida
nameOfDog('Elmo');

// construyo la funcion que nombra a mi perro
function nameOfDog (name) {
    console.log(name);
}



