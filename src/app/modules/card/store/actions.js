import { formatResult } from '../helpers/formatProducts'

const initActions = (dependencies) => {
  const {
    useCases: {
      getEmployeeByIdUseCase,
      getProductsUsecase
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
      const formatedProducts = formatResult(products)
      const lastDate = formatedProducts[formatedProducts.length - 1].date
      commit('setLastDateToPaginate', lastDate)
      commit('setProducts', products)
      return formatedProducts
    }

  }
}

export default initActions
