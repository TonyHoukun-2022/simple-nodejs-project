//http module gives networking capabilities such as building http server
const http = require("http")

//create a server

const server = http.createServer((request, response) => {
  //send back response
  response.end("Hello from the server")
})

server.listen(8000, "127.0.0")

//createServer accepts a callbackFn, which will be run each time a new request hits our server.

//the callback has access to the request obj which holds stuff like request url and other, and the response obj, which has lots of methods for dealing with the response

//for sending the response (plain text message), the simplest method is .end

//the callbackFn has two arguments, request and response
