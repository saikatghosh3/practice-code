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


// object literal 

// key value pair er maddhome acceess korte hoi 

let person = {
    name: "saikat", 
    age : 28,
    location : {
        city: 'jashore',
        zip: 7400,
    },
    sayHello: function(){
        console.log('hello saikat');
    },
};

console.log(person);
console.log(person.location.city);
console.log(person['location']['city']);

person.sayHello();
// this one is method
// means person  is a object and inside that there is a method name sayHello();
// similarly Math.random()


// more properties and method 

// now we'll try reassign value 

let person = {
    name: 'saikat',
    age: 28,
    sayHello: function(){
        console.log('hello world')
    }
};

person.name = "ghosh";
console.log(person.name);

// now we'll assign a new property

person.age = 30;
console.log(person);

// for deleting 

delete person.age;
console.log(person);

// now we'll store the value

let fullName = person.name;
console.log(fullName);


// method 
person.sayHello();

// creating method to original object

person.add = function(a,b){
    return a +b;
}

 console.log(person.add(5,6));

//  another way 

console.log(person['add'](5,4));




