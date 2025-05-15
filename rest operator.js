//Rest in Function Parameters

function sum(...nums) {
  return nums.reduce((a, b) => a + b, 0);
}

console.log(sum(1, 2, 3, 4)); 

// Rest in Destructuring

const [first, ...rest] = [10, 20, 30, 40];
console.log(first); 
console.log(rest);  

//  Rest in Object Destructuring

const person = { name: "Aye", age: 20, city: "Yangon" };
const { name, ...others } = person;

console.log(name);   
console.log(others);
