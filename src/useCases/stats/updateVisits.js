export default dependencies => {
  const { statsRepository } = dependencies

  const execute = ({ statsId }) => {
    return statsRepository.incrementVisits(statsId)
  }

  return {
    execute
  }
}
