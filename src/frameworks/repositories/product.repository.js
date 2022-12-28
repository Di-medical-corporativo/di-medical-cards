import { get, limitToFirst, query, ref, startAfter, orderByChild } from 'firebase/database'
import { firebase } from '../../frameworks/database/firebase/index'

const ENTITY_NAME = 'products'
const productsRef = ref(firebase, ENTITY_NAME)
const PAGINATE_NUMBER = 5
export default {
  getAllProducts: async (startAfterDate = null) => {
    if (startAfterDate) {
      const paginatedQuery = query(productsRef, limitToFirst(PAGINATE_NUMBER), orderByChild('date'), startAfter(startAfterDate))
      const querySnapshot = await (await get(paginatedQuery)).val()
      return querySnapshot
    }

    const firstPaginatedQuery = query(productsRef, limitToFirst(PAGINATE_NUMBER), orderByChild('date'))
    const firstPaginatedQuerySnapshot = await (await get(firstPaginatedQuery)).val()
    return firstPaginatedQuerySnapshot
  }
}
