import { get, limitToFirst, query, ref, startAfter, orderByChild, equalTo } from 'firebase/database'
import { firebase } from '../database/firebase/index'

const ENTITY_NAME = 'technicalSheets'
const productsRef = ref(firebase, ENTITY_NAME)
const PAGINATE_NUMBER = 5
export default {
  getPaginatedTechnicalSheets: async (startAfterDate = null) => {
    if (startAfterDate) {
      const paginatedQuery = query(productsRef, limitToFirst(PAGINATE_NUMBER), startAfter(startAfterDate), orderByChild('date'))
      const querySnapshot = await (await get(paginatedQuery)).val()
      return querySnapshot
    }

    const firstPaginatedQuery = query(productsRef, limitToFirst(PAGINATE_NUMBER), orderByChild('date'))
    const firstPaginatedQuerySnapshot = await (await get(firstPaginatedQuery)).val()
    return firstPaginatedQuerySnapshot
  },

  getTechincalSheetsByBrand: async (brand) => {
    const orderByChildKey = 'brand'
    const technicalSheetsByBrandQuery = query(productsRef, orderByChild(orderByChildKey), equalTo(brand))
    const technicalSheetsByBrand = await (await get(technicalSheetsByBrandQuery)).val()
    return technicalSheetsByBrand
  },

  getTechnicalSheetByCode: async (code) => {
    const orderByChildKey = 'code'
    const technicalSheetsByCodeQuery = query(productsRef, orderByChild(orderByChildKey), equalTo(code))
    const technicalSheetsByCode = await (await get(technicalSheetsByCodeQuery)).val()
    return technicalSheetsByCode
  }
}
