import technicalRepository from '../../../../src/frameworks/repositories/technical.repository'

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

describe('Technical sheets repository, test firebase has 10 technical sheets in realtime database', () => {
  test('should return first 5 technical sheets', async () => {
    const result = await technicalRepository.getPaginatedTechnicalSheets()
    const productsList = formatResult(result)

    expect(productsList.length).toBe(5)
  })

  test('should start after last element when a date is provided and asks to paginate', async () => {
    const result = await technicalRepository.getPaginatedTechnicalSheets()
    let productsList = formatResult(result)
    productsList.forEach(p => console.log(new Date(p.date)))

    const lastDate = productsList[productsList.length - 1].date
    const secondPaginatedPage = await technicalRepository.getPaginatedTechnicalSheets(lastDate)
    productsList = formatResult(secondPaginatedPage)
  })

  //   test('should return null when there are no more products to paginate', async () => {
  //     const result = await technicalRepository.getPaginatedTechnicalSheets()
  //     let productsList = formatResult(result)

  //     const lastDate = productsList[productsList.length - 1].date
  //     const secondPaginatedPage = await technicalRepository.getPaginatedTechnicalSheets(lastDate)
  //     productsList = formatResult(secondPaginatedPage)
  //     const secondLastDate = productsList[productsList.length - 1].date
  //     const thirdPaginatedPage = await technicalRepository.getPaginatedTechnicalSheets(secondLastDate)
  //     productsList = formatResult(thirdPaginatedPage)
  //     const thirdLastdate = productsList[productsList.length - 1].date
  //     const fourthPaginatedPage = await technicalRepository.getPaginatedTechnicalSheets(thirdLastdate)
  //     expect(fourthPaginatedPage).toBeNull()
  //   })

  test('should return only technical sheets by brand (Salter Labs, 5)', async () => {
    const brand = 'Salter Labs'
    const technicalSheetsByBrand = await technicalRepository.getTechincalSheetsByBrand(brand)
    const technicalSheetsByBrandFormated = formatResult(technicalSheetsByBrand)
    expect(technicalSheetsByBrandFormated.length).toBe(5)
  })
})
