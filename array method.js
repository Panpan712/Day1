//push()

let fruits = ["apple", "banana"];
fruits.push("mango");
console.log(fruits); 

// pop()

let fruit = ["apple", "banana"];
fruit.pop();
console.log(fruit); 

//unshift()

let Fruits = ["banana"];
Fruits.unshift("apple");
console.log(Fruits); 

// shift()

let fruitss = ["apple", "banana"];
fruitss.shift();
console.log(fruitss); 

//splice(start, deleteCount, ...items)

let FRuits = ["apple", "banana", "mango"];
FRuits.splice(1, 1, "orange");
console.log(FRuits); 

// slice(start, end)

let fruiTs = ["apple", "banana", "mango"];
let newFruiTs = fruiTs.slice(0, 2);
console.log(newFruiTs); 

// concat()

let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c); 

//join(separator)

let FRUITS = ["apple", "banana"];
console.log(FRUITS.join(" & ")); 

//indexOf(item)

let fruiTS = ["apple", "banana"];
console.log(fruiTS.indexOf("banana")); 

// includes(item)

let something = ["apple", "banana"];
console.log(something.includes("banana")); 

//reverse()

let fru = ["apple", "banana"];
fru.reverse();
console.log(fru); 

//sort()

let nums = [3, 1, 2];
nums.sort();
console.log(nums); 

// map()

let num = [1, 2, 3];
let doubled = num.map(n => n * 2);
console.log(doubled); 

//filter()

let Nums = [1, 2, 3, 4];
let even = Nums.filter(n => n % 2 === 0);
console.log(even); 

// find()

let NUM = [1, 2, 3];
let found = NUM.find(n => n > 1);
console.log(found); 

// reduce()

let NUMS = [1, 2, 3];
let sum = NUMS.reduce((acc, curr) => acc + curr, 0);
console.log(sum); 

// forEach()

let frui = ["apple", "banana"];
frui.forEach(fruit => {
  console.log(fruit);
});


