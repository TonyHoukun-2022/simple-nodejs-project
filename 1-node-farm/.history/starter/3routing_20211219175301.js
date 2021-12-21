//http module gives networking capabilities such as building http server
const http = require("http")
//url module can parse url into nicely-formatted obj
const url = require("url")

//create a server
const server = http.createServer((request, response) => {
  //   console.log(request.url)
  const pathName = request.url
  if (pathName === "/" || pathName === "/overview") {
    response.end("this is the overview page")
  } else if (pathName === "/product") {
    response.end("this is the product page")
  } else {
    //return http status code, can be see in console
    //send http header.
    response.writeHead(404, {
      // parse the response msg to be in html format
      "Content-type": "text/html",
    })
    response.end("<h1>page no found</h1>")
  }
})

// start listening for incoming request from clients
server.listen(8000, "127.0.0.1", () => {
  console.log("start listening to requests on port 8000")
})

//http header is a piece of info about the response that we are sending back
