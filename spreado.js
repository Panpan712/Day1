// Clone / Copy 

const arr1 = [1, 2, 3];
const arr2 = [...arr1]; 
console.log(arr2); 


//array Merge 

const a = [1, 2];
const b = [3, 4];
const combined = [...a, ...b];

console.log(combined); 

// Object Clone / Merge

const obj1 = { name: "Alice" };
const obj2 = { age: 25 };

const combine= { ...obj1, ...obj2 };

console.log(combine); 

// Function Call Argument 

function sum(x, y, z) {
  return x + y + z;
}

const nums = [1, 2, 3];

console.log(sum(...nums)); 

// String to Character Array chg

const name = "Hello";
const chars = [...name];

console.log(chars); 

// Deep clone

const person = {
  name: "John",
  address: { city: "Yangon" }
};

const clone = { ...person };

clone.address.city = "Mandalay";

console.log(person.address.city); 
