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
