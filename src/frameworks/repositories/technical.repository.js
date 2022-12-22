import { get, limitToFirst, query, ref, startAfter, orderByChild } from 'firebase/database'
import { firebase } from '../database/firebase/index'

const ENTITY_NAME = 'technicalSheets'
const productsRef = ref(firebase, ENTITY_NAME)
export default {
  getPaginatedTechnicalSheets: async (startAfterDate = null) => {
    if (startAfterDate) {
      const paginatedQuery = query(productsRef, limitToFirst(5), startAfter(startAfterDate), orderByChild('date'))
      const querySnapshot = await (await get(paginatedQuery)).val()
      return querySnapshot
    }

    const firstPaginatedQuery = query(productsRef, limitToFirst(5), orderByChild('date'))
    const firstPaginatedQuerySnapshot = await (await get(firstPaginatedQuery)).val()
    return firstPaginatedQuerySnapshot
  }
}
