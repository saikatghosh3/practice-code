// 1. Check Even or Odd
// Write a function that takes a number as input and returns "even"
//  if the number is even, otherwise "odd".

function CheckNumber(num){
    if(num%2 ===0 ){
        return "even";
    }else{
        return "odd";
    }
}
console.log(CheckNumber(45));


//2. Find the Largest of Two Numbers
// Write a function that takes two numbers and returns the larger one.

function findMax(a,b){
    if(a> b){
        return a;
    }
    else{
        return b;
    }
}

// 3. Sum of All Numbers from 1 to N
// Write a function that returns the sum of all numbers from 1 to n.


function sumAll(n){
    let sum = 0;
    for(let i = 1; i<=n; i++){
        sum+= i;
    }
    return sum;
}
console.log(sumAll(5));


// 4. capitalize first letter or a word 
// write a function that takes a word and returns it with the first letter capitalized

function capitalizeWord(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalizeWord("there"));

// 5. Check if a Number is Prime
// Write a function that checks whether a given number is a prime number.

function isPrime(num){
  if(num <=1) return "not prime"
  for(let i = 2;i<num ; i++){
         if(num % i === 0){
            return "not prime"
         }
  }
    return "is prime";
}
console.log(isPrime(5));
console.log(isPrime(2));

// 6. Check if a Number is Positive, Negative, or Zero
// Write a function that checks if a number is positive, negative, or zero.

function checkNumber(num){
    if(num > 0 ) return 'positive'
    else if (num < 0 ) return "negative"
    else return "zero";
}
console.log(checkNumber(5));
console.log(checkNumber(-6));
console.log(checkNumber(0));

// 7. Find the Factorial of a Number
// Write a function that returns the factorial of a given number.

function factorial(num){
let result = 1;
for ( let i = 1; i<=num; i++ ){
    result = result * i;
}
return result;
}
console.log(factorial(5));


// 8. check if a string is palindrome 
// a palindrome reads the same froward and backward (like madam)

function isPalindrome (str){
   return str === str.split('').reverse().join('') ? "is palindrome": "not Palindrome"
}
console.log(isPalindrome("madam"));


// find the smallest of three number

function findSmallest(a,b,c){
   if(a<b && a <c) return " a is smallest";
   else if( b<a && b< c ) return "b is smallest"
   else return "c is smallest"
}
console.log(findSmallest(9,3,4));

// above code will work but it will print only character . 

function findSmallest(a,b,c){
   if(a<b && a <c) return `${a} is smallest `;
   else if( b<a && b< c ) return `${b} is smallest`;
   else return `${c} is smallest`;
}
console.log(findSmallest(9,3,4));


// short version 

function findSmallest(a,b,c){
    const min = Math.min(a,b,c)
    return `${min} is the smallest`;
}
console.log(findSmallest(9,3,4));

// convert celsius to Fahernheit

function Fahrenheit(celsius){
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}
console.log(Fahrenheit(32));

//. Find the Sum of Even Numbers in an Array
// Given an array of numbers, return the sum of only even ones.

function sumEven(arr){
    let result = 0;
    for(let i = 0; i<= arr.length; i++){
        if (a[i]%2 === 0 ){
            result = result + arr[i] ;
        }
       
    }
     return result;
}
console.log(sumEven([1,2,3,4,5,6,7]));

// short method using method
function sumEven(arr){
    return arr.filter(num => num % 2 === 0).reduce((acc , curr) => acc = curr , 0);

}
console.log(sumEven([1,3,4,5,6,7,8,9]));


// . Count the Number of Words in a Sentence
// Input: "JavaScript is awesome" → Output: 3

function countStr(str){
   return str.split(' ').length; 

}
console.log(countStr("JavaScript is awesome"));



// 0. Check if an Array Contains a Specific Element
// Write a function that checks if a given value exists in an array.
function specificElement(arr, num) {
    return arr.includes(num);
}

console.log(specificElement([1, 3, 4, 5, 6], 4));



// now if we use find method then 

function specificElement(arr, num){
    return arr.find(el => el === num) !== undefined;
}
console.log(specificElement([1, 3, 4, 5, 6], 3));



// . Replace All Occurrences of a Word in a Sentence
// Input: "I like cats. Cats are cute.", replace "cats" with "dogs".


function replaceWord(sentence, oldWord, newWord) {
    const regex = new RegExp(oldWord, 'gi');
    return sentence.replace(regex, newWord);
}

console.log(replaceWord("I like cats. Cats are cute.", "cats", "dogs"));

// with the help of regular expression. g will search globlally, and i will check for case insecitive


