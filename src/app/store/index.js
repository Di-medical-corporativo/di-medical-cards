import { createStore } from 'vuex'

import initCardModule from '../modules/card/store'
import dependencies from '../../config/dependencies'

export default createStore({
  modules: {
    card: initCardModule(dependencies)
  }
})
