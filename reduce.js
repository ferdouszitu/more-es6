const numbers = [1, 2, 3, 4, 5, 6];
// const total = numbers.reduce((previous, current) => previous + current, 0);

const total = numbers.reduce((sum, num) => {
    console.log(sum, num);
    return sum + num
}, 0);
console.log(total);
