//const express = require("express")
import express from "express"
const app = express()

app.use(express.static("public"))


import helmet from "helmet"
app.use(helmet())


import session from "express-session"
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  }))

import planetsRouter from "./routers/planets.js"
app.use(planetsRouter)


import rateLimit from 'express-rate-limit'

const authlimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	max: 5, // Limit each IP to 100 requests per `window` (here, per 15 minutes)
	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
})

// Apply the rate limiting middleware to all requests
app.use("/auth/*", authlimiter)

app.post("/auth/login", (req, res) => {
    res.send({data: "you are trying to login"})
})

//app.get("/", (req, res) => {
//res.sendFile(__dirname + "/public/clothes.html")
//})

//to only use middleware on certain endpoints
app.use("/auth/*", ipLogger)

function ipLogger (req, res, next) {
    console.log(req.ip)
    next()
}

app.get("/frontgate", ipLogger, (req, res) => {
    res.send("lul")
})

let isHatchOpen = true
function allowEscape(req, res, next) {
    if (isHatchOpen) {
        console.log("Go on")
        req.escape = "Jimmy"
        next()
    } else {
        res.send({message: "You are not allowed to pass"})
    }
}

app.get("/escapehatch", allowEscape, (req, res) => {
    res.send({message: `Congrats, you have managed to escape ${req.escape}`})
})

app.get("/room", (req, res, next) => {
    console.log({data: "you are in room 1"})
    next()
})

app.get("/room", (req, res) => {
    res.send({data: "you are in room 2"})
})

app.get("*", (req, res) => {
    res.send("<h1>fallback route</h1>")
})


const PORT = 3000
app.listen(PORT, () => console.log("server running on port", PORT))