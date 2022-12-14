import { formatResult } from '../helpers/formatProducts'

const initActions = (dependencies) => {
  const {
    useCases: {
      getEmployeeByIdUseCase,
      getProductsUsecase,
      getTechnicalSheetsUseCase,
      getAllBrandsUseCase,
      getTechnicalSheetsByBrandUsecase
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
      commit('setIsLoadingTechnicalSheets', true)
      if (getters.getLastDateForTechnicalSheets) {
        commit('setIsLoadingTechnicalSheets', false)
      }

      const technicalSheets = await getTechnicalSheetsUseCase(dependencies).execute({
        startAfterDate: getters.getLastDateForTechnicalSheets
      })

      if (!technicalSheets) {
        commit('setIsLoadingTechnicalSheets', false)
        return null
      }

      const formatedTechnicalSheets = formatResult(technicalSheets)
      const lastDate = formatedTechnicalSheets[formatedTechnicalSheets.length - 1].date
      commit('setLastDateToPaginateTechnicalSheets', lastDate)
      commit('setTechnicalSheets', technicalSheets)
      commit('setIsLoadingTechnicalSheets', false)
      return technicalSheets
    },

    getAllBrands: async ({ commit }) => {
      const brands = await getAllBrandsUseCase(dependencies).execute()
      const formattedBrands = formatResult(brands)
      commit('setBrands', formattedBrands)
    },

    getTechnicalSheetsByBrand: async ({ commit }, brand) => {
      commit('cleanTechnicalSheets')
      commit('setIsLoadingTechnicalSheets', true)
      commit('setBrandToSearch', brand)

      const technicalSheets = await getTechnicalSheetsByBrandUsecase(dependencies)
        .execute({ brand })
      if (!technicalSheets) {
        commit('setTechnicalSheets', null)
        commit('setIsLoadingTechnicalSheets', false)
        return
      }

      const formattedTechnicalSheets = formatResult(technicalSheets)
      commit('setTechnicalSheets', formattedTechnicalSheets)
      commit('setIsLoadingTechnicalSheets', false)
    }

  }
}

export default initActions
