
// 1. Welcome Function
function welcome() {
    console.log("Welcome to JavaScript");
}
welcome();


// 2. Student Function
function student() {
    console.log("Name: Hrithik");
    console.log("Age: 24");
    console.log("City: Salem");
}
student();


// 3. Addition Function
function addition() {
    let a = 10;
    let b = 20;
    console.log(a + b);
}
addition();


// 4. Calculator Function
function calculator() {
    let a = 20;
    let b = 10;

    console.log("Addition:", a + b);
    console.log("Subtraction:", a - b);
}
calculator();


// 5. Company Function
function company() {
    console.log("Welcome to Stackly");
}
company();


// 6. Multiplication Function
function multiplication() {
    let a = 5;
    let b = 4;
    console.log(a * b);
}
multiplication();


// 7. Greeting Function
function greeting() {
    console.log("Good Morning!");
}
greeting();
greeting();
greeting();


// 8. Two Parameters Addition
function addition(a, b) {
    console.log(a + b);
}
addition(10, 20);


// 9. Three Parameters
function student(name, age, city) {
    console.log(name);
    console.log(age);
    console.log(city);
}
student("Hrithik", 24, "Salem");


// 10. Employee Name and Salary
function employee(name, salary) {
    console.log("Employee Name:", name);
    console.log("Salary:", salary);
}
employee("Hrithik", 40000);


// 11. Three Numbers Multiplication
function multiplication(a, b, c) {
    console.log(a * b * c);
}
multiplication(2, 3, 4);


// 12. Name as Argument
function welcome(name) {
    console.log("Welcome " + name);
}
welcome("Hrithik");


// 13. Two Arguments, Three Parameters
function details(name, age, city) {
    console.log(name);
    console.log(age);
    console.log(city);
}
details("Hrithik", 24);


// 14. Three Arguments, Two Parameters
function information(name, age) {
    console.log(name);
    console.log(age);
}
information("Hrithik", 24, "Salem");


// 15. Return Addition
function addition(a, b) {
    return a + b;
}
console.log(addition(10, 20));


// 16. Return Subtraction
function subtraction(a, b) {
    return a - b;
}
console.log(subtraction(20, 10));


// 17. Return Multiplication and Store Result
function multiplication(a, b) {
    return a * b;
}
let result = multiplication(5, 4);
console.log(result);


// 18. Return Person's Age
function getAge() {
    return 24;
}
let age = getAge();
console.log(age);


// 19. Return Division
function division(a, b) {
    return a / b;
}
console.log(division(20, 5));


// 20. One Function Returns, Another Prints
function getNumber() {
    return 100;
}

function printNumber() {
    console.log(getNumber());
}

printNumber();


// 21. VAR Inside Block
{
    var a = 10;
}
console.log(a); // 10


// 22. LET Inside Block
{
    let b = 20;
}
// console.log(b); // ReferenceError


// 23. CONST Inside Block
{
    const c = 30;
}
// console.log(c); // ReferenceError


// 24. VAR Inside Function
function test() {
    var x = 50;
}
// console.log(x); // ReferenceError


// 25. VAR Before Initialization
console.log(num); // undefined
var num = 100;


// 26. LET and CONST Before Initialization

// console.log(a); // ReferenceError
let a26 = 10;

// console.log(b); // ReferenceError
const b26 = 20;

// 27. Named Function
function student(name) {
    console.log(name);
}
student("Hrithik");


// 28. Anonymous Function
let welcome28 = function(name) {
    console.log("Welcome " + name);
};
welcome28 ("Hrithik");


// 29. Arrow Function
let additiontask = (a, b) => {
    console.log("Addition:", a + b);
};
additiontask (10, 20);


// 30. Three Different Function Types

// Named Function - Subtraction
function subtraction(a, b) {
    console.log("Subtraction:", a - b);
}
subtraction(20, 10);


// Anonymous Function - Multiplication
let multiplicationTask = function(a, b) {
    console.log("Multiplication:", a * b);
};
multiplicationTask(5, 4);


// Arrow Function - Division
let divisionTask = (a, b) => {
    console.log("Division:", a / b);
};
divisionTask(20, 5);