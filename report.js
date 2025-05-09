let isRaining = false;

if (isRaining) {
    console.log("Take an umbrella.");
} else {
    console.log("No need for an umbrella today!");
}


let buyingbicycle= true;

if (buyingbicycle) {
    console.log("money use");
} else {
    console.log("money is stay amount");
}

let islogged = false;

if (islogged) {
    console.log("welcome");
} else {
    console.log("log in again");
}

let age = 15;

let adult = age >= 18 ;

console.log("adult", adult);

let lightopen = true;

lightopen = !lightopen;

console.log("lightswitch" , lightopen);

let schoolstartage = 5 ;

let schoolattend = schoolstartage >=5 ;

console.log("schoolattended", schoolattend);

let angry = true;

angry = !angry;

console.log("Thaeangey", angry);

let number = 6;
let isEven = number % 2 === 0;

console.log("Is even:", isEven); 

let Nu = 8;

let odd = Nu % 3 === 0;

console.log("nuiscorrect", odd);

let a = 10;
let b = 15;
let isGreater = a > b;

console.log("Is a greater than b?", isGreater);

let THAE = 19;
let MYA = 12;
let whoisbig = THAE > MYA;

console.log("thae is greater than mya" , whoisbig);

//string

let name = "thaenu";
console.log("what is your name", name); 

//integer,float

let Age = 30;
let price = 3333;
console.log("urage", Age);
console.log("apple's prize=" , price);

//undefined

let x ;
console.log("x", x);

let thaenuwin;
console.log("hee", thaenuwin);

//null ye ywl chat shi pi tn phoe ma shi

let z= null;
console.log("th" , z);

//object= key or value format

let userName = {
    username: "Mya" ,
    athet: 16
};
console.log("Username" , userName);

let NAME = {
    USERNAME : "NUWIN" ,
    HERAGE : 26
};
console.log("what's ur name" , NAME);

//array tan phoe myr su see

let colors = ["red" , "green" , "black" ];
console.log("Color" , colors);

//symbol unique identity

let id = Symbol("id");
console.log("Symbol ID:", id); 

//bright

let bigNum = 123456789012345678901234567890n;
console.log("BigInt:", bigNum);

//string to number

let str = "123";
let num = Number(str); 
console.log(num);      

//num to string

let Num = 456;
let string = String(Num); 
console.log(string);       

//string to boolean

let st = "hello";
let bool = Boolean(st);
console.log(bool);

let emptyStr = "";
console.log(Boolean(emptyStr)); 

//number to boolean

console.log(Boolean(0));   
console.log(Boolean(123)); 

//boolean to number

console.log(Number(true));  
console.log(Number(false));

//auto type

console.log("5" + 1);     
console.log("5" - 1);     
console.log(true + 1);    

//function declare (next)

function sayHello() {
    console.log("Hello!");
  }

//function call/invoke

  sayHello(); 

//Function with Parameters

  function greet(name) {
    console.log("Hello, " + name + "!");
  }
  
  greet("Alice"); 
  greet("Bob");    
  
//Function with Return Value

  function add(a, b) {
    return a + b;
  }
  
  let result = add(5, 3);
  console.log(result); 

//Anonymous Function

let multiply = function(x, y) {
    return x * y;
  };
  
  console.log(multiply(4, 5)); 

// call the callback function

function greetUser(name, callback) {
    console.log("Hello, " + name);
    callback(); 
  }
  
  function sayBye() {
    console.log("Goodbye!");
  }
  
  greetUser("Alice", sayBye);

  function myauser(name, callme){
    console.log("hi"+ name);
    callme();
  }
  function Goodbye(){
    console.log("ahnyor");
  }
  myauser("thaenuwin" , Goodbye);

//function return to another function. function htl mr anth fun ko ret pyn tr

function outerFunction() {
  return function innerFunction() {
    console.log("Hello from inner function!");
  };
}

const myFunc = outerFunction(); 
myFunc();  

function outerfunction() {
  return function innerfunction(){
    console.log("heeeee")
  };
}
const fun = outerfunction();
fun();

function outfunction() {
  return function inerfunction(){
    console.log("hello my fri")
  };
}
const pan = outfunction();
pan();

function OUTERFUNCTION(message) {
  return function INNERFUNCTON(name){
    console.log(message + "," + name + "!");
  };
}
const pann = OUTERFUNCTION("HI");
pann("MYA");
pann("Thae");

//Arrow Function (ES6+)

const divide = (a, b) => a / b;

console.log(divide(10, 2));

//arrow basic

const sayHelo = () => {
  console.log("Helo!");
};

sayHelo();

//arrow parameters

const greetinG = (name) => {
  console.log("Hi, " + name);
};

greetinG("Alice"); 

//arrow return value

const plus = (a, b) => {
  return a + b;
};

console.log(plus(3, 4)); 

//arrow Function vs Regular Function (about this)

function regular() {
  console.log(this);  
}

const arrow = () => {
  console.log(this); 
};

//Arrow function in array map

const numbers = [1, 2, 3];
const squares = numbers.map(num => num * num);

console.log(squares);

//map

function addWithMap(numbers) {
  let total = 0;
  numbers.map(num => total += num);
  console.log(total);
}
addWithMap([2, 3, 4, 5]);

//fitter

const numberss=[2,3,4,5,6];
const evenNumbers= numberss.filter(function(number){
    return number %2 === 0;
});
console.log(evenNumbers);

//object2 build

const person = {
  name: "John",
  age: 30
};

const address = {
  city: "Yangon",
  country: "Myanmar"
};

person.job = "Developer";
address.zipCode = "11101";

console.log("Person Object:", person);
console.log("Address Object:", address);

//object 1 built

let myHouse = {

  color : "pink" ,
  place : "73 37"
};
let mycar ={...myHouse};

mycar.price= "900";
myHouse.price= "899";

console.log(myHouse);
console.log(mycar);

//string 

 
