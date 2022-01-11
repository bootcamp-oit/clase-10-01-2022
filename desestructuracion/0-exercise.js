const vehicles = ["mustang", "f-150", "truck", "test2"]

// console.log(
//     vehicles[0],
//     vehicles[1],
//     vehicles[2]
// )

// Destructuring
let [car, truck, suv] = vehicles

console.log(
    car,
    truck,
    suv
)


let [auto, , , test] = vehicles;
console.log(auto, test)