// remove duplicate form an array
 function removeDuplicate(arr){
    return [...new Set(arr)];
 }
 console.log(removeDuplicate([1,2,3,3,4,6,5,5,6,7]));
 

 // find the maximum number inside array

 function findMax(arr){
    return Math.max(...arr);
 }
 console.log(findMax([1,2,3,4,5,7]));

 // Reverse a number 

function reverseNumber(num) {
    return parseInt(num.toString().split('').reverse().join(''));
}
console.log(reverseNumber(1234));


// 4. Check if a Year is a Leap Year
// Rules:
// Divisible by 4 → leap
// But if divisible by 100, not a leap year unless also divisible by 400

function leapYear(num) {
    if (num % 4 === 0 && (num % 100 !== 0 || num % 400 === 0)) {
        return "isLeapYear";
    } else {
        return "notLeapYear";
    }
}

console.log(leapYear(2000)); // isLeapYear
console.log(leapYear(1900)); // notLeapYear
console.log(leapYear(1990)); // notLeapYear
console.log(leapYear(2024)); // isLeapYear

// convert a string to title case

function titleCase(str){
    return str.split(' ').map(word => word.charAt().toUpperCase() + word.slice(1)).join(' ');
}
console.log(titleCase("hello world"));


// sum of the digit of the number

function sumDigit(num){
    let result = 0;
    let strNum = num.toString();  // convert number to string
    for(let i = 0; i<strNum.length; i++){
        result += parseInt(strNum[i]);  // again converting string to num;
    }
    return result;
}
console.log(sumDigit(2334));


// find the second largest number in array 

function secondLargest(arr){
   const sorted =  arr.sort((a , b)=> b - a)
    return sorted[1];
}
console.log(secondLargest([1,2,3,4,5,6]));

// swap two vaiable without temp

let a = 5; let b = 6;

[a,b] = [b,a]

console.log(a, b);

// Check if a Character is a Vowel or Consonant
function checkVowel(str){
    let vowel = "aeiouAEIOU";
  for(let i = 0; i< str.length; i++){
    if (vowel.includes(str[i])){
        return true;
    }
  }
  return false;

}

console.log(checkVowel("love you"));
console.log(checkVowel("rythm"));


// reverse each word in a sentence 

function reverseStr(str){
   return str.split('').reverse().join('');
}
console.log(reverseStr("hello world"));


// check if the obj is empty
function isEmpty (obj){
    return Object.keys(obj).length === 0 ;
    
}
console.log(isEmpty({})); // true
console.log(isEmpty({ name: "Saikat" }))

// 26. Merge Two Arrays Without Duplicates

function mergeArray(arr, arr1){
    const arr2= [...new Set([...arr, ...arr1])];
    return arr2;
}
console.log(mergeArray([1,2,3,4,4,5], [12,3,4,55,5,7]));


// sort an array in ascending order

function asenArray(arr){
    return arr.sort((a,b)=> a - b)
}
console.log(asenArray([12,3,4,5,66,7,8]));


// for desnding order below program 
function desenArray(arr){
    return arr.sort((a,b)=> b - a)
}
console.log(desenArray([12,3,4,5,66,7,8]));

// ************ a>b only true or false retun  kore but a-b Positive , negative, and zero er khetre kaj kore 

// Find the Average of Numbers in an Array
// Input: [10, 20, 30] → Output: 20

function avgNumber(arr){
   const middleIndex = Math.floor(arr.length / 2);
   return arr[middleIndex];
}
console.log(avgNumber([12,3,5]));

// Check if Two Arrays are Equal (Same Elements in Same Order) 

function checkArrays(arr, arr1){
   if(arr.length !== arr1.length)
    return false;
         for(let i = 0; i<arr.length; i++){
            if(arr[i] !== arr1[i]){
                return false;
            }
         }
         return true;
}
console.log(checkArrays([1,3,4,5], [1,3,4,5]));
console.log(checkArrays([1,3,4,5], [1,3,4,5,6]));



//  find all duplicates in  an array

function allDuplicate(arr){
  const duplicate = arr.filter((item, index)=>arr.indexOf(item) !==index);
  return [...new Set(duplicate)];
}
console.log( allDuplicate([1,2,2,3,3,4,5,6]));


// Capitalize the First Letter of Every Word in a Sentence

function capitalize(str) {
  return str
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

console.log(capitalize("hello world")); // "Hello World"





// find the longest word in the sentence

function longestSentence(str){
let words = str.split(" ")
let longest = " ";

for(let word of words){
    if(word.length > longest.length){
        longest = word;
    }
}
    return longest; 
    
}

console.log(longestSentence(" i love javascript"))