const fruit = () =>{
    
    if (true){
        var fruit1 = 'apple'
        let fruit2 = 'banana'
        const fruit3 = 'kiwi'
    }
    console.log(fruit1);
    console.log(fruit2);
    console.log(fruit3);
}

fruit();


let x = 1;
{
    let x = 2;
    console.log(x);
}
console.log(x);

var x = 1;
{
    var x = 2;
    console.log(x);
}
console.log(x);



const aFunction = () => {
    for (let i = 0; i < 10; i++){
        setTimeout(() => {
            console.log(i);
        },1000)
    }
}

aFunction();
