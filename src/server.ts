function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}

// console.log(formatString("Hello"));         
// console.log(formatString("Hello", true));   
// console.log(formatString("Hello", false));  



function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filtered = items.filter(item => item.rating >= 4)
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

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result = arrays.reduce((acc, red) => [...acc, ...red], [])
    return result
}

//   console.log(concatenateArrays(["a", "b"], ["c"]));
//   console.log(concatenateArrays([1, 2], [3, 4], [5]));


class Vehicle {
    private make: string;
    year: number;
    constructor(make: string, year: number) {
        this.make = make;
        this.year = year;

    }
    getInfo(): void {
        console.log(`"Make: ${this.make}, Year: ${this.year}"`);
    }
}

class Car extends Vehicle {
    private model: string
    constructor(make: string, year: number, model: string) {
        super(make, year);

        this.model = model;

    }
    getModel(): void {
        console.log(`"Model: ${this.model}"`);
    }
}

const myCar = new Car("Toyota", 2020, "Corolla");
myCar.getInfo();   // Output: "Make: Toyota, Year: 2020"
myCar.getModel();  // Output: "Model: Corolla"


function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length
    }
    else {
        return value * 2;
    }
}

// console.log(processValue("hello"));
// console.log(processValue(10));

interface Product {
    name: string;
    price: number;
}

function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
        return null;
    }
    const highest = products.reduce((acc, red) => acc.price > red.price ? acc : red)
    return highest
}

const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 }
];

console.log(getMostExpensiveProduct(products));
// Output: { name: "Bag", price: 50 }

enum Day {
    Monday,
    Tuesday,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}

function getDayType(day: Day): string {
    switch (day) {
        case Day.Saturday:
        case Day.Sunday:
            return "Weekend";
        default:
            return "Weekday";
    }
}

console.log(getDayType(Day.Monday));   // Output: "Weekday"
console.log(getDayType(Day.Sunday));   // Output: "Weekend"
console.log(getDayType(Day.Saturday));   // Output: "Weekend"
console.log(getDayType(Day.Friday));   // Output: "Weekend"