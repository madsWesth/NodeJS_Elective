import "dotenv/config"
import express, { urlencoded } from "express";
const app = express()

app.use(express.urlencoded({extended: true}))

import path from "path";
app.use(express.static(path.resolve("../client/public")))

import session from "express-session";
const sessionMiddleware = session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
  })

app.use(sessionMiddleware)


import http from "http"
const server = http.createServer(app)

import { Server } from "socket.io";
const io = new Server(server)

io.on("connection", (socket) => {

    socket.on("colorChange", (data) => {
        io.emit("changeTheColor", {data: data})
    })
})


import userRegistrationRouter from "./routers/userRegistration.js"
app.use(userRegistrationRouter)

const PORT = process.env.PORT || 3000
server.listen(PORT, () => console.log("server is running on port", PORT))
