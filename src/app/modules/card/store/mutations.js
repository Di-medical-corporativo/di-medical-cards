import { formatResult } from '../helpers/formatProducts'

export const setEmployee = (state, employee) => {
  state.employee = employee
}

export const setLoading = (state, loadingState) => {
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
