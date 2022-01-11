let persons = [
    { name: "Alexander", age: 25 },
    { name: "brid", age: 18 },
    { name: "gariannys", age: 20 },
    { name: "Jose Alexandro", age: 25 },
    { name: "Yesfer", age: 17 },
    { name: "Lesfer", age: 15 },
    { name: "Carlos", age: 29 },
    { name: "Jesus", age: 29 },
    { name: "Yhonniel", age: 25 },
    { name: "Juan", age: 16 },
    { name: "Miguel Angel", age: 14 },
    { name: "Miguel Rojas", age: 16 },
    { name: "Yosmar Lobo", age: 16 },
    { name: "Anthony", age: 45 },
    { name: "Marielvys", age: 80 },
    { name: "Jose Daniel", age: 80 },
    { name: "Daniel Faria", age: 89 },
]

const adultsOnly = (persons) => {
    let adults = [];
    let youngters = [];
    let elders = [];

    for (let index = 0; index < persons.length; index++) {
        (persons[index].age >= 18 && persons[index].age < 60) ? adults.push(persons[index]) : persons[index].age >= 60 ? elders.push(persons[index]) : youngters.push(persons[index])

    }

    return [adults, youngters, elders]
}

let people = adultsOnly(persons)

const myFunction = (number) => {
    return number % 2 === 0 ? true : false
}

let isEven = myFunction(7)
console.log(isEven)

