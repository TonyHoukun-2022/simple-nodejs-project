//http module gives networking capabilities such as building http server
const http = require("http")

//create a server
//createServer accepts a callbackFn, which will be run each time a new request hits our server.
//the callbackFn has two arguments, request and response

http.createServer((request, response) => {
  //send back response
  response.end("Hello from the server")
})
