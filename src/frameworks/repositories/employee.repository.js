import { firestore } from '../database/firebase/index'
import { collection, getDocs } from 'firebase/firestore/lite'

export default {
  getByName: async ({ firstName, lastName }) => {
    const cardsResponse = await getDocs(collection(firestore, 'employee'))
    // const card = cardsResponse.forEach(doc => {
    //     if(doc.data().name.t )
    // })
  }
}
