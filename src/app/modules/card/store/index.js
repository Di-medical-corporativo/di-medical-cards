import state from './state'
import initActions from './actions'
import * as mutations from './mutations'
import * as getters from './getters'

const initCardModule = (dependencies) => {
  const cardModule = {
    namespaced: true,
    actions: initActions(dependencies),
    getters,
    mutations,
    state
  }

  return cardModule
}

export default initCardModule
