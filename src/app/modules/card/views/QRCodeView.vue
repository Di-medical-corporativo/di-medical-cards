<template>
    <div class="card-qr">
        <div class="card-qr__image">
        </div>

        <button
            class="card-qr__download"
            @click="downloadImage"
            :style="{ backgroundColor: dotsColor }"
        >
            Descargar
        </button>

    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { surBase64, corpBase64 } from '../helpers/base64Logos'

export default {
  setup () {
    const { params } = useRoute()
    const { sucursal } = params
    const downloadImage = () => {
      const imageBase64 = document.getElementsByClassName('img-qr')[0]
      const linkUrl = document.createElement('a')
      linkUrl.href = imageBase64.src
      linkUrl.download = `${params.id}.jpg`
      linkUrl.click()
    }

    return {
      currentLink: computed(() => `https://card.dimedicalcorporativo.mx/${params.sucursal}/${params.id}`),
      dotsColor: computed(() => sucursal === 'sur' ? '#218d9b' : '#c28400'),
      cornersCOlor: computed(() => sucursal === 'sur' ? '#187876' : '#684700'),
      downloadImage,
      base64Image: computed(() => sucursal === 'sur' ? surBase64 : corpBase64)
    }
  }
}
</script>

<style>

</style>
