// //blocking, synchronous way
// const fs = require("fs")
// const inputData = fs.readFileSync("./txt/input.txt", "utf-8")
// console.log(inputData)

// const outputData = `This is the input ${inputData}.\nCreated on ${Date.now()}`
// fs.writeFileSync("./txt/output.txt", outputData)
// console.log("file output.txt has been written with outputData")

//non-blocking asynchronous way
// const fs = require("fs")
// fs.readFile("./txt/start.txt", "utf-8", (err, data) => {
//   console.log(data)
// })
// console.log("reading file")

//callbackFn in readFile () => {}

//callbackFn has two args, the first one must be the error, and the second one is the data that read out

//readFile will start reading the file in the background, and as soon as it is ready, it will start the callbackFn.

//when nodejs start reading file in the background at code readFile(), it will not block the code, so the next line of code "log reading file" will be executed. after that, and after the file has been read, then log the data

const fs = require("fs")
fs.readFile("./txt/start.txt", "utf-8", (err, data1) => {
  fs.readFile(`./txt/${data1}.txt`, "utf-8", (err, data2) => {
    console.log(data2)
    fs.readFile("./txt/append.txt", "utf-8", (err, data3) => {
      console.log(data3)
    })
  })
})
console.log("reading file")
