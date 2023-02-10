import useCases from '../../../../src/useCases/index'
import { products } from '../../mock-data/testProduts'

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

describe('Technicals sheets use cases', () => {
  const mockCataloguesRepo = {
    getPaginatedCatalogues: jest.fn(async (date) => products),
    getCataloguesByBrand: jest.fn(async (brand) => products)
  }

  const dependencies = {
    cataloguesRepository: mockCataloguesRepo
  }

  const { getCataloguesUseCase, getCataloguesByBrandUseCase } = useCases

  describe('getCataloguesUseCase', () => {
    test('should return all catalogues', async () => {
      const products = await getCataloguesUseCase(dependencies).execute({ startAfterDate: null })
      const formatedResult = formatResult(products)
      expect(formatedResult.length).toBe(9)
    })
  })

  describe('getCataloguesByBrandUseCase', () => {
    test('should return catalogues by brand', async () => {
      const technicalSheetsByBrand = await getCataloguesByBrandUseCase(dependencies).execute({ brand: 'Salter Labs' })
      expect(technicalSheetsByBrand).toBeDefined()
    })
  })
})
