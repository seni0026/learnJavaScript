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

// when calculating money, do the calculation in cents then divide by 100 to convert to
// function to round numbers
Math.round()

let r = 4;
let s = 5;
let m = r + s;

// alert('The sum is ' + m)

let cartQuantity = 0;

const name = 'Kevon';
console.log(`My name is ${name}`);

const cost = 5 + (3 * 2) + 9;
console.log(`Cost of food: $${cost}`);

const tax = cost * 0.1;
console.log(`Tax (10%): $${tax}`);

const totalCost = cost + tax;
console.log(`Total cost: $${totalCost}`);