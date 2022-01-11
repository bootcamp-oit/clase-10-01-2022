const vehicle = {
    brand: "Ford",
    model: "Mustang",
    color: "Red"
}

const vehicleV2 = {
    color: "Blue",
    type: "Fast-car",
    year: "1996"
}

const vehicleV3 = {
    year: "2022"
}

const updatedVehicle = { ...vehicle, ...vehicleV2, ...vehicleV3 }

// brand: ford
// model: mustang
// color: red

// color: yellow
// type: fast-car
// year: 1996

// year: 2022

console.log(updatedVehicle)



