/* 
 * Filename: sophisticated_code.js
 * Description: This code demonstrates a sophisticated and complex example in JavaScript.
 * It creates a simulated online shopping experience, where users can browse products, add them to their cart,
 * and complete the purchase.
 */

// Define a Product class with properties and methods
class Product {
  constructor(name, price, quantity) {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
  }

  // Get the total price for a given quantity of the product
  getTotalPrice() {
    return this.price * this.quantity;
  }
}

// Define a ShoppingCart class to manage the user's cart
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  // Add a product to the cart
  addProduct(product) {
    this.products.push(product);
  }

  // Remove a product from the cart
  removeProduct(productName) {
    const index = this.products.findIndex(product => product.name === productName);
    if (index !== -1) {
      this.products.splice(index, 1);
    }
  }

  // Calculate the total price of all products in the cart
  calculateTotalPrice() {
    let totalPrice = 0;
    for (const product of this.products) {
      totalPrice += product.getTotalPrice();
    }
    return totalPrice;
  }

  // Checkout and complete the purchase
  checkout() {
    const totalPrice = this.calculateTotalPrice();
    console.log(`Total Price: $${totalPrice.toFixed(2)}`);
    console.log("Processing payment...");
    console.log("Payment successful!");
    console.log("Thank you for your purchase!");
  }
}

// Create instance of ShoppingCart
const cart = new ShoppingCart();

// Create some example products
const product1 = new Product("T-shirt", 19.99, 2);
const product2 = new Product("Jeans", 39.99, 1);
const product3 = new Product("Shoes", 59.99, 1);

// Add products to the cart
cart.addProduct(product1);
cart.addProduct(product2);
cart.addProduct(product3);

// Remove a product from the cart
cart.removeProduct("T-shirt");

// Calculate and display the total price
const totalPrice = cart.calculateTotalPrice();
console.log(`Total Price: $${totalPrice.toFixed(2)}`);

// Checkout and complete the purchase
cart.checkout();