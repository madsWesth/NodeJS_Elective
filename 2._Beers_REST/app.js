const express = require("express")
const app = express()

const beers = [
    {id: 1, types: "Pilsner"},
    {id: 2, brand: "Carlsberg", alcoholPercentage: 4.6},
    {id: 3, expirationDate: new Date()},
]

app.get("/beers", (req, res) => {
    res.send({data: beers})
})

app.get("beers/:id", (req, res) => {
    const foundBeer = beers.find(beer => beer.id === Number(req.params.id))

    foundbeer ? res.send({data: foundBeer}) : res.status(404).send()
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