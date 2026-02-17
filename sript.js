// Exercise one: arrray initialization and property access

const productCategories= ["Books", "Electronics", "Clothing", "Home & Kitchen", "Toys & Games"];
//a
console.log(productCategories[0]);
//b
console.log(productCategories[productCategories.length-1]);
//c
console.log(productCategories.length);
//d
productCategories[1] = "pen";
//e
console. log (productCategories);

//Exercise two: Push, Pop, Shift, Unshift, Splice
let invetory=[10,20,30];

//a
invetory.push(40);
console.log(invetory);

//b
invetory.pop(40);
console.log(invetory);

//c
invetory.unshift(0);
console.log(invetory);

//d
invetory.shift(0);
console.log(invetory);

//e
invetory.splice(20,25);
console.log(invetory);

//e
invetory.splice(1,1,25,35);
console.log(invetory);

//Exercise three: Shallow Copying of Arrays and the reference trap

//a
const originalScores=[90,85,78];
//b
const referenceCopy= originalScores;
console.log(referenceCopy);
//c 
referenceCopy[0]= 100;
console.log("Original Scores:", originalScores);
console.log("Reference Copy:", referenceCopy);;

//d
const spreadCopy= [...originalScores]; // creates a new array with the same elements
//e
spreadCopy[0]= 50;
console.log("Original Scores:", originalScores);
console.log("Spread Copy:", spreadCopy);

//Section B: Searching & Checking (Accessors & Iterators)i

//Exercise 4: Finding Elements by Value and Index

const studentNames= ["Alice", "Bob", "Charlie", "David"];
//a
console.log(studentNames.indexOf("Alice"));
//b
console.log(studentNames.lastIndexOf("salice"));
//c
console.log(studentNames.includes("Charlie"));
//d
console.log(studentNames.includes("Eve"));

//Exercise 5: Advanced Search with Conditionals 

const products= [
    {id:1, name: "Laptop", price: 999},
    {id:2, name: "Smartphone", price: 499},
    {id:3, name: "Tablet", price: 299}
];

//a
const foundProduct= products.find(product => product.id === 2);
console.log(foundProduct);