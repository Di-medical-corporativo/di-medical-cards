import { firestore } from '../database/firebase/index'
import { doc, runTransaction } from 'firebase/firestore'

const ENTITY_NAME = 'visitas'

export default {
  incrementVisits: async (viewsId, statName) => {
    try {
      const vCardStatsRef = doc(firestore, ENTITY_NAME, viewsId)
      await runTransaction(firestore, async (transaction) => {
        const vCardStats = await transaction.get(vCardStatsRef)
        if (!vCardStats.exists()) {
          throw new Error('The card does not exists')
        }

        const newVisistStats = Number(vCardStats.data()[statName]) + 1
        transaction.update(vCardStatsRef, { [statName]: newVisistStats })
      })

      return { ok: true }
    } catch (error) {
      throw new Error(error)
    }
  }
}
