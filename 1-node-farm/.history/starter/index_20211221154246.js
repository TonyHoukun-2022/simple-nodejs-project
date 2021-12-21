//http module gives networking capabilities such as building http server
const http = require("http")
const fs = require("fs")
const { dirname } = require("path")
//parse variables from the url
const url = require("url")

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, "utf-8")
const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`, "utf-8")
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`, "utf-8")
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`, "utf-8")
//dataObj is an array of 5 products converted from json file
const dataObj = JSON.parse(data)

const productCard = (temp, product) => {
  // replace all placeholders with productName
  let output = temp.replace(/{%productName%}/g, product.productName)
  output = output.replace(/{%image%}/g, product.image)
  output = output.replace(/{%price%}/g, product.price)
  output = output.replace(/{%quantity%}/g, product.quantity)
  output = output.replace(/{%description%}/g, product.description)
  output = output.replace(/{%nutrition%}/g, product.nutrients)
  output = output.replace(/{%place%}/g, product.from)
  output = output.replace(/{%id%}/g, product.id)
  if (!product.organic) output = output.replace(/{%not-organic%}/g, "not-organic")
  return output
}

//create a server
const server = http.createServer((request, response) => {
  //   console.log(request.url)
  const pathName = request.url
  //for overview page
  if (pathName === "/" || pathName === "/overview") {
    response.writeHead(200, { "Content-type": "text/html" })
    const productsHtmlArr = dataObj.map((product) => {
      return productCard(tempCard, product)
    })
    const productsInStr = productsHtmlArr.join("")
    // console.log(productsInStr)
    const overviewPage = tempOverview.replace("{%product-cards%}", productsInStr)
    response.end(overviewPage)

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
