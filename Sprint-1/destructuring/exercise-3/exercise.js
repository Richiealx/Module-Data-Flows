let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

let total = 0;

// Header (match spacing EXACTLY)
console.log("QTY     ITEM                TOTAL");

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const itemTotal = quantity * unitPricePence;
  total += itemTotal;

  // Fix capitalisation (Hot cakes → Hot Cakes)
  const formattedName = itemName
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");

  // Format columns exactly
  console.log(
    `${String(quantity).padEnd(8)}${formattedName.padEnd(20)}${(itemTotal / 100).toFixed(2)}`
  );
});

console.log("");
console.log(`Total: ${(total / 100).toFixed(2)}`);
