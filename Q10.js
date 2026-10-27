let products = ["Laptop", "Mobile", "Tablet"];

let [p1, p2, p3] = products;

console.log(p1);
console.log(p2);
console.log(p3);

// Object Destructuring
let product = {
    name: "Laptop",
    price: 50000,
    productId: 101
};

let { name, price, productId } = product;

console.log(name);
console.log(price);
console.log(productId);