//Declaring variables and assigning them value using let
let myAge = 18;
let myName = 'Somto';
let balance = 35.35;
let height = '';
let weight = "560";
let highesPoint = 4e0;

// doing the same thing as line 001 but now using const 
const money = 2000;
//the console is used to console an element in the browser
console.log(weight);
// the typeof is used to check the type of a variable. the typeof a variable is determined by the value
console.log(typeof money)
console.log(typeof height);

//This right here is a coercion happens when a number meets a string it cannot be added up together unless the string is converted to a number they just merge up.
const result = weight + highesPoint;
console.log(result)
console.log(typeof result);

// this showed me that string start acting whenever it is met
const result2 = myAge + balance + weight;
console.log(result2);
console.log(typeof result2);

// type conversion i just converted a string that numbers inside it to number if at first that the string doesn't have number like value it will convert it to a NaN 
weight = Number(weight)
const result3 = myAge + balance + weight;
console.log(result3);
console.log(typeof result3);

myName = Number(myName)
// this will show NaN but
console.log(myName)

// when you check type of it will show number 
console.log(typeof myName)

// null and undefined
let a;
console.log(a);
console.log(typeof a);

let b = null;
console.log(b);
// This will show Object but its not supposed to do that 
console.log(typeof b);

// when talking about the primitive types this means the earlier types 
//Boolean types: this type can only give a truthy or falsy results
const c = true;
const d = false;
console.log(c);
console.log(typeof c);
console.log(+d);
console.log(typeof d);

//Boolean conversion
console.log(Boolean(money));//Truthy
console.log(Boolean(height));//falsy

const myLaptop = {
    isKeyboardLight: false,
    brand: 'HP',
    model: 'ProBook'
}

console.log(myLaptop);
console.log(typeof myLaptop);//why is this an object?
console.log(typeof myLaptop.isKeyboardLight); //this how to check for the type of a value enclosed in a variable

const myArr=[1,2,443,5,56];
console.log(myArr);
console.log(typeof myArr);//why is this an object?
console.log(typeof myArr[3]);//why does it identify certain numbers only as number


function sayHello() {
    return('Hello')
}
console.log(sayHello);
console.log(typeof sayHello);
console.log(typeof sayHello()); //Does this give us string because it's value is a string or because it is a word

