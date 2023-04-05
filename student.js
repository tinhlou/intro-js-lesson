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

/*
========== LESSON 3 - NUMBERS ==========
*/
// 1. Create a sumOfThree function statement that takes in 3 number parameter and returns sum.
    function sumOfThree(num1, num2, num3){
        return num1 + num2 + num3;
    }
    console.log(sumOfThree(5,6,5))
// 2. Create a productofThree function expression that takes in 3 number parameter and returns the quotient.
    function productOfThree(num1, num2, num3){
        return num1 * num2 * num3
    }
    console.log(productNumber(2,3,4))
// 3. Create a getRemainder arrow function that takes in 2 number parameters and returns the remainder of the first number divided by the second number
    const getRemainder = (num1,num2) => {
        return num1 % num2;
    }
    console.log(getRemainder(1,2))
// 4. Create a getRootRounded function that takes in 1 number, and returns the absolute value's square root, rounded up. Note: negative numbers should have their absolute value taken to still work.
    function getRootRounded(num){
        return Math.ceil(Math.sqrt(Math.abs(num)));
    }

    console.log(getRootRounded(11));
// 5. Create a getRandom function that returns a random number from 1-100
    function getRandom(){
        return Math.floor(Math.random()*100) + 1;
    }
    console.log(getRandom())