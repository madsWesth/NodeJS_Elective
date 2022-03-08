const express = require("express")
const app = express()
const fetch = require("node-fetch")

//importing router and using it
const dinosaurrouter = require("./routers/dinosaurrouter.js")
app.use(dinosaurrouter)

//importing file
//node knows this is a file and not a module because of ./
//const dinosaurs = require("./dinosaurs/dinosaurs.json")

//importing module and destructuring 
//const {calculateAmountOfCoolDinosaurs} = require("./dinosaurs/dinosaurs.js")
//console.log(calculateAmountOfCoolDinosaurs())

app.use(express.static("public"))

app.get("/", (req,res) => {
    res.sendFile(__dirname + "/public/frontpage/frontpage.html")
})

app.get("/welcome", (req, res) => {
    res.send(`
    <h1>Welcome to my website</h1>
    <h2>Take a look</h2>
    `)
})

app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html")
})

app.get("/proxy", async (req,res) => {
    const response = await fetch("https://google.com")
    const page = await response.text()
    res.send(page)
})


//fallback port
const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Server is running on port: ", PORT)
})
