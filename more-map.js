const numbers = [21, 25, 14, 44, 84, 93];
const half = numbers.map(n => n / 2);
const thirds = numbers.map(x => x / 3);
// console.log(half);
// console.log(thirds);

const friends = ['Rahim', 'Karim mia', 'Dulal khan', 'Noyan gul'];
const firstLetter = friends.map(f => f[0]);
// console.log(firstLetter);

const friendsLength = friends.map(f => f.length);
// console.log(friendsLength);

const products = [
    { id: 1, name: 'laptop', price: 45000 },
    { id: 2, name: 'mobile', price: 30000 },
    { id: 3, name: 'watch', price: 5000 },
    { id: 4, name: 'tablet', price: 25000 }
]
// const items = products.map(p => console.log(p.name));
const items = products.map(p => p.name);
console.log(items);