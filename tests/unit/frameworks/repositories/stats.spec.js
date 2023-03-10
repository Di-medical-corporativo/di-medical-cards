import statsRepository from '../../../../src/frameworks/repositories/stats.repository'

describe('Stats repository', () => {
  test('should update the visits count', async () => {
    const id = '0R6F7uwODmKKbb52gPG7'
    const increment = await statsRepository.incrementVisits(id)
    expect(increment).toEqual({ ok: true })
  })

  test.todo('should send error when the view does not exists')
})
