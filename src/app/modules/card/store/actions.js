import { formatResult } from '../helpers/formatProducts'

const initActions = (dependencies) => {
  const {
    useCases: {
      getTechnicalSheetsUseCase,
      getTechnicalSheetsByBrandUsecase,
      getTechnicalSheetByCodeUseCase,
      getProductsUsecase,
      getEmployeeByIdUseCase,
      getCataloguesUseCase,
      getCataloguesByBrandUseCase,
      getAllStoriesUseCase,
      getAllBrandsUseCase,
      updateVisitsCountUseCase
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
    },

    getTechnicalSheetByCode: async ({ commit }, code) => {
      commit('cleanTechnicalSheets')
      commit('setIsLoadingTechnicalSheets', true)

      const technicalSheetByBrand = await getTechnicalSheetByCodeUseCase(dependencies)
        .execute({ code })
      if (!technicalSheetByBrand) {
        commit('setTechnicalSheets', null)
        commit('setIsLoadingTechnicalSheets', false)
        return
      }

      const formattedTechnicalSheet = formatResult(technicalSheetByBrand)
      commit('setTechnicalSheets', formattedTechnicalSheet)
      commit('setIsLoadingTechnicalSheets', false)
    },

    getAllStories: async ({ commit }) => {
      const stories = await getAllStoriesUseCase(dependencies).execute()

      if (!stories) {
        commit('setStories', null)
        return
      }

      commit('setStories', stories)
    },

    getCatalogues: async ({ commit, getters }) => {
      commit('setIsloadingCatalogues', true)
      if (getters.getLastDateForCatalogues) {
        commit('setIsloadingCatalogues', false)
      }

      const catalogues = await getCataloguesUseCase(dependencies).execute({
        startAfterDate: getters.getLastDateForTechnicalSheets
      })

      if (!catalogues) {
        commit('setIsloadingCatalogues', false)
        return null
      }

      const formatedCatalogues = formatResult(catalogues)
      const lastDate = formatedCatalogues[formatedCatalogues.length - 1].date
      commit('setLastDateToPaginateCatalogues', lastDate)
      commit('setCatalogues', catalogues)
      commit('setIsloadingCatalogues', false)
      return catalogues
    },

    getCataloguesByBrand: async ({ commit }, brand) => {
      commit('cleanCatalogues')
      commit('setIsloadingCatalogues', true)
      commit('setBrandToSearch', brand)

      const catalogues = await getCataloguesByBrandUseCase(dependencies)
        .execute({ brand })
      if (!catalogues) {
        commit('setCatalogues', null)
        commit('setIsloadingCatalogues', false)
        return
      }

      const formattedCatalogues = formatResult(catalogues)
      commit('setCatalogues', formattedCatalogues)
      commit('setIsloadingCatalogues', false)
    },

    updateCountVisits: async (_, id) => {
      await updateVisitsCountUseCase(dependencies).execute({ statsId: id })
    }
  }
}

export default initActions
