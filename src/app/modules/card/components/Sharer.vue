<template>
  <div class="sharer">
    <button
        class="sharer__button"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        :style="sucursalColor('background')">
        <i class="bi bi-share-fill icon"></i>
        Compartir
    </button>
    <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">Compartir vcard</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <div class="sharer__options" :style="sucursalColor('color')">

                        <a :href="`https://www.facebook.com/sharer/sharer.php?u=${url}`" target="_blank"><i class="bi bi-facebook icon"></i></a>
                        <a :href="`https://api.whatsapp.com/send?text=${url}`" target="_blank"><i class="bi bi-whatsapp icon"></i></a>
                        <i class="bi bi-link icon" @click="copyToClipBoard"></i>
                        <div :class="bookMarkIcon" @click="saveToFavorites"></div>
                    </div>
                </div>
            </div>
        </div>
    </div>

  </div>
</template>

<script>
import { computed } from 'vue'
import { useRoute } from 'vue-router'
import bookMark from '../helpers/bookMarkCard'

export default {
  props: {
    sucursal: {
      type: String
    }
  },

  setup (props) {
    const route = useRoute()
    const { sucursal, name } = route.params
    return {
      sucursalColor: computed(() => {
        const color = props.sucursal === 'sur' ? '#218d9b' : '#c28400'
        return (typeStyle) => {
          return typeStyle === 'color'
            ? { color: color }
            : { background: color }
        }
      }),
      bookMarkIcon: computed(() => {
        if (!localStorage.getItem('bookmark')) {
          return 'bi bi-bookmark icon'
        }
        return 'bi bi-bookmark-fill icon'
      }),
      saveToFavorites: () => bookMark(),
      url: `https://card.dimedicalcorporativo.mx/${sucursal}/${name}`,
      copyToClipBoard: () => navigator.clipboard.writeText(`https://card.dimedicalcorporativo.mx/${sucursal}/${name}`)
    }
  }
}
</script>
