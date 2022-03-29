import  express  from "express";
const app = express()

//import cors from "cors"
//app.use(cors())

import path from "path"
app.use(express.static("../client/public"))

import playersRouter from "./router/playersRouter.js"
app.use(playersRouter)



const PORT = process.env.PORT || 3000
app.listen(PORT, () => console.log("server is running on port:", PORT))