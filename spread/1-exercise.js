const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const [one, two, , four, ...rest] = numbers;

console.log(one)
console.log(two)
console.log(four)

// console.log(three)
console.log(...rest)
