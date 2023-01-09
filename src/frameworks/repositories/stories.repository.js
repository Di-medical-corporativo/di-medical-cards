import { get, limitToFirst, query, ref, startAfter, orderByChild } from 'firebase/database'
import { firebase } from '../database/firebase/index'

const ENTITY_NAME = 'stories'
const storiesRef = ref(firebase, ENTITY_NAME)
const PAGINATE_NUMBER = 5
export default {
  getPaginatedStories: async (startAfterDate = null) => {
    if (startAfterDate) {
      const paginatedQuery = query(storiesRef, limitToFirst(PAGINATE_NUMBER), startAfter(startAfterDate), orderByChild('date'))
      const querySnapshot = await (await get(paginatedQuery)).val()
      return querySnapshot
    }

    const firstPaginatedQuery = query(storiesRef, limitToFirst(PAGINATE_NUMBER), orderByChild('date'))
    const firstPaginatedQuerySnapshot = await (await get(firstPaginatedQuery)).val()
    return firstPaginatedQuerySnapshot
  }
}
