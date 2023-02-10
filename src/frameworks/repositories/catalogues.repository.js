import { get, limitToFirst, query, ref, startAfter, orderByChild, equalTo } from 'firebase/database'
import { firebase } from '../database/firebase/index'

const ENTITY_NAME = 'catalogues'
const productsRef = ref(firebase, ENTITY_NAME)
const PAGINATE_NUMBER = 5
export default {
  getPaginatedCatalogues: async (startAfterDate = null) => {
    const orderByChildKey = 'date'
    if (startAfterDate) {
      const paginatedQuery = query(productsRef, limitToFirst(PAGINATE_NUMBER), startAfter(startAfterDate), orderByChild(orderByChildKey))
      const querySnapshot = await (await get(paginatedQuery)).val()
      return querySnapshot
    }

    const firstPaginatedQuery = query(productsRef, limitToFirst(PAGINATE_NUMBER), orderByChild(orderByChildKey))
    const firstPaginatedQuerySnapshot = await (await get(firstPaginatedQuery)).val()
    return firstPaginatedQuerySnapshot
  },

  getCataloguesByBrand: async (brand) => {
    const orderByChildKey = 'brand'
    const technicalSheetsByBrandQuery = query(productsRef, orderByChild(orderByChildKey), equalTo(brand))
    const technicalSheetsByBrand = await (await get(technicalSheetsByBrandQuery)).val()
    return technicalSheetsByBrand
  }
}
