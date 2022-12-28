export default dependencies => {
  const { technicalRepository } = dependencies

  const execute = ({ brand }) => {
    return technicalRepository.getTechincalSheetsByBrand(brand)
  }

  return {
    execute
  }
}
