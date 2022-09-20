import { firestore } from '../database/firebase/index'
import { doc, getDoc } from 'firebase/firestore'
import { employeeConverter } from '../../entities/Employee'

const ENTITY_NAME = 'employee'

export default {
  getById: async (id) => {
    const ref = doc(firestore, ENTITY_NAME, id).withConverter(employeeConverter)
    const docSnap = await getDoc(ref)
    return docSnap.data()
  }
}
