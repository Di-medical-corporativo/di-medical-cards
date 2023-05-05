import { firestore } from '../database/firebase/index'
import { addDoc, collection, doc, getDocs, query, runTransaction, where } from 'firebase/firestore'

const ENTITY_NAME = 'geolocation'
const locationRef = collection(firestore, ENTITY_NAME)

export default {
  addLocation: async (lat, lon) => {
    try {
      const location = query(
        locationRef,
        where(
          'lat',
          '==',
          lat
        ),
        where(
          'lon',
          '==',
          lon
        )
      )

      const queryResultLocation = await getDocs(location)

      if (queryResultLocation.empty) {
        await addDoc(locationRef, {
          lat,
          lon,
          count: 1
        })
        return { ok: true, action: 'created' }
      }

      let locationId = null

      queryResultLocation.forEach(location => {
        locationId = location.id
      })

      const locationQueryRef = doc(firestore, ENTITY_NAME, locationId)
      await runTransaction(firestore, async (transaction) => {
        const location = await transaction.get(locationQueryRef)
        if (!location.exists()) {
          throw new Error('Location does not exists')
        }

        const updatedCount = Number(location.data().count) + 1
        transaction.update(locationQueryRef, { count: updatedCount })
      })

      return { ok: true, action: 'updated' }
    } catch (error) {
      throw new Error(error)
    }
  }
}
