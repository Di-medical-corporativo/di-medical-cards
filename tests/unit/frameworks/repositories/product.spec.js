import productsRepository from '../../../../src/frameworks/repositories/product.repository'

const formatResult = (result = {}) => {
  const productsList = []
  for (const id of Object.keys(result)) {
    productsList.push({
      id,
      ...result[id]
    })
  }

  return productsList
}

describe('Product repository, firebase database has 9 elements to test in dimedical-test', () => {
  test('should return first 5 products', async () => {
    const result = await productsRepository.getAllProducts()
    const productsList = formatResult(result)

    expect(productsList.length).toBe(5)
  })

  test('should start after last element when a date is provided and asks to paginate', async () => {
    const result = await productsRepository.getAllProducts()
    let productsList = formatResult(result)
    productsList.forEach(p => console.log(new Date(p.date)))

    const lastDate = productsList[productsList.length - 1].date
    const secondPaginatedPage = await productsRepository.getAllProducts(lastDate)
    productsList = formatResult(secondPaginatedPage)

    productsList.forEach(p => console.log(new Date(p.date)))
  })

  test('should return null when there are no more products to paginate', async () => {
    const result = await productsRepository.getAllProducts()
    let productsList = formatResult(result)

    const lastDate = productsList[productsList.length - 1].date
    const secondPaginatedPage = await productsRepository.getAllProducts(lastDate)
    productsList = formatResult(secondPaginatedPage)

    const secondLastDate = productsList[productsList.length - 1].date
    const thirdPaginatedPage = await productsRepository.getAllProducts(secondLastDate)
    expect(thirdPaginatedPage).toBeNull()
  })
})
