const fruits = () => {
    var fruit = 'Apple'
    console.log(fruit);
}

fruits();
// no es posible acceder a esa variable

console.log(fruit)


const aFunction = () => {
    // con var si puede ser resaignado el codigo
    var x = 1;
    var y = 2;
    // con let no es posible y es mejor practica
    let x = 1;
    let y = 2;
    console.log(x);
    console.log(y);
}

aFunction();