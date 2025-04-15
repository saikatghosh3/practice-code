// Reverse a string ([split("") and join("")]) spce na dekhei character wise vag kore

// function reverseString(str){
//     return  str.split("").reverse().join("")
// }

// console.log(reverseString("i am boy"));
// ([split("") and join("")]) space na dekhei character wise vag kore

// Reverse Words in a Sentence
//  same code jodi space thake tahole word anusare vag kore.

// function reverseString(str){
//     return  str.split(" ").reverse().join(" ");
// }

// console.log(reverseString("Hello how are you"));



// remove dublicate  and find unique number same


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


// merge the two array

function mergeArray (arr1, arr2){
    return[...arr1,...arr2].sort((a,b)=> a -b );
}

console.log(mergeSortedArrays([1, 3, 5], [2, 4, 6]));

// -> spread operator is merging. and sort is placing ascending order 

// Count the Occurrences of Each Element in an Array

function CountOccurrences(arr){
    return arr.reduce((acc, num)=> {
        acc[num] = (acc[num] || 0) +1;
        return acc;

    }, {})
}

console.log(CountOccurrences([1,2,2,3,3,3,4,5]));

// date realted problems and practice 

// Write a function that returns today’s date in the YYYY-MM-DD format.

function getTodayDate(){
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() +1).padStart(2,'0');
    const day = String(today.getDate()).padStart(2, '0');

    return `${year}- ${month}- ${day}`;
}

console.log(getTodayDate());

// Write a function that takes a date string (YYYY-MM-DD) and returns true if it’s a Saturday or Sunday.

function  isWeekend(dateStr) {
    const date = new Date(dateStr);
    const day = date.getDay();
    return day === 0 || day == 6;
    
}
console.log(isWeekend("2025-04-12"));
console.log(isWeekend("2025-04-13"));
console.log(isWeekend("2025-04-15"));

// Create a function that calculates a person's age based on their birth date.
  function calculateAge(dob){
    const birthDate = new Date(dob);
    const today = new Date();
  
    let age = today.getFullYear() -birthDate.getFullYear();
    const m  = today.getMonth() -birthDate.getMonth();
    if (m< 0 || (m ===0 && today.getDate() < birthDate.getDate())){
        age--;
    }
    return age;
}
console.log(calculateAge("2000-08-15"));


// practical example 
// count down Timer 
 function countdown(endDateSrt){
    const endDate = new Date (endDateSrt);
    const now = new Date();
    const diff = endDate - now;

    if (diff<= 0) return "Event ended";
    const days = Math.floor(diff/  (1000*60 *60 *24 ));
    const hours = Math.floor((diff/  (1000*60 *60)) % 24);
    const minutes = Math .floor((diff / (1000 *60)));
    const seconds = Math.floor((diff/ 1000) %60);

    return `${days}d${hours}h${minutes}m ${seconds}s left`;
 
 }

 console.log(countdown("2025-04-16T23:59:59"));