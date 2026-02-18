
// Exercise one: arrray initialization and property access
const productCategories= ["Books", "Electronics", "Clothing", "Home & Kitchen", "Toys & Games"];
//a
console.log(productCategories[0]);
//b
console.log(productCategories.length-1);

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
console.log("Reference Copy:", referenceCopy);

//d
const spreadCopy= [...originalScores]; // creates a new array with the same elements
//e
spreadCopy[0]= 50;
console.log("Original Scores:", originalScores);
console.log("Spread Copy:", spreadCopy);

//Exercise 4: Finding Elements by Index and Value

const studentNames= ["Alice", "Bob", "Charlie", "Alice", "David"];

//a 
//the indexof, lastindex = if the first condition is successful it print out true then the condition stops
console.log(studentNames.indexOf("Alice"));
//b
console.log(studentNames.lastIndexOf("Alice"));
//c
console.log(studentNames.includes("Charlie"));
//d
console.log(studentNames.includes("Eve"));

//Exercise 5: Advanced Searching with find and findIndex
const products= [
    { id: 1, name: "Laptop", price: 999 },
    { id: 2, name: "Smartphone", price: 499 },
    { id: 3, name: "Tablet", price: 299 },
    { id: 4, name: "Headphones", price: 199 },
    { id: 5, name: "Speaker", price: 1500 }
];

//a 
let foundProduct= products.find(product => product.id === 2); //"==="strictly equal operators checks datatypes and "== "compares the datatypes and values
console.log(foundProduct);

//b
let foundIndex= products.findIndex(product => product.price > 1000);
console.log(foundIndex); // returns -1 if no product is found with price greater than 1000

// Exercise 6: Checking Integrity(some,every)
//a
const userAges= [18, 24, 33, 16, 40];
let age;
console.log(userAges.some(age => age < 18));
//b
console.log(userAges.every(age => age >= 18));
//c
console.log(userAges.some(age => age % 5 === 0));


//SECTION C: Transformation and Reordering
//Exercise 7: Sorting and Reversing

const dataPoints=[42, 10, 500, 2, 77];
//a
const ascendingSorted = [...dataPoints].sort((a, b) => a - b); // sorts in ascending order
console.log(ascendingSorted);

//b
const descendingSorted = [...dataPoints].sort((a, b) => b - a); // sorts in descending order
console.log(descendingSorted);
//c
const reversed = [...dataPoints].reverse(); // reverses the original array order
console.log(reversed);

//Exercise 8: Concatenation, Joining, and Slicing
const arr1=["A", "B", ];
const arr2=["C", "D",];
const sentenceParts=["Hello", "world", "this", "is", "great"];
//a
const combined = arr1.concat(arr2);
console.log(combined);
//b
const sentence = sentenceParts.join(" ");
console.log(sentence);
//c
const middleThree = sentenceParts.slice(1, 4);
console.log(middleThree);

// Exercise 9: Flattening Arrays(flats)
const nestedList = [1, [2, 3], [4, [5, 6]], 7];
//a
const flattenedOnce = nestedList.flat();
console.log(flattenedOnce);
const fullyFlattened = nestedList.flat(Infinity);
console.log(fullyFlattened);

//SECTION D: Functional Programming (Higher-Order METHODS)
//Exercise 10: Mapping Data(map)
const pricesUSD = [10.50, 20.00, 5.25];
//a
const exchangeRate = 1.3; 
const pricesEUR = pricesUSD.map(price => price * exchangeRate);
console.log(pricesEUR);

//b
const priceStrings = pricesUSD.map(price => `Item price: $${price.toFixed(2)}`);
console.log(priceStrings);

// Exercise 11: Filtering Data(filter)

const testScores = [45, 78, 92, 30, 65, 88];
//a
const passingScores = testScores.filter(score => score >= 70);
console.log(passingScores);
//b
const average = testScores.reduce((sum, score) => sum + score, 0) / testScores.length;
const belowAverageScores = testScores.filter(score => score < average);
console.log(belowAverageScores);
                                            

//Exercise 12: Aggregating Data(reduce)
const pricesUSD2 = [10.50, 20.00, 5.25];
//a
const total = pricesUSD2.reduce((sum, price) => sum + price, 0);
console.log(total);
const totalCost = pricesUSD2.reduce((sum, price) => sum + price, 0);
console.log(`Total cost: $${totalCost.toFixed(2)}`);
//b
const maxPrice = pricesUSD2.reduce((max, price) => price > max ? price : max);
console.log(`Max price: $${maxPrice.toFixed(2)}`);
//c
const countAbove15 = pricesUSD2.reduce((count, price) => price > 15 ? count + 1 : count, 0);
console.log(`Prices greater than $15: ${countAbove15}`);

//SECTION : Objects Inside Arrays(Real-World Data Structures)
//Exercise 13: Sorting Objects
const users = [{name: "Zoe", age: 30}, {name: "Adam", age: 25}, {name: "Charlie", age: 30}];

//a
const sortedByAge = [...users].sort((a, b) => a.age - b.age);
console.log(sortedByAge);
const sortedByAgeAndName = [...users].sort((a, b) => {
    if (a.age !== b.age) {
        return a.age - b.age;
    }
    return a.name.localeCompare(b.name);
});
console.log(sortedByAgeAndName);


//Exercise 14: Mapping and Filtering Objects

const userNames = users.map(user => user.name);
console.log(userNames);

const usersOlderThan28 = users.filter(user => user.age > 28);
console.log(usersOlderThan28);

// Section F: Multidimensional Arrays (Matrices)
//Exercise 15: Creating and Accessing a Matrix
//a
let gameBoard = [
  [0, 0, 0],
  [0, 0, 0],
  [0, 0, 0]
];
console.log(gameBoard);

//b
gameBoard[1][1] = 1; // Place a marker in the center
console.log(gameBoard);

//c
console.log(gameBoard[0][2]);

//Exercise 16: Looping Through a Matrix

let gamesBoard = [
  [0, 0, 0],
  [0, 1, 0],
  [0, 0, 0]
];

let sum = 0;

// Nested loops to iterate through the matrix
for (let i = 0; i < gamesBoard.length; i++) {
  for (let j = 0; j < gamesBoard[i].length; j++) {
    console.log(gamesBoard[i][j]); // Print each value
    sum += gamesBoard[i][j];       // Add to sum
  }
}

// Print total sum
console.log("Sum of all elements:", sum);
