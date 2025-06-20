// Write a function that takes a string as input and returns the string reversed.

function reverseString (str){
    return str.split('').reverse().join('');
}

console.log(reverseString("hi my name is saikat"));

// Find the Largest Number in an Array

function largestNumber(arr){
    return Math.max(...arr)
}
console.log(largestNumber([1,2,3,33,66,77]));


// remove duplicates from array 

function removeDuplicate (arr){
    return [...new Set (arr)]
}

console.log(removeDuplicate([1,1,3,3,5,6,6,7,9]))

// find the factorial of a number

function factorial (n){
    if( n === 0) return 1;
    return n * factorial(n -1);

}

console.log(factorial(5));

// . Sum of Natural Numbers using Recursion    
function SumNatural (n){
    if( n === 0)
        return 0;
        return n + SumNatural(n -1 );
    
}

console.log(SumNatural(5));


// Find the Sum of Array Elements

function sumArray (arr){
    return arr.reduce((sum, num)=> sum + num , 0 )
}
console.log(sumArray([1,2,3,4,56,66]))

// find the  second largest number in an array.

 function secondLargest(arr){
    let uniqueArr = [... new Set (arr)]; // remove duplicate
    uniqueArr.sort((a,b)=> b - a); // sort in desending order.
    return uniqueArr[1];
 }
 console.log(secondLargest([1,2,33,4,5,6,6,9,99]));



 // sort an array into acending order

 function acendingOrder(arr){
    return arr.sort((a,b)=> a - b);
 }
 console.log(acendingOrder([1,23,4,5,6,77,]));

// find the insertion of two array.

function insertion(arr1, arr2){

   return arr1.filter(num=>arr2.includes(num) )
}
console.log(insertion([1,2,3,4],[2,3,5,4]));

// remove the duplicate from the array


const arr4= [{name: "saikat"}, {age: 45},{ school: "ssss"}];

function removeDuplicate (arr){
    return [...new Set(arr)];
}
console.log(removeDuplicate([1,2,22,3,3,34,5,667,78,8,8 ]));

// Write a function that flattens a deeply nested array into a single array.

function flatternArray (arr){
    return  arr.flat(Infinity);


}

console.log(flatternArray([1, [2, [3, [4, 5]]], 6]));

//Chunk an array into smaller array

function ChunkArray(arr, size){
    let result = [];
    for(let i = 0 ; i< arr.length; i+= size){
        result.push(arr.slice(i, i + size))
    }

    return result;
}

console.log(ChunkArray([1,2,3,4,5,6,7,8,9], 3));

// check if a stirng is a palindrome 
function isPalindrome (str){
    let reversed = str.split("").reverse().join("");
    return str === reversed;
}
console.log(isPalindrome("racecar"));
console.log(isPalindrome("hello"));

// Find the even numbers in array. 

function findEvenNumbers (arr){
    return arr.filter(num => num % 2 === 0)
}
console.log(findEvenNumbers([1,2,2,3,4,5,6,6,7]));

// Find the sum of Even numbers in an array

function sumEvenNumber (arr){
    return arr.reduce((sum, num)=> num % 2 === 0 ? sum + num : sum, 0);
}
console.log(sumEvenNumber([1,2,3,4,5,6,7,8,8]));


// if Else related problem

// check the number is even or odd?

function checkEvenOdd (num){
    return num % 2 === 0 ? "Even" : "Odd";
}
 console.log(checkEvenOdd(7));
 console.log(checkEvenOdd(10));


 // Find the Greater of Two Numbers
  function findGreater (a, b){
    return a > b ? a: b;
  }
  console.log(10,30);

//   check if a person is Eligble to Vote 
function CheckEligible( age){
    return age >= 18 ? "Eligible to vote" : "not eligible";
}
console.log(CheckEligible(20));
console.log(CheckEligible(17));


// practice

// which one will execute first ? 
console.log("first");

new Promise((resolve) => {
    setTimeout(() => {
        console.log("two");
        resolve("Promise is resolved");
    }, 3000);
}).then((message) => console.log(message));

console.log("three");

// first three two. 

// check whether is the number is positive negetive or zero

function checkNumber (num){
    return num > 0 ? "positive" : num < 0 ? "Negative" : "zero";

}
console.log(checkNumber(5));
console.log(checkNumber(-1));
console.log(checkNumber(0));

// check the number is leap year or not 
function isLeapYear(year){
    return (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0 ) ? "Leap year" : "Not leap year";
}
console.log(isLeapYear(2024));
console.log(isLeapYear(2000));
console.log(isLeapYear(1998));

// template literal 

//  for personal information 

