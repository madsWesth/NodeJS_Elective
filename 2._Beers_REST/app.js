const express = require("express")
const app = express()

app.use(express.json())

const beers = [
    {id: 1, types: "Pilsner"},
    {id: 2, brand: "Carlsberg", alcoholPercentage: 4.6},
    {id: 3, expirationDate: new Date()},
]

let CURRENT_ID = 3

app.get("/beers", (req, res) => {
    res.send({data: beers})
})

app.get("/beers/:id", (req, res) => {
    const foundBeer = beers.find(beer => beer.id === Number(req.params.id))

    foundbeer ? res.send({data: foundBeer}) : res.status(404).send()
})

app.post("/beers", (req, res) => {
    const beerToAdd = req.body
    beerToAdd.id = ++CURRENT_ID
    beers.push({data: beerToAdd})
})

app.patch("/beers/:id", (req, res) => {
    const index = beers.findIndex(beer => beer.id === Number(req.params.id))
    if(index !== -1){
        const foundBeer = beers[index]
        const beerToUpdateWith = req.body
        //spread operator to get all the properties of the object
        //the last key value pair will overwrite previous key value pairs
        //this is an object based on the foundBeer object with properties overwritten by properties from beerToUpdateWith
        const updatedBeer = { ...foundBeer, ...beerToUpdateWith, id : foundBeer.id}
    
        beers[index] = updatedBeer
    } else {
        res.status(404).send()
    }

})

app.delete("/beers/:id", (req, res) => {
    const foundIndex= beers.findIndex(beer => beer.id === Number(req.params.id))
    
    if(foundIndex !== -1){
        beers.splice(foundIndex,1)
        res.status(200).send()
    } else{
        res.status(404).send()
    }

})