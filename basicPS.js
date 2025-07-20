// Remove duplicate  from array

function removeDuplicate(arr){
return [...new Set(arr)];
}
console.log(removeDuplicate([1,2,2,3,3,5,5,6]));

// flaten nested array
function flatenArray(arr){
    return arr.flat(Infinity);
}
console.log(flatenArray([1,[2,3], [4,[5,6]]]));

// check if the str is palindrome
function isPalindrom(str){
    str === str.split('').reverse().join('');
}
console.log(isPalindrom("madam"));
console.log(isPalindrom("hello"));

// delay function using promises

function delay(ms){
    return new Promise (resolve=> setTimeout(resolve, ms));
}
delay(2000).then(()=> console.log("2 seconds passed"));

// reverse a string
function reverseString(str){
    return str.split("").reverse().join("");
}
console.log(reverseString("hello"));

// find the max number in array 

function maxNumber(arr){
    return Math.max(...arr);
}
console.log(maxNumber([2,3,45,6,7]));


// fizbuzz problem (hacker rank practice problem);

function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}
fizzBuzz(15);

// capitlize first letter of each word 
function capitalizeWords(str) {
  return str.split(' ').map(word =>
    word.charAt(0).toUpperCase() + word.slice(1)
  ).join(' ');
}
console.log(capitalizeWords("hello world from js"));


// Find the second largest number
function secondLargest (arr){
  let unique = [...new Set(arr)];
  unique.sort((a,b)=> b -a);


  return unique[1];
  

}

console.log(secondLargest([1,2,3,4,5,5,6,6,7]));

// the above logic work like this 
// a	b	b - a	Meaning
// 5	2	-3	Keep 5 before 2
// 9	5	-4	Keep 9 before 5
// 1	2	1	Put 1 after 2

// basic problem  convert celsious to Faherheit 

function toFahrenheit(celsious){
  return (celsious * 9/5) + 32;
}
console.log(toFahrenheit(30));

// merge two arrays without duplicates
function mergeUnique(a,b){
  return [...new Set (...a, ... b)];
}
console.log(mergeUnique([1,2,3,4], [2,3,4,5]));



// find the longest word in sentence 

function longest(str){
  return str.split(' ').reduce((longest, current)=>
  current.length > longest.length? current: longest);
}
console.log(longest("The quick brown fox jumps over the lazy fox"));

// here for better understanding we can use a, b also 
function longest(str){
  return str.split(' ').reduce((a, b)=>
  a.length > b.length? a: b);
}
console.log(longest("The quick brown fox jumps over the lazy fox"));

// the answer will be jupms  but quick could also be the answer but it is not. the reason is below 
// a.length > b.length → false (because equal)

// Returns b

// now reduce concept  

// syntax
array.reduce((accumulator, currentValue) => {
  // return updated accumulator
}, initialValue);
// accumulator → Stores the result of the previous computation.

// currentValue → The current item in the array.

// initialValue (optional but recommended) → The starting value of the accumulator.

// more example on reduce 

// calculate the sum
const numbers = [1,2,3,4,5,6];
const sum = numbers.reduce((acc, curr)=> acc + curr, 0);
console.log(sum);

// find the maximum value 

const number = [4, 9, 1, 7];

const max = number.reduce((acc, curr) => curr > acc ? curr : acc);

console.log(max);


// Take an array of numbers and return the smallest number
 function samllestNumber(arr){
   return Math.min(...arr);
 }
 console.log(samllestNumber([1,3,4,5,6,7,8]));

 // Take an array of numbers and return the total sum of all elements
 function sumArray(arr){
  return arr.reduce((a,b)=> a + b, 0);
 }
 console.log(sumArray([1,2,3,4,5,6,7]));

 // Take an array of numbers and retun the multiplication of all elements

 function productArr(arr){
  return arr.reduce ((a,b)=> a *b, 1);

 }
console.log(productArr([1,3,4,5,6,7]));

// Take an array return the average value.
function average(arr){
  return arr.reduce((a,b)=> a +b, 0) / arr.length;
}
console.log(average([13,4,5,6,7,8]));




// Take an array and return it in reverse order

function reverseArr(arr){
  return arr.slice().reverse();

}
console.log(reverseArr([1,3,4,5,6]));