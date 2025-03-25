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
