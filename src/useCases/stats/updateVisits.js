export default dependencies => {
  const { statsRepository } = dependencies

  const execute = ({ statsId, fieldToUpdate }) => {
    return statsRepository.incrementVisits(statsId, fieldToUpdate)
  }

  return {
    execute
  }
}
