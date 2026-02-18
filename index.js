const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Desk", price: 300 },
  { id: 4, name: "Chair", price: 150 }
];

const warehouse = [
  [1, 2, 3],
  [4, 1, 2],
  [3, 4, 1]
];

function analyzeWarehouse(products, warehouse) {
  
  // 1. Flatten the Matrix
  const flatWarehouse = warehouse.flat();
  console.log("Flattened warehouse:", flatWarehouse);
  
  // 2. Use Nested Loops - Count total items and calculate total inventory value
  let totalItemsStored = 0;
  let totalInventoryValue = 0;
  
  for (let i = 0; i < warehouse.length; i++) {
    for (let j = 0; j < warehouse[i].length; j++) {
      totalItemsStored++;
      let productId = warehouse[i][j];
      let product = products.find(p => p.id === productId);
      if (product) {
        totalInventoryValue += product.price;
      }
    }
  }
  console.log("Total items stored:", totalItemsStored);
  console.log("Total inventory value:", totalInventoryValue);
  
  // 3. Count Product Frequency
  let productCount = {};
  for (let i = 0; i < flatWarehouse.length; i++) {
    let productId = flatWarehouse[i];
    if (productCount[productId]) {
      productCount[productId]++;
    } else {
      productCount[productId] = 1;
    }
  }
  console.log("Product count:", productCount);
  
  // Find the most stored product
  let maxCount = 0;
  let mostStoredProductId = null;
  for (let id in productCount) {
    if (productCount[id] > maxCount) {
      maxCount = productCount[id];
      mostStoredProductId = id;
    }
  }
  let mostStoredProduct = products.find(p => p.id === Number(mostStoredProductId));
  console.log("Most stored product:", mostStoredProduct);
  
  // 4. Use map() - Create description array
  let productDescriptions = products.map(p => `${p.name} costs $${p.price}`);
  console.log("Product descriptions:", productDescriptions);
  
  // Create array with converted currency
  let convertedPrices = products.map(p => ({
    ...p,
    convertedPrice: p.price * 1.2
  }));
  console.log("Converted prices:", convertedPrices);
  
  // 5. Sorting & Reverse - Sort by price ascending
  let sortedAscending = [...products].sort((a, b) => a.price - b.price);
  console.log("Sorted ascending:", sortedAscending);
  
  // Sort by price descending
  let sortedDescending = [...products].sort((a, b) => b.price - a.price);
  console.log("Sorted descending:", sortedDescending);
  
  // Reverse the ascending result
  let reversedAscending = [...sortedAscending].reverse();
  console.log("Reversed ascending:", reversedAscending);
  
  // 6. Use filter() - Filter products above $200
  let expensiveProducts = products.filter(p => p.price > 200);
  console.log("Expensive products (>$200):", expensiveProducts);
  
  // 7. Use reduce() - Calculate total value of all products
  let totalProductValue = products.reduce((sum, p) => sum + p.price, 0);
  console.log("Total product value:", totalProductValue);
  
  // Find the most expensive product using reduce
  let mostExpensiveProduct = products.reduce((max, p) => p.price > max.price ? p : max);
  console.log("Most expensive product:", mostExpensiveProduct);
  
  // Return the required object
  return {
    totalItemsStored: totalItemsStored,
    totalInventoryValue: totalInventoryValue,
    mostStoredProduct: mostStoredProduct,
    sortedAscending: sortedAscending,
    sortedDescending: sortedDescending,
    expensiveProducts: expensiveProducts
  };
}

const result = analyzeWarehouse(products, warehouse);
console.log("\nFinal Result:", result);