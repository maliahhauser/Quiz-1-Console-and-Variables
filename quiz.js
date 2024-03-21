const prompt = require('prompt-sync')();

//Program 1: Temperature Converter

let temp = prompt("What is the temperature in Fahrenheit?");
let celsius = temp - 32 * 5/9
console.log(celsius);

//Program 2: Grade Calculator

let grade = prompt("What is your grade?");

if(grade >= 90){
    console.log("A");
}
else if(grade >= 80 ){
    console.log("B")
}
else if(grade >= 70 ){
    console.log("C")
}
else if(grade >= 60 ){
    console.log("D")
}
else {
    console.log("F")
}

//Program 3: Leap Year Checker



//Program 4: Largest Number Finder

let num1 = prompt("Chose a number");
let num2 = prompt("Chose a number");
let num3 = prompt("Chose a number");

if(num1 > num2 > num3){
    console.log(num1)
}
if(num1 > num3 > num2){
    console.log(num1)
}
if(num2 > num1 > num3){
    console.log(num2)
}
if(num2 > num3 > num1){
    console.log(num2)
}
if(num3 > num1 > num2){
    console.log(num3)
}
if(num3 > num2 > num1){
    console.log(num3)
}
