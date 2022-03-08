const router = require("express").Router()
const { calculateAmountOfCoolDinosaurs } = require("../dinosaurs/dinosaurs.js")

router.get("/calculatecooldinosaurs", (req, res) => {
    res.send({data: calculateAmountOfCoolDinosaurs()})
})

router.get("/amountofcooldinosaurs", (req,res) => {
    res.redirect("calculatecooldinosaurs")
})

module.exports = router
