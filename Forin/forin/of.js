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



// Try Catch thorw block 

// The try...catch  statement is used to handle errors in your code . Instead of your entire Program 
// crahing when an error happens , you can catch the error and decide what to do next 

try {
    let result = 10/0;
    console.log(result);
    let name = undefined;
    console.log(name.length);
} catch(error){
    console.log("An error occured:", error.message);
}

// fetching api (async/await + try / catch)
async function fetchUserData(){
    try{
        const response = await fetch("https://api.example.com/users");
        if(!response.ok){
            throw new Error("Failed to fetch data")
        }
        const data = await response.json();
    }catch(error){
        console.log("Error fetching data", error.message);
    }
}

fetchUserData();


// User authentication system 

function login(user){
    try{
        if(!user.username || !user.password){
            throw new Error("Username and password are required")
        }
        if(user.username !== "admin" || user.password !== "12334"){
            throw new Error ("invalid credintials");
        }
        console.log("Login successful!");
    }catch (error){
        console.log("Login error:", error.message);
    }
}
login({username: "admin", password: ""});


// file upload check limit 

function upload(file){
    try{
        if(!file) throw new Error("No file selected");
        if(file.size > 5 * 1024* 1024) throw new Error("File is too large");
        if(!["image/jgeg", "image/png"].includes(file.type)){
            throw new Error ("only JPG and PNG are allowed")
        }
        console.log("File ready to upload: ", file.name)
    }catch(error){
        console.log("Upload error: ", error.message);
    }
   
}

uploadFile({ name: "image.png", size: 6000000, type: "image/png" });


//  Given an array of numbers, find the total sum.

let numbers = [5,10,15, 20];

function sumArray(arr){
    let total = 0;
    for(let i= 0; i<arr.length; i++);{
    total += arr[i];
}
return total;
}
console.log(sumArray([4,5,6,7,8,9,10]));

// count even and odd in the array are even vs odd.

function countEvenOdd(arr){
    let even = 0;
    let odd = 0;

    for (let i = 0; i<arr.length; i++){
        if(arr[i] % 2 === 0){
            even ++;
        }else {
            odd++;
        }
    } 
    console.log(`Even: ${even}, Odd: ${odd}`)
    
}


// some problem based on  || and && operater 
// && condition : requirements
// if both A and B are true, return true;
// if either is false return false;

// || condtion :
// if either A or B is true, return true;
// only returns false if both are false;




// check a person is 18 and has license
// let age = 19;
// let hasLicense = true;
// if(age >=18 && hasLicense){
//     console.log("you can drive");
// }

// accessing with || operator 

let isLoggedIn = false;
let isGuest = true;

if(isLoggedIn || isGuest){
    console.log("Access granted");
}


// Login Auth with && 
let enteredUsername = "admin";
let enterdPassword = "1234";

if (enteredUsername === "admin" && enterdPassword === "password");{
    console.log("Login successful");
}



// nested loop problems 

// print 4 stars in 3 rows 
function PrintStars(rows, cols){
   
    for(i = 1; i<=rows; i++){
        line = ")";
        for(j= 1; j<= cols; j++){
            line += "*";
        }
        console.log(line)
    }
}
console.log(PrintStars(3,4));


// Number pattern (triangle)

function printNumberTriangle(n){
    for(let i = 1; i<= n ; i++){
        let line = "";
        for(j= 1; j<=i; j++){
            line +=j + "";
        }
        console.log(line);
    }
}

printNumberTriangle(n);


// some real life example

// a restaurant wants to show all possible combinations of means and drinks

let meals = [ "burger", "Pizza", "pasta"];
let drinks = ["coke", "water", "juice"];
for(let i = 0; i<meals.length; i++){
    for(let j= 0; j<drinks.length; j++){
        console.log(`${meals[i]} with ${drinks[j]}`);
    }
}

// In a school, every student has to take every subject.
//  Print what subject each student is taking.

let students = ["Bob", "Jhon", "Peter"];
let subjects = ["Bangla", "math", "social-science"];

for(i= 0; i<subjects.length; i++){
    for(j = 0; j< subjects.length; j++){
        console.log(`${students[i]} studies ${subjects[j]}`);
    }
}

// ask the user how many rows and seats are in a tehater.
let rows = parseInt(prompt("Enter a number of rows :"));
let seats = parseInt(prompt("Enter the number seats per row :"));

for(let i= 1; i<= rows; i++){
    let seatRow = `Row ${i}`;
    for (j=1; j<= seats; j++){
        seatRow += `[${j}]`;
    }
    console.log(seatRow);
}