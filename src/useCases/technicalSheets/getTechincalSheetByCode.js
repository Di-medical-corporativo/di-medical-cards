export default dependencies => {
  const { technicalRepository } = dependencies

  const execute = ({ code }) => {
    return technicalRepository.getTechnicalSheetByCode(code)
  }

  return {
    execute
  }
}
