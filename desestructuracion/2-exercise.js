let vehicle = {
    brand: "ford",
    model: "mustang",
    type: "car",
    color: "red"
}

let { model } = vehicle;
console.log(`model = ${model}`)

const getVehicleAttributes = (vehicle) => {
    return `Brand: ${vehicle.brand}, model: ${vehicle.model},type: ${vehicle.type},color: ${vehicle.color}`
}

const message = getVehicleAttributes(vehicle)
console.log(message)


// USING DESTRUCTURING
const getVehicleAttributesUsingDestructuring = ({ brand, model, type, color }) => {
    return `Brand: ${brand}, model: ${model},type: ${type},color: ${color}`
}

let messageDestructuring = getVehicleAttributesUsingDestructuring(vehicle);
console.log(messageDestructuring)