const calculate = (a, b) => {
    const add = a + b;
    const subtract = a - b;
    const divide = a / b;
    const multiply = a * b;

    let array = [add, subtract, divide, multiply]
    return array;
}

let array = calculate(12, 15);

let [add, subtract, divide, multiply] = calculate(17, 23);

console.log(
    add,
    subtract,
    divide,
    multiply
)
