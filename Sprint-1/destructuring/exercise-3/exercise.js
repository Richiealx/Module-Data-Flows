let order = [
  { itemName: "Hot cakes", quantity: 1, unitPricePence: 232 },
  { itemName: "Apple Pie", quantity: 2, unitPricePence: 139 },
  { itemName: "Egg McMuffin", quantity: 1, unitPricePence: 280 },
  { itemName: "Sausage McMuffin", quantity: 1, unitPricePence: 300 },
  { itemName: "Hot Coffee", quantity: 2, unitPricePence: 100 },
  { itemName: "Hash Brown", quantity: 4, unitPricePence: 40 },
];

let total = 0;

order.forEach(({ itemName, quantity, unitPricePence }) => {
  const itemTotal = quantity * unitPricePence;
  total += itemTotal;

  console.log(
    `${itemName} x${quantity} = £${(itemTotal / 100).toFixed(2)}`
  );
});

console.log(`Total: £${(total / 100).toFixed(2)}`);
