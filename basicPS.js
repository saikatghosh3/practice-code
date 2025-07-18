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