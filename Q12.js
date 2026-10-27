// Q12. User-Defined Exception: InvalidCouponCode

class InvalidCouponCode extends Error {
    constructor(message) {
        super(message);
        this.name = "InvalidCouponCode";
    }
}

function applyCoupon(code) {
    if (code !== "SAVE10") {
        throw new InvalidCouponCode("Invalid Coupon Code!");
    }

    console.log("Coupon Applied Successfully!");
}

try {
    applyCoupon("WRONG");
} catch (error) {
    console.log(error.name + ": " + error.message);
}