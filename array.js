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