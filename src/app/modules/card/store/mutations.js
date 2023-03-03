import { formatResult } from '../helpers/formatProducts'

export const setEmployee = (state, employee) => {
  state.employee = employee
}

export const setLoading = (state, loadingState) => {
  console.log('Loading...')
  state.isLoading = loadingState
}

export const setProducts = (state, products) => {
  if (!state.products) {
    state.products = formatResult(products)
  } else {
    for (const id of Object.keys(products)) {
      state.products.push({
        id,
        ...products[id]
      })
    }
  }
}

export const setLastDateToPaginate = (state, date) => {
  state.lastDate = date
}

export const setLastDateToPaginateTechnicalSheets = (state, date) => {
  state.lastDateTechnicalSheets = date
}

export const setTechnicalSheets = (state, technicalSheets) => {
  if (!technicalSheets) {
    state.technicalSheets = []
    return
  }

  if (!state.technicalSheets) {
    const technicalSheetFormated = formatResult(technicalSheets)
    state.technicalSheets = technicalSheetFormated
    return
  }

  for (const id of Object.keys(technicalSheets)) {
    state.technicalSheets.push({
      id,
      ...technicalSheets[id]
    })
  }
}

export const setBrands = (state, brands) => {
  state.brands = brands
}

export const setBrandToSearch = (state, brand) => {
  state.brandToSearch = brand
}

export const cleanTechnicalSheets = (state) => {
  state.technicalSheets = null
}

export const setIsLoadingTechnicalSheets = (state, loading) => {
  state.isLoadingTechnicalSheets = loading
}

export const setStories = (state, stories) => {
  if (!stories) {
    state.stories = []
    return
  }

  state.stories = formatResult(stories)
}

export const setIsloadingCatalogues = (state, loading) => {
  state.isLoadingCatalogues = loading
}

export const setLastDateToPaginateCatalogues = (state, date) => {
  state.lastDateCatalogues = date
}

export const setCatalogues = (state, catalogues) => {
  if (!catalogues) {
    state.catalogues = []
    return
  }

  if (!state.catalogues) {
    const cataloguesFormatted = formatResult(catalogues)
    state.catalogues = cataloguesFormatted
    return
  }

  for (const id of Object.keys(catalogues)) {
    state.catalogues.push({
      id,
      ...catalogues[id]
    })
  }
}

export const cleanCatalogues = (state) => {
  state.catalogues = []
}
