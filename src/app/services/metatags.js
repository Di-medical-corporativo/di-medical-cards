import { reactive } from '@vue/reactivity'

const store = {
  state: reactive({
    title: 'Las grandes marcas se distinguen por sus colores.',
    description: 'Lo más selecto de las mejores marcas para el mercado hospitalario',
    url: 'https://card.dimedicalcorporativo.mx/'
  }),
  update: (key, newVal) => {
    store.state[key] = newVal
  }
}

export default store
