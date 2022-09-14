<template>
  <div class="products__product">
    <div class="products__product--photo">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F7c077cc9-2fce-48b0-acff-5f6a99c310a8-product.jpg?alt=media&token=5068c62d-a816-4efe-bb48-843d77c4c2e2"
            alt="Product image"
            class="products__product--photo__image">
    </div>
    <div class="products__product--name">
        <h4>{{shortenName}}</h4>
    </div>
    <div class="products__product--description">
        <p>lorem</p>
    </div>
    <div class="products__product--cta"></div>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    }
  },

  setup (props) {
    return {
      shortenName: computed(() => {
        const product = props.product
        return product.title.length > 50
          ? product.title.substring(0, 50) + '...'
          : product.title
      })
    }
  }
}
</script>

<style>

</style>
