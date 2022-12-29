<template>
  <div class="card-technicals__technicalSheet">
    <v-lazy-image
        class="card-technicals__technicalSheet__image"
        :src="image"
        @click="$emit('openModal', image)"
    />
  </div>
</template>

<script>
import VLazyImage from 'v-lazy-image'
export default {
  props: {
    image: {
      type: String
    }
  },
  emits: ['openModal'],
  components: {
    VLazyImage
  }
}
</script>
