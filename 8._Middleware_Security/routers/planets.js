import { Router } from "express"

const router = Router()

router.get("/spinplanet", (req, res) => {
    req.session.isSpinning = true
    console.log(req.session)
    res.send({message: `planet was ${req.session.isSpinning}`})
})

router.get("/stopplanet", (req, res) => {
    res.send({message: `planet was ${isSpinning}`})
})



export default router