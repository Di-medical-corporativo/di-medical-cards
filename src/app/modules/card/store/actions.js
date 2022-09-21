const initActions = (dependencies) => {
  const {
    useCases: {
      getEmployeeByIdUseCase
    }
  } = dependencies
  return {
    getEmployeeById: async ({ commit }, id) => {
      const employee = await getEmployeeByIdUseCase(dependencies).execute({ id })
      console.log(employee)
    }
  }
}

export default initActions
