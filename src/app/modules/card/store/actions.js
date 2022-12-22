import { formatResult } from '../helpers/formatProducts'

const initActions = (dependencies) => {
  const {
    useCases: {
      getEmployeeByIdUseCase,
      getProductsUsecase,
      getTechnicalSheetsUseCase
    }
  } = dependencies
  return {
    getEmployeeById: async ({ commit }, id) => {
      commit('setLoading', true)
      const employee = await getEmployeeByIdUseCase(dependencies).execute({ id })
      commit('setLoading', false)
      commit('setEmployee', employee)
      return employee
    },

    getAllProducts: async ({ commit, getters }) => {
      const products = await getProductsUsecase(dependencies).execute({ startAfterDate: getters.getLastDate })

      if (!products) {
        return null
      }

      const formatedProducts = formatResult(products)
      const lastDate = formatedProducts[formatedProducts.length - 1].date
      commit('setLastDateToPaginate', lastDate)
      commit('setProducts', products)
      return formatedProducts
    },

    getTechnicalSheets: async ({ commit, getters }) => {
      const technicalSheets = await getTechnicalSheetsUseCase(dependencies).execute({
        startAfterDate: getters.getLastDateForTechnicalSheets
      })

      if (!technicalSheets) {
        return null
      }

      const formatedTechnicalSheets = formatResult(technicalSheets)
      const lastDate = formatedTechnicalSheets[formatedTechnicalSheets.length - 1].date
      commit('setLastDateToPaginateTechnicalSheets', lastDate)
      commit('setTechnicalSheets', technicalSheets)
      return technicalSheets
    }

  }
}

export default initActions
