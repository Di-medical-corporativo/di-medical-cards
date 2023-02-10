export default dependencies => {
  const { cataloguesRepository } = dependencies

  const execute = ({ startAfterDate }) => {
    return cataloguesRepository.getPaginatedCatalogues(startAfterDate)
  }

  return {
    execute
  }
}
