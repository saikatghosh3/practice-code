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