import { computed } from 'vue'

const useDimedical = (sucursal) => {
  const dimedicalBackgroundforComponent = computed(() => {
    const backgroundSucursal =
        sucursal === 'sur' ? '#218d9b' : '#c28400'
    return { background: backgroundSucursal }
  })

  return {
    dimedicalBackgroundforComponent
  }
}

export default useDimedical