function intorduction (name, age){
    return `my name is ${name} and i am ${age} `;
}
console.log(intorduction("Saikat", 26));

// create a dynamic greeting Based on Time

function greeting(name){
    let hour = new Date().getHours();
    let timeofDay = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening"
     return     `Good ${timeofDay} , ${name}! Hope you're having a great day!`;

}
// problems based on currying

// currying a functional programming technique where a function is transformed into 
// a sequence of function , each taking a single argument. Instead of taking all arguments
// at once it takes them one at a time and returns  a new function for the next argument
// untill all arguments are provided. 

// function without currying 

function add (a, b , c){
  return a + b + c;

}

console.log(add(12,44,66));


// function with currying 

function add(a){
    return function(b){
        return function (c){
            return a + b + c
        }
    }
}
console.log(add(11,33,545));


// write a curried function that filters an array of numbers base on a condition 

const filterNumbers = condition => numbers => numbers.filter(condition);

const isEven = num => num % 2 === 0;
const isGreaterThan10 = num => num > 10;

const filterEven = filterNumbers(isEven);
const filterGreaterThan10 = filterNumbers(isGreaterThan10);

console.log(filterEven([1, 2, 3, 4, 5, 6])); 
// Output: [2, 4, 6]

console.log(filterGreaterThan10([5, 10, 15, 20])); 
// Output: [15, 20]


// without currying  the code will look like this 

// function filterNumbers(numbers, condition) {
//     return numbers.filter(condition);
// }

// function isEven(num) {
//     return num % 2 === 0;
// }

// function isGreaterThan10(num) {
//     return num > 10;
// }

// console.log(filterNumbers([1, 2, 3, 4, 5, 6,], isEven)); 
// Output: [2, 4, 6]

// console.log(filterNumbers([5, 10, 15, 20], isGreaterThan10)); 
// Output: [15, 20]



// write a function that generates an email confirmation message using template literals

function generatesEmail (name, orderId, amount){

    return ` 
    Hi ${name},
    Thank you for your order! your order Id is ${orderId}
    The total amount charged is ${amount.toFixed(2)}
     
    If you have any questions, feel free to reply to this email.

    Best regards, 
    your company team
    
    
    `;
}

console.log(generatesEmail("Saikat", "A123454", 299.99));


// api related  problems             

// fetch Github user Data

async function getGitHubUser(username) {
    let response = await fetch(`https://api.github.com/users/${username}`);
    let data = await response.json();

    console.log(`Github user: ${data.login}, Followers: ${data.followers}`);
}

getGitHubUser("saikatghosh3");

// get request (fetch Data from Api)

async function getPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    let data  = await response.json();
    console.log(data.slice(0, 3)); 
    
}
getPosts();


// post  request (send data to api)
async function createPost() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            title: "My New Post",
            body: "This is my first post.",
            userId: 1
        })
    });

    let data = await response.json();
    console.log("Post Created:", data);
}

createPost();


// put request 

async function updatePost (postId) {
    let response = await fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`, {
    
        method: "PUT", 
        headers: {
            "content-Type" : "application/json"
        },
        body: JSON.stringify({
            title: "updated Title", 
            body: "updated content", 
            userId: 1
        })


    });


    let data = await response.json();
    console.log("post Updated:", data);
}
updatePost(1);


// delete request (remove data)
async function  deletePost(postId) {
    let response = await fetch (`https://jsonplaceholder.typicode.com/posts/${postId}`, {
        method : DELETE
    });

    if (response.ok){
        console.log(`Post ${postId} deleted successfully.`);
    }
}

deletePost(1);

// GraphQL is an alternative to REST APIs that allows fetching only the required data.


// Destructuring problems and solutions 

// write a javascript function to swap two variables using destructuring .

function swapValue(a,b){
    [a,b] = [b, a];
    return [a,b];
}

console.log(swapValue(12,5));


// Extract specific value form an object 

const person = { name: "Alice", age: 25, city: "New York" };

const { city, age } = person;

console.log(city, age); // Output: Alice 25

// Extract two elements form the array.

const numbers = [10, 39 ,59 ,57 , 899];
const [first, second, ...rest] = numbers;
console.log(first, second);

// Nested object destructuring 
const user = {
    id: 101, 
    details : {
        name: "Emaa", 
        age : 28,
        lastName: "watson",
        address: {
            city: "london",
            country:"uk"
        }
    }
};



// destructuring nested properties

const {details: { lastName, address: {country}}}= user;
console.log(lastName, country);


// swap object properties usnign destructuring

let user1 = {name: "Alice", role: "destigner"};
[user.name, user.role] = [user.role, user.name];
console.log(user);


