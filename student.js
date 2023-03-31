/*
========== LESSON 1 - VARIABLES ==========
Complete the following numbered tasks:
*/

// 1. Declare 2 variables below:
    let fruit;
    let apple;

// Initialize 3 variables:

    // 2. Assign one to the type Number below:
    fruit = 2;

    // 3. Assign one to the type Boolean below:
    apple = true;

    // 4. Assign one to the type String below:
    apple = "Orange";

// console.log(fruit)
// console.log(apple)
//declare variable
a =1;
b =2;
//function statements, one use
function nameOfFunction(){
    console.log("hello world!")
}

function addition(a,b){
    let sum = a +b;
    return sum;
}
//invoke fuctions
    nameOfFunction;
    addition;
//function expression
let add = function addition2(a,b) {
    let sum = a + b;
    console.log(sum);
}

add(5,7);

//Example Problem: we want to make a function that g;ives us the area given the length and width
function area(length, width){
    return length * width;
}
console.log(area(3,5));

//EX problem 2: we are given the area function, and now we want to compute volume given a height
function volume(height){
    area() * height;
}
volume(10)
// 1. Create a doubleNumber function statement that takes in 1 number parameter and returns double the value.

function doubleNumber(num) {
    return num * 2;
}


// 2. Create a squareNumber function expression that takes in 1 number parameter and returns the square

const square = function squareNumber(num){
    return num * num;
}


// 3. Create a productNumber arrow function that takes in 2 number parameters and returns the product of the 2 numbers

const productNumber = ( a, b) => a * b;