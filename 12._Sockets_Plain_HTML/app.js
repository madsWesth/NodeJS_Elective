import express from "express";
const app = express()

app.use(express.static("public"))

import http from "http"
const server = http.createServer(app)

import { Server } from "socket.io";
const io = new Server(server)

io.on("connection", (socket) => {
    //console.log("Client connected", socket.id)

    io.on("a client changed the color", ({data}) => {

        socket.broadcast.emit("please change the color", (data))
        console.log("why no work",data)
        //socket.emit("please change the color", (data))
    })
})


import path from "path";
app.get("/", (req,res) => {
    res.sendFile(path.resolve("./public/colors.html"))
})

server.listen(3000)