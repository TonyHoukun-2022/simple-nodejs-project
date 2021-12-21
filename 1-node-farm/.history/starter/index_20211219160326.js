//blocking, synchronous way
const fs = require("fs")
const inputData = fs.readFileSync("./txt/input.txt", "utf-8")
console.log(inputData)

const outputData = `This is the input ${inputData}.\nCreated on ${Date.now()}`
fs.writeFileSync("./txt/output.txt", outputData)
console.log("file output.txt has been written with outputData")

//non-blocking asynchronous way
fs.