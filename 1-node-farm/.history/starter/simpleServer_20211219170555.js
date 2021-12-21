//http module gives networking capabilities such as building http server
const http = require("http")

//create a server
const server = http.createServer((request, response) => {
  //send back response
  response.end("Hello from the server")
})

// start listening for incoming request from clients
server.listen(8000, "127.0.0.1", () => {
  console.log("start listening to requests on port 8000")
})

//createServer accepts a callbackFn, which will be run each time a new request hits our server.

//the callback has access to the request obj which holds stuff like request url and other, and the response obj, which has lots of methods for dealing with the response

//for sending the response (plain text message), the simplest method is .end

//the callbackFn has two arguments, request and response

// .listen method the 1st para is port (sub-address on a certain host), 2nd para is the host address (local host 127.0.0.1)

//callbackFn in .listen method will run as soon as the server starts listening

//custom hit server by request, request here is hitting the url, 127.0.0.1:8000
