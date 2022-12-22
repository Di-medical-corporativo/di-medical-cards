export default dependencies => {
  const { technicalRepository } = dependencies

  const execute = ({ startAfterDate }) => {
    return technicalRepository.getPaginatedTechnicalSheets(startAfterDate)
  }

  return {
    execute
  }
}
