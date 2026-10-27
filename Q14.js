// Q14. Promise Example

function getProduct() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let product = {
                name: "Laptop",
                price: 50000,
                availability: "Available"
            };

            resolve(product);
        }, 1000);
    });
}

getProduct().then((product) => {
    console.log("Product Name:", product.name);
    console.log("Price:", product.price);
    console.log("Availability:", product.availability);
});