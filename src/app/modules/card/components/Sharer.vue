<template>
  <div class="sharer">
    <button
        class="sharer__button"
        data-bs-toggle="modal" 
        data-bs-target="#exampleModal"
        :style="sucursalColor">
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
        ...
      </div>
    </div>
  </div>
</div>

  </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: {
        sucursal: {
            type: String
        }
    },

    setup(props) {

        return {
            sucursalColor: computed(() => {
                const color = props.sucursal === 'sur' ? '#218d9b' : '#c28400'
                return { 'background': color }
            })
        }
    }
}
</script>

<style>

</style>
