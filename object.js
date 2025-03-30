// object for practice 
// An object is a collection of key-value pairs,
//  where the keys are called properties (or attributes),
//   and the values can be any data type,
//    including functions (called methods when inside an object).

// syntax 
// let person1 = {
//     name: "saikat",
//     age: 27, 
//     isStudent: false, 
//     greet: function (){
//         console.log( "Hello my name is" + this.name);
//     }
// };

// console.log(person1.name);
// person1.greet();

// accessing Object properties 
// console.log(person1.age);
// console.log(person1[age]);

// modifying the Object property 

person1.age = 30; // modify the existing property
person1.city = "Dhaka"; // add new property

// object construtor


function Person (name, age){
    this.name = name;
    this.age = age;
    this.greet(){
        return `Hello my name is ${this.name}`;
    }
}

let p1 = new Person("saikat", 24);
let p2 = new Person("tonoy", 30);

console.log(p1.name); // output : Saikat
p2.greet(); // Hello my name is 


// A clas is s blueprint for creating Object. It is a cleaner way to create object 

class Person {
     constructor(name, age){
        this.name = name;
        this.age = age;
     }

     greet(){
        console.log(`Hello, my name is ${this.name}`);
     }
}
let person1 = new Person("Saikat", 25);
console.log(person1.name); // Output: Saikat
person1.greet(); // Output: Hello, my name is Saikat.
// The constructor method initializes properties.

// Methods inside a class do not need function keyword.


// class inheritance 
// A class can inherit properties and method from another class using extends
class Animal {
    constructor(name) {
        this.name = name;
        
    }
    makeSound(){
        console.log(`${this.name} makes a sound`);
    }
}

class Dogs extends Animal {
    bark(){
        console.log(`${this.name} barks`);
    }
}

let myDog = new Dogs("tyson");
myDog.makeSound();
myDog.bark();

// overriding Method in child class

class Cat extends Animal {
    makeSound(){
        console.log(`{this.name} amar biral`);
    }
}

let myCat = new Cat("mau mau kore");
myCat.makeSound();


// super:
// is used inside a class to call the constructor of its 
// parent class. This allows the child to inherit properties and 
// methods from the parent. 

// why super: 
// if a child class ahas its own constructor, it must call  super()
// before using this 
// it allows resusing code from the parent class.
// it helps in method overriding when extending a class.


class Birds extends Animal{
    constructor (name, color){
        super(name);
        this.color = color;
    }
   showInfo(){
    console.log(`${this.name} is ${this.color}`);
   }
}

let parrot = new Birds ("parrot", "green");
parrot.showInfo();

// Without extends, you'd have to write this.name = name; inside Bird again.

// But since Animal already does this, super(name) reuses that code.