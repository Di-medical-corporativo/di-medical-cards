export default dependencies => {
  const { brandRepository } = dependencies

  const execute = () => {
    return brandRepository.getAllBrands()
  }

  return {
    execute
  }
}
