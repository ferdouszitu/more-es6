const numbers = [2, 4, 6, 8, 3];
function getDoubles(numbers) {
    const output = []
    for (number of numbers) {
        const doubled = doubleIt(number);
        output.push(doubled);
    }
    return output;
}
// function doubleIt(number) {
//     return number * 2
// }
const doubleIt = num => num * 2;
const makeDouble = numbers.map(doubleIt);
const makeDoubleDirect = numbers.map(num => num * 2);
// console.log(makeDoubleDirect);
const makeDouble2 = numbers.map(x => x * 2);
console.log(makeDouble2);
const fiveTimes = [2, 4, 6, 8, 10].map(x => x * 5);
console.log(fiveTimes);
const adding = [2, 4, 6, 8, 10].map(x => x + 1);
console.log(adding);

const result = getDoubles(numbers);
// console.log(result);
// console.log(makeDouble);

// purpose
// 1.get an Array
// 2.for every elements of array do Something
// 3.store the result in an array
// 4.return the result array