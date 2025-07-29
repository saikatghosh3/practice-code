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