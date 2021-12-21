module.exports = (temp, product) => {
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
