// Task 1: Object Properties, Scenario: Customer Profile

let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com",
};    //Declare object with properties

console.log(`name: ${customer.name}`);
console.log(`age: ${customer.age}`);
console.log(`email: ${customer.email}`); 

// Task 2: Object Methods, Scenario: Order Details

let order = {
    orderId: 456,
    totalAmount: 1500,
    status: "Processing",
    
    displayOrder: function() {
        console.log(`Order ID: ${this.orderId}`);
        console.log(`Total Amount: $${this.totalAmount}`);
        console.log(`Status: ${this.status}`);
    } 
};    

order.displayOrder();       //Call the method to Log the order details

// Task 3 Array Manipulation (push, pop, shift, unshift), Scenario: Shopping Cart

let cartItems = ["laptop", "airpods", "iphone"];
cartItems.push("ipad");                            //Add new product
cartItems.pop();                                  //Remove last item
cartItems.unshift("charger");                    //Add item at beginning
cartItems.shift();                              //Remove first item

console.log(cartItems);          //Log final array

// Task 4 Map Method, Scenario: Price Adjustments

let prices = [100, 200, 300];
let discountedPrices = prices.map(price => price * 0.9);    //Apply a 10% discount to each price

console.log(discountedPrices);    //Log discounted prices

// Task 5 Filter Method, Scenario: Product Availability

let inventory = [50, 20, 0, 90, 100];
let availableInventory = inventory.filter(quantity => quantity > 0);   //Use .filter() to remove products with zero stock

console.log(availableInventory);    //Log filtered array

// Task 6 Reduce Method, Scenario: Revenue Calculation

let sales = [500, 300, 300, 400];
let totalRevenue = sales.reduce((accumulator, currentSale) => accumulator + currentSale, 0);   //calculate total revenue

console.log(totalRevenue);   //log total revenue

// Task 7 find() Method, Scenario: Customer Search

let customers = ["Alice", "Bob", "Charlie", "David"];
let foundCustomer = customers.find(customer => customer === "Charlie");   // locate the customer "Charlie"

console.log(foundCustomer);     //log result

// Task 8  Function Declaration, Scenario: Tax Calculation

function calculateTax(amount, taxRate) {
    let tax= amount * taxRate;    //return calculated tax

console.log(`The calculated tax on an amount of $${amount} with a tax rate of ${taxRate * 100}% is: $${tax}`);
return tax;
}; 
let amount = 100;       // Amount to calculate tax on
let taxRate = 0.15;     // Tax rate (15%)

calculateTax(amount, taxRate); 

// Task 9 Function Expression, Scenario: Discount Application

let applyDiscount = function(price, discount) {
    const discountedPrice = price - (price * (discount / 100));
    return discountedPrice;    //return discounted price
};
let result = applyDiscount(100, 20);
console.log(`Discounted Price: $${result.toFixed(2)}`);

// Task 10 Arrow Function, Scenario: Loyalty Points

const calculatePoints = (purchaseAmount) => {
    let points = Math.floor(purchaseAmount / 10);   //1 point per $10
    return points;
};
let purchaseAmount = 75;
let points = calculatePoints(purchaseAmount);
console.log(`You earned ${points} points for spending $${purchaseAmount}.`);





    



