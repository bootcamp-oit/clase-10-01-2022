let vehicle = {
    brand: "ford",
    model: "mustang",
    type: "car",
    color: "red",

    registration: {
        city: "Berling",
        state: "Hamburgo",
        country: "Germany",

        locality: {
            address: "address 1",
            street: "calle 1"
        }
    }
}

const { color } = vehicle;
console.log(color)

const { registration: { country } } = vehicle;
console.log(country)

const { registration: { locality: { address } } } = vehicle;
console.log(address)

const street = vehicle.registration.locality.street;
console.log(street)

const destripar = ({ brand, model, registration: { city, country, locality: { address } } }) => {
    return `Brand: ${brand}, model: ${model}.......ciudad: ${city}, country: ${country}, Address: ${address}`
}

let message = destripar(vehicle);
console.log(message)
