// ***********************This file is for array Basic ***************

// array push: 

// push the element at the end of the array    arr.push(item1, item2..)
// array pop: 
// removes and returns the last item modify the original array.
const a= [1,3,4,5];
console.log(a.pop())

// shift: removes and returns the first item  and modify the original array 

console.log(a.shift())

// unshift: adds an item to the start of the Array. also modify the original array 
console.log(a.unshift(44,46))

// splice : add/removes items at any position. and also modify the original array.
 syntax: Array.splice(start , deleteCount, item1, item2...)

 let b = [10, 20, 30, 40, 50];
b.splice(2, 1, 3, 4);
console.log(b);


// slice  returns  a shallow copy of a portion of the array 
// original array remains unchhanged

const c = [1,3,4,5,6,7,8];
 const result = c.slice(2,4);
console.log(result);
console.log(c);



// map:  Returns a new array by applying a function to each item 
// map transform/ modify every item 
Array.map((item, index, array)=>{}); 

const arry1 = [2,3,4,6];
const result = arry1.map(n=> n * 3);
console.log(result);

// filter()
// returns a new array with items that passes a condition
// it selects specific item 

// syntax: array.filter(index,item, array)=> condition)

const numbers = [1, 2, 3, 4, 5, 6];

const evens = numbers.filter((item) => item % 2 === 0);

console.log(evens);    
console.log(numbers);


// Note: map will modify most of the Time and filter will be used to extreact someting. 


// some problems related map and filter 

// square all numbers 
const a = [1,23,4,5]

const result = a.map(n => n * n);
console.log(result);

// * as we changing value 

// keep only positive numbers 

const r = [-2,3,-5, 4, -6,0];
const result = r.filter(n => n > 0);
console.log(result);


// Extract usernames from user objects 

const users = [
  { id: 1, username: 'alice' },
  { id: 2, username: 'bob' },
  { id: 3, username: 'charlie' }
];

const usernames = users.map(user => user.username);
console.log(usernames);


// Get users age> 18;
const people = [
  { name: 'John', age: 17 },
  { name: 'Jane', age: 21 },
  { name: 'Jim', age: 16 },
  { name: 'Jack', age: 25 }
];

const result = people.filter(person=> person.age > 18);
console.log(result);

// now we'll chain filter and map

// filter even numbers and then double them with map

const numbers  = [1,2,3,4,5,6,7,8,9];
const result = numbers.filter(num => num % 2).map(num=> num *2);
console.log(result);


// now the concept of reduce   : reduces array to single value  using an accumulator.
// reduce() takes an array and reduces it to a single value (number, string, object, etc.), by accumulating a result step-by-step.
arry1.reduce((acc, curr, index, array)=> newAcc, intialValue);

// accumulator: The running total/result so far

// currentValue: Current item in the array

// initialValue: Starting value for accumulator


// example1: sum of numbers 
const nums = [1,2,3,4];
const total = nums.reduce((acc, curr)=> acc + curr, 0);
console.log(total);


// multiply all the numbers 


const nums = [1,2,4,5];
const result = nums.reduce((acc, curr)=> acc * curr, 1);
console.log(product);



// count how many times each number appears

const nums = [1,3,3,3,4,5,5,6,7,];

const count = nums.reduce((acc, curr)=>{
  acc[curr] == (acc[curr] || 0 ) +1;
  return acc;
}, {});
console.log(count)


//  count words in a sentence 

const sentence = "apple banana apple orange orange apple"

const words = sentence.split(" ");

const countWrods = words.reduce((acc, word)=>{
  acc[word] = (acc[word] || 0) +1;
  return acc;
}, {});
console.log(countWrods);

// count letters ingnoring case

const letters = ['A', 'a', 'b', 'B', 'c', 'd'];

 const lowerCount = letters.reduce((acc, curr)=>{
  const letter = curr.toLocaleLowerCase();
  acc[letter] = (acc[letter] || 0) + 1;
  return acc;
 }, {});
 console.log(lowerCount);


 some tips:
 reduce((acc, curr) => ..., {})  // when you’re building an object
reduce((acc, curr) => ..., [])  // when you’re building an array
reduce((acc, curr) => acc + curr)  // when you’re reducing to a number



// now we will go for forEach method 

// short explanation:
// We use forEach() when we want to do something with each element in an array — 
// like printing, logging, pushing into another array, or updating a value outside the loop 
// — but we don’t need to build a new array.

// Use Case----------------------------Use This
// Loop and do something---------------forEach()
// Return a new transformed----------------map()
// Filter some items out	--------------filter()
// Reduce to one result (sum, object, etc.)--	reduce()



// example 1: 
// just print every number nothing else
const numbers = [1,2,3,4];
numbers.forEach(num => {
  console.log(num);
});

// push even numbers into another array 

// array.forEach((item, index, array) => {
//   // do something
// });

const nums = [1,2,3,4,5,6,7,8];
let evens = [];

nums.forEach(num => {
  if(num %2 === 0){
    evens.push(num);
  }
});


// use for each to print square of each number
const nums = [1, 3, 4, 5];
let square = [];

nums.forEach(num => {
  square.push(num * num); 
});

console.log(square);


// find () method: 
// only find first mathing value
// if nothing match it will return undefined 
// Good for finding:

// A user by ID
// A product by name
// The first error, match, etc.

// syntax: array.find((item, index, array) => condition)


// find student who have passed 

const students = [
  {name: "Asha ", marks : 40},
  {name: "Bobby ", marks : 80},
  {name: "juli ", marks : 90}
];

const passedStudent = students.find( student=>student.marks> 50);
console.log(passedStudent); 

// find the first even number 

const numbers = [1,3,4,5,6,7];
const firstEven = numbers.find(number => number %2 === 0);
console.log(firstEven);
