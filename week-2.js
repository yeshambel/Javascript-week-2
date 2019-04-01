// assignment for week 2 javascript
// Exercise-1
let indonesian = "Halo, dunia!";
let italian = "Ciao, mondo!";
let spanish = "Hola, mundo!";
console.log( 'Indonesian = '+indonesian+ '\n' + 
             'Italian = '+italian+ '\n'+
             'Spanish = '+spanish);

console.log(Math.round(7.55));

// Exercise-2
// console.log('I'm awesome');
// Uncaught SyntaxError: missing ) after argument list
// The error is because of the single quotation. If we use singel quotation outside 
// then inside we have to use double quotation inside.

 // Exercise-3
 //declare a variable
//  3.1
 let x;
//  3.2
 console.log('the value of x will be: x = 23');
 // TODO -> log the actual value of x
//  3.3
 console.log(x);
//  the result will be undefined
 // TODO -> here you initialize your variable
 x = 23;
 console.log('the value of x is: ' +x);
//  the value of x is 23
 // TODO -> log value of x again
 console.log(x);

//  Exercise-4

// declare AND assign your string
let y = "Hello World";
console.log('the value of my string will be: hello world');
//log the actual value of the string to the console
console.log(y);
// answer= Hello world
// assign a new value to your variable y
y = "Goodmorning social hackers academy";
console.log('the value of my string will be: Goodmorning social hacker academy');
// answer= the value of my string will be: Goodmorning social hacker academy
// TODO -> log the actual value of the string to the console
 console.log(y);
//  answer = Goodmorning social hackers academy

//  Exercise-5

let z = 7.25;
console.log(z);
// result= 7.25
let a = Math.round(z);
console.log(a);
// result= 7
if(a > z){
    let y = a;
    console.log(y);
    // the value of y is 7
}
else{
    let w = z;
    console.log(w);
}
//  Exercise-6
let address = [];
console.log("'Athens', 'Ampelokipous', 'pavormu 16'");
// result= 'Athens', 'Ampelokipous', 'pavormu 16'
console.log(address);
//empty array with 0 lenght

address = [ 'Athens', 'Ampelokipous', 'pavormu 16'];
console.log(address);
//result has 3 elements
let lovedAnimal = ['Dog', 'Sheep', 'Cat'];
console.log(lovedAnimal);
// result has 3 elements

lovedAnimal[3] = "tinyPig";
// add one element at the end of the array
console.log(lovedAnimal);
// result has 4 elements

//exercise-7
let myString = "this is a test";
let lenghtMystring = myString.length;
console.log(lenghtMystring);

//Exercise-8
// 8.1
let foo = 3;
let foo1 = 'hello social hackers academy';
let foo2 = true;
let foo3 = [3,
           'A', 
           'B'];

//8.2
console.log('The value of my variable foo is: ' + foo);
console.log('The value of my variable foo1 is: ' + foo1);
console.log('The value of my variable foo2 is: ' + foo2);
console.log('The value of my variable foo3 is: ' + foo3);
//8.3
console.log('The type of my variable foo is a number ' + foo);
console.log('The type of my variable foo is a string ' + foo1);
console.log('The type of my variable foo is a boolean ' + foo2);
console.log('The type of my variable foo is a object ' + foo3);
//8.4

console.log(typeof(foo));
console.log(typeof(foo1));
console.log(typeof(foo2));
console.log(typeof(foo3));

// 8.5
console.log(typeof(foo)!==typeof(foo1));
console.log(typeof(foo) ===typeof(foo1));
console.log(typeof(foo1)!==typeof(foo2));
console.log(typeof(foo3)!==typeof(foo1));
console.log(typeof(foo1)===typeof(foo3));
console.log(typeof(foo2)!=typeof(foo3));

//8.6

if (typeof(foo)==typeof(foo1)){
    console.log('They have the same variable type.');
}else{
    console.log('They have  different variable type.');
}
if (typeof(foo)==typeof(foo2)){
    console.log('They have the same variable type.');
}else{
    console.log('They have  different variable type.');
}
if (typeof(foo)==typeof(foo3)){
    console.log('They have the same variable type.');
}else{
    console.log('They have  different variable type.');
}
if (typeof(foo)==typeof(foo3)){
    console.log('They have the same variable type.');
}else{
    console.log('They have  different variable type.');
}
if (typeof(foo1)==typeof(foo2)){
    console.log('They have the same variable type.');
}else{
    console.log('They have  different variable type.');
}
if (typeof(foo1)==typeof(foo3)){
    console.log('They have the same variable type.');
}else{
    console.log('They have  different variable type.');
}
if (typeof(foo2)==typeof(foo3)){
    console.log('They have the same variable type.');
}else{
    console.log('They have  different variable type.');
}

// Exercise-9
//9.1
let f = 7;
console.log(f % 3);
console.log('The remainder of (f=f % 7) is 0.');
console.log('The remainder of (f=f % 2) is 1.');
console.log('The remainder of (f=f % 5) is 2.');

// Exercise-10
// 10.1

let person = [
    "yah@yahoo.com",
    25,
    true,
    {firstName : 'Natnael',
    middleName : 'Yimer',
    lastName : 'kosta',
    address:{
        street : 'sofia',
        streetNumber : 22,
    }
    }
];
// 10.2
console.log(6/0 === 10/0);

// 10.3
console.log('Yes we can store multiple types variables in an arrays.');
console.log('Yes we can compaire infinity values.'+ (6/0 === 10/0));