const numbers = [12, 2, 15, 26, 31, 48, 95, 36, 75];
const fives = numbers.find(num => num % 5 === 0);
const fivesAll = numbers.filter(num => num % 5 === 0);
console.log(fives);
console.log(fivesAll);

const products = [
    { id: 1, name: 'laptop', price: 65000 },
    { id: 2, name: 'mobile', price: 40000 },
    { id: 3, name: 'watch', price: 15000 },
    { id: 4, name: 'tablet', price: 25000 }
]

const cheap = products.find(p => p.price < 30000);
console.log(cheap);