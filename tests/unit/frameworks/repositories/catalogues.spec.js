import cataloguesRepository from '../../../../src/frameworks/repositories/catalogues.repository'

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

describe('Catalogues repository, test firebase has 6 catalogues in realtime database', () => {
  test('should return first 5 catalogues', async () => {
    const result = await cataloguesRepository.getPaginatedCatalogues()
    const productsList = formatResult(result)

    expect(productsList.length).toBe(5)
  })

  test('should start after last element when a date is provided and asks to paginate', async () => {
    const result = await cataloguesRepository.getPaginatedCatalogues()
    let productsList = formatResult(result)
    productsList.forEach(p => console.log(new Date(p.date)))
    console.log(productsList)
    const lastDate = productsList[productsList.length - 1].date
    const secondPaginatedPage = await cataloguesRepository.getPaginatedCatalogues(lastDate)
    productsList = formatResult(secondPaginatedPage)
    console.log(productsList)
  })

  //   test('should return null when there are no more products to paginate', async () => {
  //     const result = await cataloguesRepository.getPaginatedTechnicalSheets()
  //     let productsList = formatResult(result)

  //     const lastDate = productsList[productsList.length - 1].date
  //     const secondPaginatedPage = await cataloguesRepository.getPaginatedTechnicalSheets(lastDate)
  //     productsList = formatResult(secondPaginatedPage)
  //     const secondLastDate = productsList[productsList.length - 1].date
  //     const thirdPaginatedPage = await cataloguesRepository.getPaginatedTechnicalSheets(secondLastDate)
  //     productsList = formatResult(thirdPaginatedPage)
  //     const thirdLastdate = productsList[productsList.length - 1].date
  //     const fourthPaginatedPage = await cataloguesRepository.getPaginatedTechnicalSheets(thirdLastdate)
  //     expect(fourthPaginatedPage).toBeNull()
  //   })

  test('should return only catalogues by brand (Salter Labs, 2)', async () => {
    const brand = 'Salter Labs'
    const catalogues = await cataloguesRepository.getCataloguesByBrand(brand)
    const cataloguesFormated = formatResult(catalogues)
    expect(cataloguesFormated.length).toBe(2)
  })
})
