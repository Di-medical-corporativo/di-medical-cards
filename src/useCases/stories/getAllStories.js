export default dependencies => {
  const { storiesRepository } = dependencies

  const execute = () => {
    return storiesRepository.getAllStories()
  }

  return {
    execute
  }
}
