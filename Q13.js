// Q13. Throw Exception for Low Inventory

function checkInventory(quantity) {
    if (quantity < 5) {
        throw new Error("Product quantity is less than 5!");
    }

    console.log("Sufficient inventory available.");
}

try {
    checkInventory(3);
} catch (error) {
    console.log(error.message);
}