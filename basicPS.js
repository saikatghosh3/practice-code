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


//Take an array and a number and return true if the number exists
function numberExists ( arr, num){
  return arr.inclucdes(num);
}
console.log(numberExists([4,5,6,7], 5));

//Take an array of stings and revmove all empty strings.

function removeString (arr){
  return arr.filter(str => str.trim() !== '');
}
console.log(removeString(["hello", "", " ", " world"]));

// double each Number in array 
// Take an array of numbers and return a  new array with each number doubled.
function double(arr){
  return arr.map(n => n * 2);
}
console.log(double([1,2,3]));

// Take an array and a number and return a new array without that number
function removeNumber (arr, num){
  return arr.filter(n => n !== num)
}
console.log(removeNumber([1,2,3,4,5,6,7],3));

// easy problem
// Take an array and return its first element.
 function  firstElement(arr){
  return arr[0];
 }
 console.log(firstElement([12,30,40]));

 // Take an array and  return its last element. 
 function lastElement (arr){
  return arr[arr.length -1];
 }
 console.log(lastElement([10,20,30,40]));

//  now it is tricky
// the reson is  it has index number 0,1,2,3 but it's length is 4 
// so, in order to get the last elemnt we are doing substruction. 
// it is a combination of  index and length;



//check all numbers are even 

function allEven (arr){
  return arr.every(n=> n %2 === 0 );
}
console.log((allEven([2,3,4,5,6])));
console.log((allEven([2,4,6])));

// Take an array and a number, return a new array of all values greater than the number
function greaterThan(arr, value){
  return arr.filter(n=> n> value);
  
}
console.log(greaterThan([2,3,8,1], 4));

// Take an array of string and return them joined by a dash - . 

function joinWithDash(arr){
  return arr.join('');
}
console.log(joinWithDahs("a", "b", "c"));

// Take an array of numbers and return an arry of strings

function  numbertoStings(arr){
  return arr.map(num=>num.toString());
}
console.log(numbertoStings([1,3,4]));


// Take an array of words and retun the longest one
function longestWord(arr){
  return arr.reduce((a,b)=> b.length > a.length ? b : a, '');
}
console.log(longestWord(["hi", "hello", "goodbye"]));

// Take an array of numbers and replace all 0 with the stirng "Zero"

function replaceZero(arr){
  return arr.map(n=> n === 0 ? "zero": n);
}
console.log(replaceZero([1,2,0,3, 0]));

// Take two arrays of words and return all unique words combined

function uniqueWrods (a,b){
  return [...new Set([...a,...b])];
}
console.log(uniqueWrods(["a", "b"], ["b", "c"]));


// Remove last element for the array

function removeLast(arr){
  return arr.slice(0 , -1)
}
console.log(removeLast([1,2,3]));

// Take an array of numbers and return a new array with each number squared.
function squareNumber(arr){
  return arr.map(n=> n*n);
}
console.log(squareNumber([1,2,3,4,5,6]));

// Return ture if all elements in the array are strings

function checkString(arr){
  return arr.every(item => typeof item === 'string');
}
console.log(checkString(["a", "b", "c"]));

// Take an array and remove all falsy values (false, 0, null, "", undefined, NaN)

function removeFalsy(arr){
  return arr.filter(Boolean);

}
console.log(removeFalsy([0, "hi", "", false, 5, null]));

//Take an array and return the count of numbers greater than 0. 

function countPositve(arr){
  return arr.filter(n=> n> 0).length;
}

console.log(countPositve([-1, 0, 5, 3]));

// the above code will return only the count . because of .lenght
// It doesn't care what's inside. It just counts how many items are in an array:

// if we want to get the positive number then the code will be 

function getPositiveNumber(arr){
  return arr.filter(n => n > 0)
}

console.log(getPositiveNumber([1, -1, -3, 4, 5,-5]));


// if the array has odd length , return 1 middle element . if even , return 2

function getMiddle(arr){
  const mid = Math.floor(arr.length / 2);
  return arr.length %2 === 0 ? [arr[mid-1], arr[mid]] : [arr[mid]]
  // here mid was returning a length. and a[] was   used to get the index. 
}
console.log(getMiddle([1, 2, 3, 4]));
console.log(getMiddle([1, 2, 3]));


// Take a string with multiple  sentences and capitalize each sentenc's first letter.

function capitalizeSentece( str){
  return str.split('. ').map(s=> s.charAt(0).toUpperCase() + s.slice(1)).join('. ')
}
console.log(capitalizeSentece("hello world. my name is js."));

// behind the scene is is working like that 
// s.charAt(0).toUpperCase() + s.slice(1)
// // => "H" + "ello"
// // => "Hello"