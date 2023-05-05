export default dependencies => {
  const { geolocationRepository } = dependencies
  const execute = ({ lat, lon }) => {
    return geolocationRepository.addLocation(lat, lon)
  }

  return {
    execute
  }
}
