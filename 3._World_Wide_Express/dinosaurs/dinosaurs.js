const {coolDinosaurs, shittyDinosaurs} = require("./dinosaurs.json")

function amountOfCooldinosaurs(){
    return coolDinosaurs.length
}

//exporting
module.exports = {
    calculateAmountOfCoolDinosaurs: amountOfCooldinosaurs
}
