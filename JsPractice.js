function add(a,b){
    return a +b;
}

function minus (a,b){
    return a-b;
}

let value = minus(add(30, 40), 20);

console.log(value);

// function types

// has parameter and return 

function add(a,b){
    return a+b;
}
console.log(add(10,30));


// has parameter but no return 

function add(a,b){
    console.log(10,10)
}
add(10,20);


// no parameter but has return

function PrimeNumber (){
    return 13;
}

// as it is returning value we can store that

let value = primeNumber();
console.log(value);

// no parmeter no retun 

function sayHello(){
    console.log('Hello world');
}
sayHello();