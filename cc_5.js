// Task 1: Object Properties, Scenario: Customer Profile

let customer = {
    name: "Micheal Jordan",
    age: 55,
    email: "mjordan@gmail.com"
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
