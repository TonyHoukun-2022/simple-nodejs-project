// const hello = "hello motherfucker"
// console.log(hello)

//use node module FS to reading file from file system
// require fs module into our code and then return an obj where there are lots of funcs we can use. store the returned obj to variable fs
//by using the FS module, we can get access to functions for reading and writing data

//read file
// readFileSync is the synchronous version read func. read the data from the file and return to code

const fs = require("fs")
const inputData = fs.readFileSync("./txt/input.txt", "utf-8")
console.log(inputData)

const outputData = `This is the input ${inputData}.\nCreated on ${Date.now()}`
fs.writeFileSync("./txt/output.txt", outputData)
