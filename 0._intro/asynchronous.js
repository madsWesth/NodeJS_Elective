new Promise((resolve, reject) => {
    try {
        //throw new Error("bomb!")
        resolve("everything went well")
    } catch (e){
        reject("something went wrong " + e)
    }
})
//.then(message => console.log(message))
//.catch(e => console.error(e))


function somethingGoodSomethingBad() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            try {
                resolve("success")
            } catch {
                reject("something went wrong")
            }
        }, 4000)
    })
}

somethingGoodSomethingBad()
.then((resolveMessage) => console.log("resolved with message", resolveMessage))
