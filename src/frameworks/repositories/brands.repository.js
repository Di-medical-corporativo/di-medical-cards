import { get, query, ref, orderByChild } from 'firebase/database'
import { firebase } from '../../frameworks/database/firebase/index'

const ENTITY_NAME = 'brands'
const productsRef = ref(firebase, ENTITY_NAME)
export default {
  getAllBrands: async () => {
    const brandsQuery = query(productsRef, orderByChild('date'))
    const brandsQuerySnapshot = await (await get(brandsQuery)).val()
    return brandsQuerySnapshot
  }
}
