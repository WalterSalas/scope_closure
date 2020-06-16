const helloworld = () => {
    // Mi variable esta solo en el Scope de la funcion
    const hello = 'Hello World'
    console.log(hello);
}

helloworld();
// Por lo tanto no puedo accederla fuera de la funcion
console.log(hello);



/*El scope se puede definir como el alcance que puede tener una variable en tu codigo.

El Local Scope: se refiere a la variable o funcion que esta dentro de un bloque o funcion especifica. Solo se pueden acceder a ellas (ejecutar o llamar) dentro del entrono en donde conviven.

El ambito lexico: se refiere a que una funcion puede acceder a una funcion o variable fuera de ella.Cada nivel interno puede acceder a sus niveles externos hasta poder alcanzarlas.
*/

var scope = 'im global'

const functionscope = () =>{
    var scope = "im in";
    const func = () => {
        return scope
    }
    console.log(func());
} 

functionscope();
console.log(scope);