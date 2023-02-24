import technical from '../../../../src/useCases/index'
import { products, product } from '../../mock-data/testProduts'

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
    getPaginatedTechnicalSheets: jest.fn(async (date) => products),
    getTechincalSheetsByBrand: jest.fn(async (brand) => products),
    getTechnicalSheetByCode: jest.fn(async (code) => product)
  }

  const dependencies = {
    technicalRepository: mockEmployeRepo
  }

  const { getTechnicalSheetsUseCase, getTechnicalSheetsByBrandUsecase, getTechnicalSheetByCodeUseCase } = technical

  describe('GetTechnicalSheetsUseCase', () => {
    test('should return all technicalsheets', async () => {
      const products = await getTechnicalSheetsUseCase(dependencies).execute({ startAfterDate: null })
      const formatedResult = formatResult(products)
      expect(formatedResult.length).toBe(9)
    })
  })

  describe('getTechnicalSheetsByBrandUsecase', () => {
    test('should return only technical sheets by specified brand (Salter Labs, only 5 in test store)', async () => {
      const technicalSheetsByBrand = await getTechnicalSheetsByBrandUsecase(dependencies).execute({ brand: 'Salter Labs' })
      expect(technicalSheetsByBrand).toBeDefined()
    })
  })
  describe('getTechnicalSheetsByCodeUsecase', () => {
    test('should return only technical sheets by specified code', async () => {
      const technicalSheetsByCode = await getTechnicalSheetByCodeUseCase(dependencies).execute({ code: 'Salter Labs' })
      expect(technicalSheetsByCode).toBeDefined()
    })
  })
})
