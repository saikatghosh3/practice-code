// Reverse a string 

// function reverseString(str){
//     return  str.split(""). reverse().join("")
// }

// console.log(reverseString("i am boy"));


// remove dublicate 


function removeDuplicate(arr){
    return [...new Set(arr)];
}
console.log(removeDuplicate([1,2,3,3,4,5,6,6]));

// larget number in the array 
function largetNumber (arr){
    return Math.max(...arr);
}
console.log(largetNumber([1,2,3,5,5,6,7]));

// larget number in the array 
function lowestNumber (arr){
    return Math.min(...arr);
}
console.log(lowestNumber([1,2,3,5,5,6,7]));

// sum of the array elements 
function SumArray (arr){
    return arr.reduce((sum, num)=> sum + num, 0);
}
console.log(SumArray([1,2,3,4]));

// find factorial of numbers

function factorial(n){
    return n===0 ? 1 : n* factorial(n-1);
}

console.log(factorial(4));


// Find the second largest number in the array

function secondLargest(arr){
    let UniqueArr = [...new Set(arr)];
    UniqueArr.sort((a,b)=> b - a);
    return UniqueArr[1];
    // sort modify the original array 

}
console.log(secondLargest([1,2,4,5,67,7,89,60]));

// find the intersection of two array 

function findIntersection(arr1, arr2){
    return arr1.filter(num=> arr2.includes(num));
}

console.log(findIntersection([1,2,4,5,6,], [2,3,4,5,6,7]));

//  checks if two strings are anargam 
function isAnagram(str1, str2){
    return str1.split("").sort().join("") === str2.split("").sort().join();
}
console.log(isAnagram("listen", "silent")); 
console.log(isAnagram("hello", "world"));

// Remove a specific number form array 

function removeElement (arr, target){
    return arr.filter(num=> num !== target);
}
console.log(removeElement([1,2,3,4,55,6,7,8], 4));

// check if a given string is a palindrome

function isPalindrome(str){
    return str === str.split("").reverse().join("")
}
console.log(isPalindrome("racecar")); 
console.log(isPalindrome("hello"));

// Convert an Object to an Array
function ObjectToArray(obj){
return Object.entries(obj);
}
console.log((ObjectToArray({name: "john", age: 25})));


// convert array to object 

function ArrayToObject(arr) {
    return Object.fromEntries(arr);
  }
  
  const myArray = [["name", "john"], ["age", 25]];
  const myObject = ArrayToObject(myArray);
  
  console.log(myObject); 



  
  // Output: { name: 'john', age: 25 }

function name(){

}


