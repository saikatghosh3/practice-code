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
