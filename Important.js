// This one is for understanding functional scope and block scope 

function greet (){
    for(let i = 0; i<=5; i++){
       console.log(`this is inside the block , ${i}`);

    }
    console.log(`this is outside the block scope, ${i}`);
    
}
greet();

// this one is for normal for loop
function greet1(){
    for(var i = 0; i<=0; i++){
        console.log(`this is usual ${i}`)
    }
}
greet1();
// this one is for understanding setTimeout

function greet2(){
    for(var i = 0; i <=5;i ++ ){
        console.log(`This is before setTimeout, ${i}`)
        setTimeout(()=>{
            console.log( `This is inside setTimeout ${i}`)
        },500)
    }
}
greet2();

// the output will be 
// this is before setTimeout 0
// this is before setTimeout 1
// this is before setTimeout 2
// this is before setTimeout 3
// this is before setTimeout 4
// this is before setTimeout 5
// This is inside setTimeout 6
// This is inside setTimeout 6
// This is inside setTimeout 6
// This is inside setTimeout 6
// This is inside setTimeout 6
// This is inside setTimeout 6

// note::: on the above program delay is set 500ms so for loop is executing before then it is entering into setTimeout zone
// if there is was no delay then also: for loop is executing first because it is synchronous  then after executing it will enter asynchronous zone. 
// That is the reason for above output.

// now important explanation 
// The Short Answer:
// When you use let or const in a loop, JavaScript secretly creates a new copy of that variable
//  for each loop cycle — just like a new sticky note in a separate backpack. 🎒

// That means each setTimeout remembers its own unique version of i.

for (var i = 0; i <= 5; i++) {
  setTimeout(() => console.log(i));
}
//var is function-scoped → only one i exists, and it's shared by everyone.
// So by the time setTimeout runs, i is already 6.
// 6
// 6
// 6
// 6
// 6
// 6

// for (let i = 0; i <= 5; i++) {
//   setTimeout(() => console.log(i));
// }
// let is block-scoped AND the loop creates a new i each time.

// ✅ Each setTimeout remembers its own private i.

// 🧠 Behind the scenes, JavaScript treats it like this:


{
  let i = 0;
  setTimeout(() => console.log(i));
}
{
  let i = 1;
  setTimeout(() => console.log(i));
}
// ... and so on
0
1
2
3
4
5
// This special behavior (creating a new scope for each loop iteration)
//  only happens with let and const in for loops.

// It’s not just because of block scope, but because of a feature in JavaScript
//  called “per-iteration binding”.



