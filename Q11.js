class Product {
 constructor(name, productId, price) {
        this.name = name;
        this.productId = productId;
        this.price = price;
    }

    displayDetails() {
        console.log("Product Name:", this.name);
        console.log("Product ID:", this.productId);
        console.log("Price:", this.price);
    }
}

let p1 = new Product("Laptop", 101, 50000);

p1.displayDetails();