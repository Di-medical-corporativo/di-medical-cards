import { firestore } from '../database/firebase/index'
import { doc, runTransaction } from 'firebase/firestore'

const ENTITY_NAME = 'visitas'

export default {
  incrementVisits: async (viewsId) => {
    try {
      const vCardStatsRef = doc(firestore, ENTITY_NAME, viewsId)
      await runTransaction(firestore, async (transaction) => {
        const vCardStats = await transaction.get(vCardStatsRef)
        console.log(vCardStats.exists())
        if (!vCardStats.exists()) {
          throw new Error('The card does not exists')
        }

        const newVisistStats = Number(vCardStats.data().visits) + 1
        transaction.update(vCardStatsRef, { visits: newVisistStats })
      })

      return { ok: true }
    } catch (error) {
      throw new Error(error)
    }
  }
}
