<template>
  <div class="card-technicals__technicalSheet">
    <img
        class="card-technicals__technicalSheet__image"
        :src="image"
        @click="$emit('openModal', image)"
    >
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    }
  },
  emits: ['openModal']
}
</script>
