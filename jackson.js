
// Function Declarations
// var addition = function(){}; // ES6 format function
// var addition = () =>{};  // fat arrow function
// function addition(){} // normal format without termination.

// var addition = () =>{  //function definition starts 
//     console.log(7+8);
// }; // function definithion ends here



// (() => {  
//     console.log(7+8);
// })()

// //function call / invoking a function
// addition();


// function Parameters the function can be used many times.
var addition = (x,y) =>{ 
// let x = 2;
// let y = 4;
    console.log(x+y);// x is the parameter
}
addition(7,8); //7 is an argument
addition(4,9);
addition(56,44)

var addition = (x,y) =>{
    let sum = x+y;
    return sum;
};

let subtraction = (a,b) =>{
    let sub = a-b;
    return sub;

};

var multiplication = (x,y) =>{
    let mult = addition(2,4)* subtraction(6,3)
    console.log(mult) // when you console log it means you are done to return all the function.

};
multiplication();




// declearing the for loop 
for(var f =100; f>0; f--) {
    console.log(f);
}
console.log(f);


// OBJECT LITERAL
// object jackson
// is created using object literal
var sandra = {
    firstName:"atim",
    lastName:"joyce",
    age:"30",
    gender:"female",

};

var bmw = {
    color: "red",
    model: "x6",
    make: 2019,
    seat: 5,
}
