//use const to declare and assign a value to a variable that will not change throughout the program
const standardShippingCost = 6;
const discountedShippingCost = 4;

//globally declaring variable
let totalPrice;

//create a function called calculateShippingCost
function calculateShippingCost(totalPriceParameter) {
    let shippingCost;

    if (totalPrice <= 10) {
        shippingCost = standardShippingCost
    } 
    else if (totalPrice <= 20) {
        shippingCost = discountedShippingCost
    } 
    else {
        shippingCost = 0
    }

    console.log(`The shipping price is $${shippingCost}`);
    console.log(`for total price of $${totalPriceParameter}`);
    

}

//assign a value to totalPrice
totalPrice = 4

//calling the function calculateShippingCost and passing totalPrice as the parameter
calculateShippingCost(totalPrice)
