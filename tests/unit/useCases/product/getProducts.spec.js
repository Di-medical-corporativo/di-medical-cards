import product from '../../../../src/useCases/index'
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

describe('Product use cases', () => {
  const mockEmployeRepo = {
    getAllProducts: jest.fn(async (date) => products)
  }

  const dependencies = {
    productRepository: mockEmployeRepo
  }

  const { getProductsUsecase } = product

  describe('Get all products', () => {
    test('should return all products', async () => {
      const products = await getProductsUsecase(dependencies).execute({ startAfterDate: null })
      const formatedResult = formatResult(products)
      expect(formatedResult).toBeDefined()
    })
  })
})
