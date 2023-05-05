import useCases from '../../../../src/useCases/index'

describe('geolocation use cases', () => {
  const mockGeolocationRepo = {
    addLocation: jest.fn(async (lat, lon) => ({ ok: true }))
  }

  const dependencies = {
    geolocationRepository: mockGeolocationRepo
  }

  const { updateLocationCountUseCase } = useCases

  describe('update or create location in db', () => {
    test('should create new location', async () => {
      const vististCount = await updateLocationCountUseCase(dependencies).execute({ lat: 123, lon: 21 })
      expect(vististCount).toEqual({ ok: true })
    })
  })
})
