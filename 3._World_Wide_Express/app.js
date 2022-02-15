const express = require("express")
const app = express()

app.get("/", (req, res) => {
    res.send(`
    <h1>Welcome to my website</h1>
    <h2>Take a look</h2>
    `)
})

app.get("/bored", (req, res) => {
    res.sendFile(__dirname + "/public/activities.html")
})

app.listen(8080, () => {
    console.log("Server is running on port: ", 8080)
})
