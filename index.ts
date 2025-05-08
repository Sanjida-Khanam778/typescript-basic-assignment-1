function formatString(input: string, toUpper?: boolean): string {
    if (toUpper === false) {
        return input.toLowerCase();
    }
    return input.toUpperCase();
}

function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[] {
    const filtered = items.filter(item => item.rating >= 4)
    return filtered;
}

function concatenateArrays<T>(...arrays: T[][]): T[] {
    const result = arrays.reduce((acc, red) => [...acc, ...red], [])
    return result
}

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

function processValue(value: string | number): number {
    if (typeof value === "string") {
        return value.length
    }
    else {
        return value * 2;
    }
}

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

async function squareAsync(n: number): Promise<number> {
    if (n < 0) {
        return Promise.reject("Error: Negative number not allowed")
    }
    else {
        return new Promise(resolve => {
            setTimeout(() => {
                resolve(n * n);
            }, 1000);
        });
    }
}