const smartphones = [
    {brand: "Samsung", price: 4500},
    {brand: "Samsung", price: 7200},
    {brand: "Samsung", price: 3800},
]


const discountedPhones = smartphones.map((smartphone) => {
    smartphone.price -= 500
    return smartphone
})

//console.log(discountedPhones)


const affordablePhones = discountedPhones.filter(phone => phone.price <= 4000)

console.log(affordablePhones)