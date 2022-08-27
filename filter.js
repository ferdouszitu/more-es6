const numbers = [12, 2, 15, 26, 31, 48, 97, 36, 75];
const bigNums = numbers.filter(n => n > 20);
// console.log(bigNums);
const smallNums = numbers.filter(num => num < 30);
// console.log(smallNums);
const even = numbers.filter(n => n % 2 === 0);
// console.log(even);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 30000 },
    { id: 3, name: 'watch', price: 5000 },
    { id: 4, name: 'tablet', price: 25000 }
]
// const expensive = products.filter(p => p.price > 100000);
// const expensive = products.filter(p => p.price > 10000);
const expensive = products.filter(p => p.price < 1000);
console.log(expensive);