export const formatResult = (result = {}) => {
  const productsList = []
  for (const id of Object.keys(result)) {
    productsList.push({
      id,
      ...result[id]
    })
  }

  return productsList
}
