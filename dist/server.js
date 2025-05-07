"use strict";
function formatString(input, toUpper) {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}
// console.log(formatString("Hello"));         
// console.log(formatString("Hello", true));   
// console.log(formatString("Hello", false));  
function filterByRating(items) {
    const filtered = items.filter(item => item.rating >= 4);
    // const result = filtered.map(book=>({...book, rating: parseFloat(book.rating.toFixed(1))}))
    return filtered;
}
const books = [
    { title: "Book A", rating: 4.5 },
    { title: "Book B", rating: 3.2 },
    { title: "Book C", rating: 5.0 },
    { title: "Book C", rating: 4.0 },
    { title: "Book C", rating: 5.0 },
];
//   console.log(filterByRating(books)) 
function concatenateArrays(...arrays) {
    const result = arrays.reduce((acc, red) => [...acc, ...red], []);
    return result;
}
//   console.log(concatenateArrays(["a", "b"], ["c"]));
//   console.log(concatenateArrays([1, 2], [3, 4], [5]));
class Vehicle {
    constructor(make, year) {
        this.make = make;
        this.year = year;
    }
    getInfo() {
        console.log(`"Make: ${this.make}, Year: ${this.year}"`);
    }
}
class Car extends Vehicle {
    constructor(make, year, model) {
        super(make, year);
        this.model = model;
    }
    getModel() {
        console.log(`"Model: ${this.model}"`);
    }
}
const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo(); // Output: "Make: Toyota, Year: 2020"
myCar.getModel(); // Output: "Model: Corolla"
function processValue(value) {
    if (typeof value === "string") {
        return value.length;
    }
    else {
        return value * 2;
    }
}
function getMostExpensiveProduct(products) {
    if (products.length === 0) {
        return null;
    }
    const highest = products.reduce((acc, red) => acc.price > red.price ? acc : red);
    return highest;
}
const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];
console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }
var Day;
(function (Day) {
    Day[Day["Monday"] = 0] = "Monday";
    Day[Day["Tuesday"] = 1] = "Tuesday";
    Day[Day["Wednesday"] = 2] = "Wednesday";
    Day[Day["Thursday"] = 3] = "Thursday";
    Day[Day["Friday"] = 4] = "Friday";
    Day[Day["Saturday"] = 5] = "Saturday";
    Day[Day["Sunday"] = 6] = "Sunday";
})(Day || (Day = {}));
function getDayType(day) {
    switch (day) {
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
        default:
            return "Weekday";
    }
}
console.log(getDayType(Day.Monday)); // Output: "Weekday"
console.log(getDayType(Day.Sunday)); // Output: "Weekend"
