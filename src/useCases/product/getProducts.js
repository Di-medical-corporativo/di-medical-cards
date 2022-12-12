export default dependencies => {
  const { productRepository } = dependencies

  const execute = ({ startAfterDate }) => {
    return productRepository.getAllProducts(startAfterDate)
  }

  return {
    execute
  }
}
