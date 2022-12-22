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
  if (!state.technicalSheets) {
    const technicalSheetFormated = formatResult(technicalSheets)
    const noRepeated = technicalSheetFormated.filter((data, index) => {
      return technicalSheetFormated.indexOf(data) === index
    })
    state.technicalSheets = noRepeated
  } else {
    for (const id of Object.keys(technicalSheets)) {
      const hasTechnicalSheet = state.technicalSheets.find(element => element.id === id)
      if (!hasTechnicalSheet) {
        state.technicalSheets.push({
          id,
          ...technicalSheets[id]
        })
      }
    }
  }
}
