const express = require('express')
const app = express()

app.use(express.static("public"))

const fs = require('fs')

const nav = fs.readFileSync("./public/components/nav/nav.html").toString()
const footer = fs.readFileSync("./public/components/footer/footer.html").toString()
const frontpage = fs.readFileSync("./public/pages/frontpage/frontpage.html").toString()
const themepark = fs.readFileSync("./public/pages/themepark/themepark.html").toString()

//console.log(nav)
//console.log(frontpage)

const frontpagePage = nav + frontpage + footer
const themeparkPage = nav + themepark + footer

app.get("/", (req, res) => {
    res.send(frontpagePage)
})

app.get("/themepark", (req, res) => {
    res.send(themeparkPage)
})


const PORT = 8080
app.listen(PORT, () => console.log("Server started on port: ", PORT))

