// Exercise 1

const gretter = (myArray, counter) => {
    let greetText = 'Hello';
    for (const name of myArray) {
        console.log(`${greetText} ${name}`);
    }
};

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);

// Exercise 2

function capitalize(str) {

    let [firstChar, ...rest] = str;

    return firstChar.toUpperCase() + rest.join('').toLowerCase();
};

console.log(capitalize('fooBar'));
console.log(capitalize('nodeJs'));

// Exercise 3

const colors = ['red', 'green', 'blue']

function capitalize(str) {

    let [firstChar, ...rest] = str;

    return firstChar.toUpperCase() + rest.join('').toLowerCase();
};

const captializedColors = colors.map(capitalize);

console.log(captializedColors)

// Exercise 4

var values = [1, 60, 34, 30, 20, 5];

const filterValues = values.filter(value => value < 20);

console.log(filterValues)

// Exercise 5

var array = [1, 2, 3, 4]
let intialvalue = 0;

const sumOfArray = array.reduce((accumulator, currentValue) => accumulator + currentValue, intialvalue,);
console.log(sumOfArray)

intialvalue = 1;
const productOfArray = array.reduce((accumulator, currentValue) => accumulator * currentValue, intialvalue,);
console.log(productOfArray)

// Exercise 6
class Car {
    constructor(model, year) {
        this.model = model;
        this.year = year;
    }
    details() {
        return `Model: ${this.model} Engine ${this.year}`;
    }
}

class Sedan extends Car {
    constructor(model, year, balance) {
        super(model, year);
        this.balance = balance;
    }
    info() {
        return `${this.model} has a balance of $${this.balance}`;
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
console.log(car2.details());

const sedan = new Sedan('Volvo SD', 2018, 30000);
console.log(sedan.info());

