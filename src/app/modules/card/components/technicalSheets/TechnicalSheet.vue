<template>
  <div class="card-technicals__technicalSheet">
    <v-lazy-image
        class="card-technicals__technicalSheet__image"
        :src="image"
        @click="$emit('open-modal', image)"
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
  emits: ['open-modal'],
  components: {
    VLazyImage
  }
}
</script>
