import { stories } from '../../mock-data/testStories'
import useCases from '../../../../src/useCases/index'

const formatResult = (result) => {
  const productsList = []
  for (const id of Object.keys(result)) {
    productsList.push({
      id,
      ...result[id]
    })
  }
  return productsList
}

describe('stories use cases', () => {
  const mockStoriesRepo = {
    getAllStories: jest.fn(async () => stories)
  }

  const dependencies = {
    storiesRepository: mockStoriesRepo
  }

  const { getAllStoriesUseCase } = useCases

  describe('getAllStoriesUseCase', () => {
    test('should get all stories', async () => {
      const storiesNotFormated = await getAllStoriesUseCase(dependencies).execute()
      const formatedStories = formatResult(storiesNotFormated)
      expect(formatedStories).toBeDefined()
    })
  })
})
