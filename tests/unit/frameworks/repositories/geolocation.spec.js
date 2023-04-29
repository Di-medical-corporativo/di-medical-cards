import geolocationRepository from '../../../../src/frameworks/repositories/geolocation.repository'

function getRandomInt (max) {
  return Math.floor(Math.random() * max)
}

describe('geolocation', () => {
  test('should save new geolocation to database', async () => {
    // Arrange
    const lat = getRandomInt(128)
    const lon = getRandomInt(189)
    const expected = { ok: true, action: 'created' }

    const sut = geolocationRepository

    // act
    const actual = await sut.addLocation(
      lat,
      lon
    )

    // assertion
    expect(actual).toEqual(expected)
  })

  test('should update count of visits from location if already exists', async () => {
    const lat = 19.18
    const lon = -20.81
    const expected = { ok: true, action: 'updated' }

    const sut = geolocationRepository

    // act
    const actual = await sut.addLocation(
      lat,
      lon
    )

    // assertion
    expect(actual).toEqual(expected)
  })
})
