//http module gives networking capabilities such as building http server
const http = require("http")
const fs = require("fs")
const { dirname } = require("path")
//parse variables from the url
const url = require("url")

//just read file at the beginning
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8")
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8")
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8")
//dataObjArr is an array of 5 products converted from json file
const dataObjArr = JSON.parse(data)

//create a server, runs ever there is a request
const server = http.createServer((request, response) => {
  //   console.log(request.url)
  //   console.log(url.parse(request.url, true))
  const { query, pathname } = url.parse(request.url, true)

  //for overview page
  if (pathname === "/" || pathname === "/overview") {
    const productsHtmlArr = dataObjArr.map((product) => {
      return replaceTemp(tempCard, product)
    })
    const productsInStr = productsHtmlArr.join("")
    // console.log(productsInStr)
    const overviewPage = tempOverview.replace("{%product-cards%}", productsInStr)
    response.writeHead(200, { "Content-type": "text/html" })
    response.end(overviewPage)

    //product page
  } else if (pathname === "/product") {
    // console.log(query)
    const product = dataObjArr[query.id]
    const output = replaceTemp(tempProduct, product)
    response.writeHead(200, { "Content-type": "text/html" })
    response.end(output)

    //   api
  } else if (pathname === "/api") {
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
