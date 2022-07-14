<template>
  <div 
  class="card-contact__sucursal__provider"
  :style="backgroundImage"
  >
    <div class="card-contact__logo">
        <slot name="logo" :sucursal="$route.params.sucursal"></slot>
    </div>
    <div class="card-contact__info">
        <slot name="employee" :sucursal="$route.params.sucursal"></slot>
    </div>
    <div class="card-contact__links">
        <div class="card-contact__links--left">
            <slot name="hexagons-left" :sucursal="$route.params.sucursal"></slot>
        </div>
        <div class="card-contact__links--right">
            <slot name="hexagons-right" :sucursal="$route.params.sucursal"></slot>
        </div>
    </div>
    <div class="card-contact__copy">
        <slot name="copy"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

export default {
    setup() {
        const route = useRoute()
        const { sucursal  } = route.params
        const backgroundList = {
            'sur': 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/FondoSur.webp?alt=media&token=eb8461a2-b4e0-4578-ad86-a4f6d3f008f0',
            'corporativo': 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/FondoCorp.webp?alt=media&token=acdc5457-d064-490b-bf1a-2f6787b8c0a8'
        }

        return { 
            backgroundImage: computed(() => {
                return `background-image: url(${backgroundList[sucursal]})`
            })
        }
    }
}
</script>