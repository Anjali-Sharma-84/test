// Q15. Async and Await Example

function getOrderHistory() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(["Laptop", "Mobile", "Headphones"]);
        }, 1000);
    });
}

async function displayOrders() {
    let orders = await getOrderHistory();

    console.log("Customer Order History:");

    orders.forEach((order) => {
        console.log(order);
    });
}

displayOrders();