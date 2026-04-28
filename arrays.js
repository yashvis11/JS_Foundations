let food = ["Burgers","Pizza","Salad","Ice-cream"];
const item1 = food[0]; //storing first element
const item2 = food[2]; //storing second element
console.log(food[0]);
console.log("Third food item is", item2);

//change element of array
console.log(food);
food[1] = "Gelato";
console.log(food);

//add element to array using push method
let cities = ["Tokyo", "Delhi", "Italy"]
console.log(cities);
cities.push("Rajkot");
console.log(cities);

//remove last element of array using pop method and store in a variable
let orders = ["Burgers", "Pizza", "Salad", "Ice-cream"];
let lastOrder = orders.pop();
console.log("The last order is", lastOrder);

//copy an array into another
orders = ["Burgers", "Pizza", "Salad", "Ice-cream"];
let orders_copy = orders.copyWithin(4, 0, 3);
console.log("Copy of the orders array is ", orders_copy);

