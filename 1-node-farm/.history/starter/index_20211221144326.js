//http module gives networking capabilities such as building http server
const http = require("http")
const fs = require("fs")
const { dirname } = require("path")

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
const dataObj = JSON.parse(data)

//create a server
const server = http.createServer((request, response) => {
  //   console.log(request.url)
  const pathName = request.url
  //for overview page
  if (pathName === "/" || pathName === "/overview") {
    response.end("this is the overview page")

    //product page
  } else if (pathName === "/product") {
    response.end("this is the product page")

    //   api
  } else if (pathName === "/api") {
    //   console.log(productData)
    response.writeHead(200, { "Content-type": "application/json" })
    response.end(data)

    //not found
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
