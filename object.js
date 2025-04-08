// object for practice 
An object is a collection of key-value pairs,
 where the keys are called properties (or attributes),
  and the values can be any data type,
   including functions (called methods when inside an object).

syntax 
let person1 = {
    name: "saikat",
    age: 27, 
    isStudent: false, 
    greet: function (){
        console.log( "Hello my name is" + this.name);
    }
};

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
  this.greet() {
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


// constructor:

// A construror is a special method in a class or
//  function that rund automatically when 
// you create a new Object. It initializes properties and sets 
// up the object with default  values 


class Person {
    constructor(name, age) { 
      this.name = name;  // Assigns 'name' to the object
      this.age = age;    // Assigns 'age' to the object
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  let person3 = new Person("Saikat", 25);
  let person2 = new Person("Rahul", 30);
  
  console.log(person3.name); // Output: Saikat
  console.log(person2.age);  // Output: 30
  
  person1.introduce(); // Output: Hi, my name is Saikat and I am 25 years old.
  



// now problems with solutions 
// Create a Person class with name, age, and gender properties.
//  Add a method introduce() that prints a person's details.

class Person5 {
    constructor(name, age, gender) {
        this.name= name;
        this.age= age;
        this.gender= gender;
    }
    introduce(){
        console.log(`Hi I'm ${this.name},a ${this.age}-year old ${this.gender}`);
    }
}

 const person6 = new Person("Saikat", 27, "Male");
person6.introduce();

// Extend the Person class to create an Employee class that adds
//  a jobTitle and salary. Override introduce().

class Employee extends Person5{
    constructor(name, age, gender, JobTitle, salary){
        super(name, age, gender);
        this.JobTitle = JobTitle;
        this.salary = salary;
    }
    introduce(){
        console.log(`Hi, I'm ${this.name}, a ${this.age}-year-old${this.gender}, working as a ${this.JobTitle} with a salary of ${this.salary}`);

    }
}


const emp1 = new Employee ("Alice", 30, "Female", "software Engineer", 70000);
emp1.introduce();

// Create a class BankAccount with a private balance and methods to deposit(), withdraw(),
//  and get balance safely.

class BankAccount {
    #balance; 
    constructor(owner, intialBalance){
        this.owner = owner;
        this.#balance = intialBalance;
    }
    deposit(amount) {
        if (amount > 0) this.#balance += amount;
        else console.log("Deposit amount must be positive.");
    }


   withdraw (amount){
    if (amount > 0 && amount <= this.#balance) this.#balance -=amount;
    else console.log("Insuficient balance or invalid amount");
   }

   get balance (){
    return this.#balance;
   }

}

const account = new BankAccount("john", 500);
account.deposit(499);
account.withdraw(100);
console.log(`${account.owner}'s balance: $${account.balance}`);


// jodi kokhono kono method class er baire   new class make na 
// kore bebohar korte Chai tahole static class make kora jai
// er vitore this kaj kore na.

// 1. What is a Static Method?
// Defined using the static keyword in a class.

// Cannot be accessed by instances of the class.

// Can be accessed only through the class name.

class Mathhelper {
    static add(a, b){
        return a+b;
    }
   static multiply (a,b){
    return a* b;
   }

}
console.log(Mathhelper.add(4,5));
console.log(Mathhelper.multiply(4,5));


// onno object er moto na. static



// simple example of object .  

const Man =  {
    firstName: "jhon",
    lastName: "Doe", 
    id : 55666, 
    fullName: function(){
        return this.firstName + "" + this.lastName;
    }

};

document.getElementById("demo").innerHTML = Man.fullName();

// Object.entries() make it easier to loop over object 

const furits = {
    Banana: 300, 
    Orange: 400,
    Mango: 500 
};

let text = "";
for (let [fruit, amount] of Object.entries(furits)) {
    text += fruit + ": " + amount + " <br>";
}

console.log(text);




function myFunction() {
    let carName = "Volvo";
    let text = "Inside: " + typeof carName + " " + carName; 
  
  }
  
  myFunction();


  const person = {
    name: "jhon", 
    age: 30, 
    city: "new york"
  };

  const myArray = Object.values(person);
  console.log(myArray);

//   Object.values() creates an array from the property values