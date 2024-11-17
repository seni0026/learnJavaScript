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

// create an object for the product basketball
const basketball = {
    name: 'basketball',
    price: 2095
};

console.log(basketball);

basketball.price += 500;
console.log(basketball.price);

// use bracket notation to add delivery-time to the object
basketball['delivery-time'] = '3 days';
console.log(basketball);

// create a function that tells which product is more expensive
function comparePrice(product1, product3) {
    if (product1.price < product3.price) {
        return product1;
    } else {
        return product3;
    }
}

const product1 = {
    name: 'pants',
    price: 200
};

const product3 = {
    name: 'shirt',
    price: 100
};

console.log(comparePrice(product1, product3));

// convert string to lowercase
let string = 'HELLO WORLD!';
let text = string.toLowerCase();
console.log(text);

// how to repeat a string many times
let word = 'test';
let result = word.repeat(2);
console.log(result);

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

const name = 'Kevon';
console.log(`My name is ${name}`);

const cost = 5 + (3 * 2) + 9;
console.log(`Cost of food: $${cost}`);

const tax = cost * 0.1;
console.log(`Tax (10%): $${tax}`);

const totalCost = cost + tax;
console.log(`Total cost: $${totalCost}`);

const hour = 7;
const myName = 'Kevon';
let greeting = '';

if (hour > 6 && hour < 12) {
    greeting = 'Good morning';
} else if (hour > 13 && hour < 17) {
    greeting = 'Good afternoon';
} else {
    greeting = 'Good night';
}

console.log(`${greeting}, ${myName}!`);


// use ternary operator to substitute if else statement
const age = 5;
const isHoliday = true; 

const checkForDiscount = (age < 6 || age > 65) && !isHoliday ? 'Discount' :  'No Discount';

console.log(`${checkForDiscount}`);

function greet(name) {
    if(!name) {
        console.log(`Hello there!`);
    } else {
        console.log(`Hello, ${name}!`);
    }
}
greet('Kevon');

// create a function that converts celsius to fahrenheits
function convertToFahrenheit (celsius) {
    return (celsius * 9 / 5) + 32;
}

console.log(convertToFahrenheit(25));

// create a function that converts fahrenheits to celsius  
function convertTocelsius (fahrenheit) {
    return (fahrenheit - 32) * 5 / 9;
}

console.log(convertTocelsius(86));

// create a function that converts one unit to the other
function convertTemperature(degrees, unit){
    if (unit === 'C') {
        const result = convertToFahrenheit(degrees);
        return `${result}F`
    } else if (unit === 'F'){
        const result = convertTocelsius(degrees);
        return `${result}C`
    }
}

console.log(convertTemperature(25, 'C'));
console.log(convertTemperature(86, 'F'));

// create a function that converts length to another unit
function convertLength(length, from, to) {
    if (from !== 'km' && from !== 'miles' && from !== 'ft') {
        return `Invalid unit: ${from}`;
    } else if (to !== 'km' && to !== 'miles' && to !== 'ft') {
        return `Invalid unit: ${to}`;
    }

    if (from === 'miles' && to === 'km') {
        return `${length * 1.6} km`;

    } else if (from === 'km' && to === 'miles') {
        return `${length / 1.6} miles`;

    } else if (from === 'miles' && to === 'ft') {
        return `${length * 5280} ft`;
        
    } else if (from === 'km' && to === 'ft') {
        return `${length * 3281} ft`;
    }
}

    console.log(convertLength(5, 'miles', 'km'));
    console.log(convertLength(5, 'miles', 'ft'));
    console.log(convertLength(5, 'km', 'ft'));
    console.log(convertLength(5, 'lbs', 'lbs'));



// create a function that updates the cart quantity
let cartQuantity = 0;

function updateCartQuantity(item) {
    if(cartQuantity + item > 10) {
        alert(`Your cart is full! Cart can hold ${10 - cartQuantity} more item/s`)   
        return;
    }  
    
    if (cartQuantity + item < 0) {
        alert('Not enough items in cart!')
        return;
    }
        
    cartQuantity += item;
    console.log(`Cart Quantity: ${cartQuantity}`)
}


// create an object
const product = {
    name: 'socks',
    price: 1090
};

// dispaly object is console
console.log(product);

// display object property in console
console.log(product.name);
console.log(product.price);

// change the value of an object property
product.name = 'cotton socks';
console.log(product);

// add a property to the object product
product.newProperty = true;
console.log(product);

// delete a property from the object
delete product.newProperty;
console.log(product);

// use bracket notation to access properties in an object that don't work
const product2 = {
    name: 'shirt',
    // brackets are not necessary when setting values
    ['delivery-time']: '1 day',
    // nested object
    rating: {
        stars: 4.5,
        count: 87
    },
    // function inside object 
    fun: function function1 () {
        console.log('function inside an object');
    }
};

console.log(product2);
console.log(product2['delivery-time']);

// call the function from the object. the is called a is method
product2.fun();

// convert the JS object into JSON syntax. JSON does not support functions and uses double quotes instead of single
console.log(JSON.stringify(product2));

// convert the JSON object into JS syntax
const jsonString = JSON.stringify(product2);

console.log(JSON.parse(jsonString));

// load data from local storage
console.log(localStorage.getItem('name'));

// save data to local storage. local storage only supports string values, that's why we use JSON.stringify to convert the code into string
localStorage.setItem('name', 'value');

const object4 = {
    message: 'Good Job!',
    price: 799,
// the shorthand method syntax
    method() {
        console.log('method')
    }
};

object4.method();

// destructuring is when you take a property and store it into a variable with the same name, this creates a shortcut
const {message, price} = object4;
console.log(message, price);

// Document Object Module (DOM)
//document.querySelector() gets any element inside the html
console.log(document.querySelector('title')
    .innerHtml = 'DOM');