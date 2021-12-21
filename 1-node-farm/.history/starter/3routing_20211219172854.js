//http module gives networking capabilities such as building http server
const http = require("http")
const url = require("url")

//create a server
const server = http.createServer((request, response) => {
  console.log(request.url)
  //send back response
  response.end("Hello from the server")
})

// start listening for incoming request from clients
server.listen(8000, "127.0.0.1", () => {
  console.log("start listening to requests on port 8000")
})
