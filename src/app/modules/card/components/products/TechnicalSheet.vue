<template>
  <div class="card-technicals__technicalSheet">
    <img
        class="card-technicals__technicalSheet__image"
        :src="image" alt="">
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String
    }
  }
}
</script>
