import stats from '../../../../src/useCases/index'

describe('Product use cases', () => {
  const mockStatsRepo = {
    incrementVisits: jest.fn(async (id) => ({ ok: true }))
  }

  const dependencies = {
    statsRepository: mockStatsRepo
  }

  const { updateVisitsCountUseCase } = stats

  describe('Get all products', () => {
    test('should return all products', async () => {
      const vististCount = await updateVisitsCountUseCase(dependencies).execute({ id: '1' })
      expect(vististCount).toEqual({ ok: true })
    })
  })
})
