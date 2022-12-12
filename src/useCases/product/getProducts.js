export default dependencies => {
  const { productRepository } = dependencies

  const execute = ({ startAfterDate }) => {
    console.log(`Executing ${startAfterDate}`)
    return productRepository.getAllProducts(startAfterDate)
  }

  return {
    execute
  }
}
