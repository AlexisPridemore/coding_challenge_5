// Task 1: Object Properties, Scenario: Customer Profile

let customer = {
    name: "John Doe",
    age: 35,
    email: "john.doe@email.com"
};

console.log('name: ${customerName}');
console.log('age: ${customerAge}');
console.log('email: ${customerEmail}'); 

// Task 2: Object Methods, Scenario: Order Details

let order = {
    orderId: 456,
    totalAmount: 1500,
    status: "Processing",
    
    displayOrder: function() {
        console.log('Order ID: ${this.orderId}');
        console.log('Total Amount: $${this.totalAmount}');
        console.log('Status: ${this.status}');
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
let discountedPrices = prices.map(price => price * 0.9);

console.log(discountedPrices);


