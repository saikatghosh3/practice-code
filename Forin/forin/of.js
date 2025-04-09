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