// write a function that returns multiple values as an array, and use 
// destructuring to assign them 

function getMinMax (numbers){
    let min = Math.min(...numbers);

    let max = Math.max(...numbers);
    return [min, max];
}

const [min, max ] = getMinMax([1,2,3,4,5,6,7,8]);
console.log(`Min: ${min}, Max  ${max}`);



// Imagine an API response returning user data.
//  Extract only the name, email, and city using destructuring.


const apiResponse = {
    userId : 101, 
    name2: "Jhon Doe",
    email: "JhonDoe@example.com",
    address2: {
        city2: "new York",
        Country2: "USA"
    },
    phone: "123435555"
};

const {name2, email, address2 :{city2}}= apiResponse;

console.log(name2, email, city2);



//   api problem 
// Problem 1: Fetch Data from an API and Extract Required Fields
// async function fetchData () {
//     try{
//     const response = await fetch("https://jsonplaceholder.typicode.com/users/1");

//     const {name, email, address:{city}} = await response.json();

//     console.log(`User name is ${name}, His/Her email is ${email} and city is ${city}`);
// }catch(error){
//     console.log(`Error! cant fetch data`);
// }
// }
// fetchData();


//  Fetch Multiple Users and Extract Data in a Loop

async function fetchUsers() {
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const users = await response.json();

        for (const { id, name } of users) {
            console.log(`ID: ${id}, Name: ${name}`);
        }
    } catch (error) {
        console.error("Error fetching users:", error);
    }
}

fetchUsers();


// Renaming API Response Keys While Destructuring

 async function fetchApi(){
    try{
      const response = await fetch("");
      const {title: heading, body: content} = await response.json();


      console.log(`Heading : ${heading}`)
      console.log(`content  : ${content}`)
    }
    catch(error){
        console.error("Error fetching post:", error);
    }
}

// merge two api responses using destructuring 
// fetch user data and their posts from two APi endpoints and merge them

async function fetchUserAndPosts(params) {
    try{
        const  userResponse = await fetch("https://jsonplaceholder.typicode.com/users/1");
        const {name, email} = await userResponse.json();

        const postResponse = await fetch("https://jsonplaceholder.typicode.com/posts?userId=1")
        const [{title, body} ]  = await postResponse.json();

        console.log(`User: ${name} ${email}`);
        console.log(`Latest Post: ${title}- ${body}`);
    }catch(error){
        console.error("Error fetching data:", error)
    }
}



  const doubled2 = numbers.map();


//   what is  a higher order function ?
//    a higher order function take a function as an argument or return a function 

const nums = [1, 2, 3];
const doubled = nums.map(function (num) {
  return num * 2;
});

console.log(doubled); // [2, 4, 6]


//create a function that returns a counter that increases each time it is called

function createCounter(){
let count = 0;
return function(){
    count ++;
    return count;
}
}

const counter = createCounter();
console.log(counter());
console.log(counter());
console.log(counter());

// use a callback to run a function after greeting 

function greet (name, callback){
   console.log(`Hi , ${name}!`);
   callback();
}

function sayBye(){
    console.log("goodBye!");
}

greet ("Saikat", sayBye);

// Log a message after 2 seconds using a callback. 
function delayRun(callback){
    setTimeout(callback, 2000);
}

delayRun(()=>{
    console.log("Executed after 2 seconds")
});

//create a simple version of  map()

function customMap(arr, func){
    let result = [];
    for (let i = 0; i<arr.length; i++){
        result.push(func(arr[i]));
    }
}
console.log(customMap([1,2,3], x=> x*2));


// Create a function athat retuns another function to multiply by a fixed number


function multiplier(x){
    return function(y){
        return x*y;
    }
}

const triple = multiplier(3);
console.log(triple(4));



// in const triple = multiplier(3), x = 3; then it retuns below function
// function(y){
// return 3 * y ; 
// }


// then at the time of calling triple(4);
// y = 4 , from earlier x was already set 3 and follow the closure 

// Even though multiplier(3) is done executing,
// the returned function remembers x = 3 — this is called a closure.



//Higher order filter even numbers

const numbers3 = [1,2,3,4,5,6,7,8];
const evens = numbers3.filter(num=> num % 2 === 0);
console.log(evens);


// a counter that you can also reset

function createCounter(){
    let count = 0;
    return {
        next: ()=>++ count, 
        reset : ()=> count = 0
    };
}

const myCounter = createCounter();
console.log(myCounter.next());
console.log(myCounter.next());
myCounter.reset();
console.log(myCounter.next())


// understanding this in arrow and normal function 

