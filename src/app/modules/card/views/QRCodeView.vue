<template>
    <div class="card-qr">
        <div class="card-qr__image">
            <QRcode
            :width="250"
            :height="250"
            :value="currentLink"
            :qrOptions="{ typeNumber: 0, mode: 'Byte', errorCorrectionLevel: 'H' }"
            :imageOptions="{ hideBackgroundDots: true, imageSize: 0.4, margin: 0 }"
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
            :downloadOptions="{ name: 'vqr', extension: 'png' }"
          />
        </div>
    </div>
</template>

<script>
import QRcode from 'qrcode-vue3'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
  components: {
    QRcode
  },
  setup () {
    const { params } = useRoute()
    const { sucursal } = params
    return {
      currentLink: computed(() => `https://www.dimedicalcorporativo.mx/${params.sucursal}/${params.id}`),
      dotsColor: computed(() => sucursal === 'sur' ? '#218d9b' : '#c28400'),
      cornersCOlor: computed(() => sucursal === 'sur' ? '#187876' : '#684700')
    }
  }
}
</script>

<style>

</style>
