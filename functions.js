/*function that takes one parameter and returns a string like "Making cheese cake"
when called with "cheese cake" store the result in a variable "orders"*/
let orders = "";
function make(item){
    return `Making ${item}!`;
}
orders = make("cheesecake");
console.log(orders);
orders = make("orange juice");
console.log(orders);
orders = make("lemon cake");
console.log(orders);

/*Create a function named takeOrder that takes one parameter `item`. Inside this
function create another function named `confirmOrder` that returns a message like "Order confirmed 
for `item`. Call confirmOrder from within takeOrder and return the result*/ 

let result = "";
function takeOrder(item){
    result = confirmOrder(item)
    function confirmOrder(order){
        return `Order confirmed for ${item}`
    }
}
takeOrder("Burgers");
console.log(result);

//approach 2
/*Question: why did the line control go from test1 console to test2 console 
without executing the second function*/
function getOrder(item) {
  console.log("test1");
  function receivedOrder(order) { 
    return `Order confirmed for ${item}`;
}
  console.log("test2");
  return receivedOrder(item);
}
let con_order = getOrder("French Fries");
console.log(con_order);

/*Write an arrow function calculateTotal that takes two parameters `price` and `quantity`
The function should return the total cost by multiplying the `price` and `quantity` 
Store the result in a variable named `totalCost`*/

const calculateTotal = (price, quantity) => {
    return price * quantity;
}
let totalCost = calculateTotal(1000,2);
console.log(`Total cost is: ${totalCost}`);

/*Write a function named `processOrder` that takes another function `makeTea` as a parameter and calls
it with the argument `Pizza` Return the reult of calling `makeOrder`*/

//example of a high order function which is when function is passed as a variable
function makeOrder(item) {
  return `Making ${item}`;
}

function processOrder(fn){
    return fn("Pizza");
}
let ans = processOrder(makeOrder);
console.log(ans);

/* Write a function  named `createTeaMaker` that returns another function.
The returned function should take one parameter, `teaType` and return a message like
`"Making green tea"`. 
Store the returned function is a variable named `teaMaker` and call it with `"green tea"`.*/

/* Notes: Returning function means the function is defined inside the parent function
As teaMaker has the value getTea  pass the parameter value to teaMaker("value here")*/

function createTeaMaker(){
    return function getTea(teaType) {
      return `Making ${teaType}`;
    };
}
let teaMaker = createTeaMaker();
console.log(teaMaker("green tea"));

//using the reduce function
const addition = (arr) => {
    const sum = arr.reduce((total, counter) => {
        return total + counter;
    },0);
    return sum;
}
let summation = addition([1,5,6,7]);
console.log(summation);