const Person ={
    name: "saikat", 
    age: 27,
    sayHello: function (){
        console.log("Hi", + this.name)
    },
    arrowHello: ()=>{
        console.log("Hi," + this.name)
    }
}

person.sayHello();
person.arrowHello();
//  Because arrow functions do not bind their own this
//   — they take it from the outer scope (which is likely window or undefined 
//     in strict mode).

//  SetTimeout inside loop (fix with closure)

for(var i = 1; i<= 3; i++){
    setTimeout(()=>{
        console.log(i);
    },1000);
}

//async / await

function wait (ms){
 return new Promise(resolve=> setTimeout(resolve, ms));
}
async function   run() {
    await wait(1000);
    console.log("step 1");
    await wait (1000);
    console.log("setp 2")
}

run();

// Dom manipulation
<button id="btn"> </button>
<p id =" output"></p>

const btn = document.getElementById("btn");
const output= document.getElementById("output")
btn.addEventListener("click", ()=>{
    output.innertext = "You clicked the button!"
})

// reverse the string 

function reverseString(str){
    return str.split('').reverse().join('')
}

// flat the nested array 

const nested = [1, [2, [3, 4]], 5];
const flatt = nested.flat(2);
console.log(flatt);

// here flat(1) goes 1 level deep 
// and flat(2) goes 2 level deep 

// object destructuring 

const user5 = {name: "saikat", age2: 27}
 const {name, age2} = user5;
 console.log(age2);
 console.log(name);

 // default parameter

 function random (name= "Guest"){
    return `Hello, ${name}`;
 }
 console.log(random());
 console.log(random("saikat"));


 // debouncing button click, only stops when user stops clicking for 500ms

 let timeout;
 document.getElementById("btn").addEventListener("click", ()=>{
    clearTimeout(timeout);
    timeout = setTimeout(()=>{
        console.log("Button clicked after pause");
    },500)
 })

//  store and get name from Local storage 

localStorage.setItem("name", "Saikat");
console.log(localStorage.getItem("name"));

// simple Event Bubbling
<div id="parent">
    <button id="child">Click Me</button>
</div>
 
 document.getElementById("parent").addEventListener("click", ()=>{
    console.log("parent clicked");
 });

 document.getElementById("child").addEventListener("click", (e)=>{
    console.log("Child clicked");
    e.stopPropagation();// this is to  prevent bubbling
 });

 // convert NdeList to array
 const item = document.querySelectorAll("li");
 const arr = Array.from(item);

 // capitalize First letter of Each word 
 function capitalize(str){
    return str.split(" ").map(word=> word[0].toUpperCase()+word.slice(1)).join(" ")
    console.log(capitalize("hello world"));


 }


//  check palindrome (str)


function isPlaindrome(str){
    return str === str.split("").reverse().join("");
}
console.log(isPalindrome("madam"));                   
console.log(isPalindrome("saikat"));   

// Find the max from Array
const arr = [5,3,8, 1];
const max = Math.max(...arr);
console.log(max);

// check if Object is Empty
function isEmpty (obj){
    return Object.keys(obj).length === 0;
}
console.log(isEmpty({}));
console.log(isEmpty({a:1}));

// Disble Button After Click 
<button id="btn">Submit</button>
 
 const btn = document.getElementById("btn");
btn.addEventListener("click", ()=> {
  btn.disablled = true;
  btn.innerText = "submitted";
})




//use .call to borrow function 

function greet (){
    console.log(`Hello I'm ${this.name}`)
}
const user = {name: "Saikat"};
greet.call(user);
// .call lets you set the value of this.

// use .apply with arguments
function intro (age, city){
    console.log( `${this.name} is ${age} years old and lives in ${city}`)
}

const person = {name: "saikat"};
intro.apply(person, [25,"Dhaka"]);
// .apply ( ) is like .call but takes arguments as an array 

//   use .bind() to create a fixed function 
const person = {name: "saikat"};
function sayHi (){
    console.log("hi," + this.name);

}


const greet = sayHi.bind(person)
greet();

// short -circuiting with || and && 

console.log("" || "Hello");  // it will print Hello if the first one is false
console.log("hi" && "Bye");    //it will print bye of both are ture

// ternary operator  

const age = 18;
const msg = age >= 18? "Adult": "Minor"
console.log(msg)

// merge Two array without duplicates 

const a = [1,3,4,5,6,];
const b = [2,3,4,56,8,9,0,9];

const merged = [...new Set([...a,...b])];
console.log (merged);

// convert object to Array

const user = {
    name: "Saikat",
    age = 27
}

const entries = Object.entries(user);
console.log(entries);