export default dependencies => {
  const { employeeRepository } = dependencies

  const execute = ({ id }) => {
    return employeeRepository.getById(id)
  }

  return {
    execute
  }
}
