const initActions = (dependencies) => {
  const {
    useCases: {
      getEmployeeByIdUseCase
    }
  } = dependencies
  return {
    getEmployeeById: async ({ commit }, id) => {
      commit('setLoading', true)
      const employee = await getEmployeeByIdUseCase(dependencies).execute({ id })
      commit('setLoading', false)
      commit('setEmployee', employee)
      return employee
    }
  }
}

export default initActions
