//http module gives networking capabilities such as building http server
const http = require("http")

//create a server
http.createServer((request, response) => {
  response.end("Hello from the server")
})
