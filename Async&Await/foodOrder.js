const foods = ["pizza", "burger", "sushi", "pasta", "salad", "steak"];

function orderFood(food) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!food) {
        reject("No food item provided");
      } else if (!foods.includes(food)) {
        reject(`Food item ${food} is not available`);
      } else {
        resolve(`Food item ${food} is available`);
      }
    }, 1000);
  });
}
async function placeOrder() {
  const order1 = ["pizza", "sushi", "ice cream"];
  try {
    const results = await Promise.all(order1.map(orderFood));
    console.log("All food items are available:", results);
  } catch (error) {
    console.log("Order cannot be completed:", error);
  }
}
placeOrder();
