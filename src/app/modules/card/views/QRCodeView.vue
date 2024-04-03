<template>
    <div class="card-qr">
        <div class="card-qr__image">
          <QrCode :value="currentLink" :foreground="backgroundColor" :size="350"/>
        </div>
    </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import QrCode from 'qrcode.vue'

export default {
  setup () {
    const { params } = useRoute()
    const { sucursal } = params
    return {
      currentLink: computed(() => `https://card.dimedicalcorporativo.mx/${params.sucursal}/${params.id}`),
      backgroundColor: computed(() => sucursal === 'sur' ? '#218d9b' : '#c28400')
    }
  },
  components: {
    QrCode
  }
}
</script>

<style>

</style>
