// for in loop 

// Use it when you want to loop through keys of an object

const user ={
 username:"saikat", 
 age: 24,
 country: "India"
}

for(let key in user){
    console.log(`${key}:${user[key]}`);
}



// for of 
// Use it when you want to loop through values of 
// iterable objects like arrays, strings, maps, sets.
const number = [1,3,45,6,7];
for(let num of number){
    console.log(num);
}

//  example 2
let name1 = "saikat"; 
for (let char of name1){
    console.log(char);
}

// mixed example 
const arry1 = [1,3,4,5,6,7];
for (let index in arry1){
    console.log(index);

}

for (let value of arr){
    console.log(value);
}


// loop simple problems and solutions

// use a loop to print numbers from 1 to 10;

for (let i = 1; i<=10; i++){
    console.log(i)
}

// write a function to retun the sum of first n natural numbers.
function sumNatural(n){
    let sum = 0;
    for(let i = 1; i<= n; i++){
       sum+= i
    }
    return sum;
}
console.log(sumNatural(57))   

function sumArray (arr){
    let total = 0;
    for(let i = 0; i< arr.length; i++){
        total += arr[i];
    }
    return total;
}

console.log(sumArray[4,5,6,7,8,9]);