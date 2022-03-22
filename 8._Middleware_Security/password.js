import bcrypt from "bcrypt"
const saltrounds = 12
const plaintextPassword = "password123"
const hashedPassword = "$2b$12$w/SeDlySEDxjaN8KZ7cbD.qge0jNswXWRvXwvR8.d0UQX1RWk/hlW"

console.log(bcrypt)

async function loginRouter() {
    const isSame = await bcrypt.compare(plaintextPassword, hashedPassword)
    console.log(isSame);
}

async function signupRouter() {
    const hashedPassword = await bcrypt.hash(plaintextPassword, saltrounds)
    console.log(hashedPassword)
}

//signupRouter()
loginRouter()