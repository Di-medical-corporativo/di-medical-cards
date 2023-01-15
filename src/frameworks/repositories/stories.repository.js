import { get, orderByChild, query, ref } from 'firebase/database'
import { firebase } from '../database/firebase/index'

const ENTITY_NAME = 'stories'
const storiesRef = ref(firebase, ENTITY_NAME)
export default {
  getAllStories: async () => {
    const storiesResponse = query(storiesRef, orderByChild('date'))
    const querySnapshot = await (await get(storiesResponse)).val()
    return querySnapshot
  }
}
