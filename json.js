class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    introduce() {
      console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
  }
  
  const person1 = new Person("Aung Aung", 25);
  person1.introduce();

 //JSON Parsing (String to Object)

 const jsonString = '{"name": "Aung Aung", "age": 25, "isStudent": false}';
const jsonObject = JSON.parse(jsonString);

console.log(jsonObject.name); 
console.log(jsonObject.age);

//Stringify (Object to String)

const person = {
    name: "Aung Aung",
    age: 25,
    isStudent: false
  };
  
  const JsonString = JSON.stringify(person);
  
  console.log(JsonString); 
  