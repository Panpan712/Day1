//Syntax
let person = {
    name: "Aung Aung",
    age: 25,
    city: "Yangon"
  };

  //Access Values

  console.log(person.name);   
  console.log(person["age"]);

//Change value
    
person.age = 26;

//(Add new property

person.job = "developer";

//Delete property)

delete person.city;

//Object.keys(obj)

let keys = Object.keys(person);
console.log(keys); 

// Object.values(obj)

let values = Object.values(person);
console.log(values); 

//Object.entries(obj)

let entries = Object.entries(person);
console.log(entries);

// Object.assign(target, source)

let extra = { hobby: "reading" };
let fullInfo = Object.assign({}, person, extra);
console.log(fullInfo);

//Object.freeze(obj)

Object.freeze(person);
person.age = 30; 

// Object.seal(obj)

Object.seal(person);
person.age = 27;   
person.city = "Mandalay"; 

// for...in loop

for (let key in person) {
    console.log(key + ": " + person[key]);
  }

 //Method Object include
 
 let persoN = {
    name: "Aung Aung",
    greet: function () {
      console.log("Hi, I'm " + this.name);
    }
  };
  
  persoN.greet(); 
  
  