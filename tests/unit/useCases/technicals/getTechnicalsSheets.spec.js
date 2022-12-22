import technical from '../../../../src/useCases/index'
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
  const mockEmployeRepo = {
    getPaginatedTechnicalSheets: jest.fn(async (date) => products)
  }

  const dependencies = {
    technicalRepository: mockEmployeRepo
  }

  const { getTechnicalSheetsUseCase } = technical

  describe('GetTechnicalSheets', () => {
    test('should return all technicalsheets', async () => {
      const products = await getTechnicalSheetsUseCase(dependencies).execute({ startAfterDate: null })
      const formatedResult = formatResult(products)
      expect(formatedResult.length).toBe(9)
    })
  })
})
