import storiesRepository from '../../../../src/frameworks/repositories/stories.repository'

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

describe('Stories repository', () => {
  test('should get all stories', async () => {
    const notFormatedStories = await storiesRepository.getAllStories()
    console.log(notFormatedStories)
    const storiesFormated = formatResult(notFormatedStories)
    expect(storiesFormated).toBeDefined()
  })
})
