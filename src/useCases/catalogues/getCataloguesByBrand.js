export default dependencies => {
  const { cataloguesRepository } = dependencies

  const execute = ({ brand }) => {
    return cataloguesRepository.getCataloguesByBrand(brand)
  }

  return {
    execute
  }
}
