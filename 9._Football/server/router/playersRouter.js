import { Router } from "express";
import db from "../database/createConnection.js";
const router = Router()


const players = [
    {id: 1, name: "messi"},
    {id: 2, name: "Ronaldo"},
    {id: 3, name: "ronaldinho"},
]

router.get("/players", async (req, res) => {
    const players = await db.all("SELECT * FROM PLAYERS")
    res.send({data: players})
})


export default router