<template>
    <div class="card-qr">
        <div class="card-qr__image">
            <QRcode
            :width="500"
            :height="500"
            :value="currentLink"
            :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
            :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
            :image="base64Image"
            :dotsOptions="{
              type: 'dots',
              color: dotsColor,
              gradient: {
                type: 'linear',
                rotation: 0,
                colorStops: [
                  { offset: 0, color: dotsColor },
                  { offset: 1, color: dotsColor },
                ],
              },
            }"
            :backgroundOptions="{ color: 'transparent' }"
            :cornersSquareOptions="{ type: 'dot', color: cornersCOlor }"
            :cornersDotOptions="{ type: undefined, color: cornersCOlor }"
            imgclass="img-qr"
            id="qrImageBase64"
          />
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
import QRcode from 'qrcode-vue3'
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import { surBase64, corpBase64 } from '../helpers/base64Logos'

export default {
  components: {
    QRcode
  },
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
