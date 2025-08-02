// js data types 

// Primitive Data Types
// Immutable values stored directly in memory.

// String
// Number
// Boolean
// Null
// Undefined
// BigInt
// Symbol


// Non-Primitive (Reference) Data Types
// Mutable values stored as references in memory.
// Object
// Array
// Function
// Date
// RegExp
// Map, Set, WeakMap, WeakSet







// there is  two types  of type coersion : Implicit and explicit
// implicit: by javascript itself ..JavaScript does this automatically when it thinks it's necessary.
// explicit: manually by developers

// There are only three types of conversion 

// sting, number, boolean


implicit : 
let a = 2; 
let b = '20';
console.log(a + b); // 220 string concatination.

// but for -  / *  result will be in number. 
console.log(b/a);
console.log(a*b);
console.log(b-a);

// number + boolean
 let f = 1;         
//   1 has truty value; 

 let g = true;
 console.log(f +g); //2

//  *******************falsy value :

//  list : 0, -0, undefined, false, '', null . 

console.log('');
console.log(0 == "0")
//  it is true; only check value 
console.log(false == '' )  ;
// this is also true because both are false. 



//******************** */ Explicit coertion 

// string to number 
let str = '123';
let num = Number(str);
console.log(num);


// number to string 
let num = 99;
let str = String(num);
console.log(str);

// *****The unary plus operator (+)
let num = +'123';
 is same as 
 let num = Number("123");

 // negates
 let bool = !!"hello";
// same as:
let bool = Boolean("hello");




//****************************** */ NaN : explanation:
// NaN is a special value that stands for "Not a Number".
// It is of type number!
// It represents a mathematical operation that fails or doesn't make sense numerically.
// NaN is the only value in JavaScript that is not equal to itself.

console.log(NaN === NaN); // false;

let result = "abc"/ 2;  
console.log(result);  // NaN
console.log(typeof(result));  // number



// ******************************  for loop ********************* little discussion 
// The for loop is a control flow statement that repeats a block of code a specific number of times.
// for (initialization; condition; increment) {
  // code to execute
// }


// what is i in for loop 
// i is just a variable (often short for "index").

// It's usually used as a counter to track how many times the loop has run or to access array elements by index.
         


let arr = [10, 20, 30];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);         // Accesses the value
  console.log(arr[i] * 2);     // Uses the value
}



// some of the math problem 

// *******************************************  Important******************************************
const numbers = [1,3,4,56,7];

const maximum = Math.max(numbers);
console.log(maximum);
//  result will be NaN

// Math.max dont work with array  we have to use  spread operator

const numbers = [1, 3, 4, 56, 7];
const maximum = Math.max(...numbers); //  Spread the array into individual values
console.log(maximum); // 56

console.log(Math.ceil(4.5));
console.log(Math.floor(6.8));
console.log(Math.random());




