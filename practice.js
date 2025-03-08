// document.getElementById('moveButton').addEventListener('click', function() {
//     document.getElementById('box').style.transform = 'translate(150px, 150px)';
// });

// get method 

// a getter is a method that retrives the value of poperty 
// it allows you to access a property like a variable instead of calling a function 
// const user = {
//     firstName: "saikat",
//     lastName: "Ghosh",

//     get fullName(){
//         return this.firstName + " " + this .lastName;
//     }
// };


// console.log(user.fullName);

// if we didn't use above code then the code will look like this 
// const user = {
//     firstName: "saikat",
//     lastName: "Ghosh",

//     fullName: function (){
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(user.fullName());


// set method: 
// A setter is used to update a property's value
// it allows validation or modification of the value before updation the property 


// const  user ={
//     firstName: "saikat", 
//     lastName: "Ghosh", 
//     get fullName(){
//         return this.firstName + "" + this .lastName;
//     },
//     set fullName(newName) {
//         const parts = newName.split(" ");
//         this.firstName = parts[0];
//         this.lastName = parts[1];

//         // updating the name
//         user.fullName = "jhon Doe";
//         console.log(user.firstName);
//         console.log(user.lastName);
//     }
// }

// oject and class understanding.
// class:

class ToyotaCar {
    start(){
        console.log("start")
    }
    stop(){
        console.log("stop");
    }

    setBrand(brand){
        this.brand =brand;
        // jei ta this er sathe ache oita object er property.
        // ar onno ta jeita parameter akare ache ba argument akare asbe 
    }
}

let fortuner = new ToyotaCar();
fortuner.setBrand("fortuner");
let lexus = ToyotaCar();

// when we need multiple object based on same template then we prefer class 