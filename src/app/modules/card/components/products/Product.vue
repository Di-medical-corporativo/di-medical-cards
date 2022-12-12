<template>
  <div class="products__product">
    <div class="products__product--photo">
        <img
            :src="photoThumb[0]"
            alt="Product image"
            class="products__product--photo__image">
    </div>
    <div class="products__product--name">
        <h4>{{shortenTitle}}</h4>
    </div>
    <div class="products__product--brand">
        <h6>{{product.brand || ''}}</h6>
    </div>
    <div class="products__product--description">
        <p>{{shortenDesc}}</p>
    </div>
    <div class="products__product--cta">
        <button :style="backgroundButton">
            Más información
        </button>
        <p>
            <i :class="stockIcon.icon"></i>
            {{stockIcon.text}}
        </p>
    </div>
  </div>
</template>

<script>
import { computed, toRef } from 'vue'
export default {
  props: {
    product: {
      type: Object,
      default: () => {}
    },
    sucursal: {
      type: String,
      default: () => 'sur'
    }
  },

  setup (props) {
    const product = toRef(props, 'product')
    const sucursal = toRef(props, 'sucursal')
    return {
      shortenTitle: computed(() => {
        return product.value.title.length > 40
          ? product.value.title.substring(0, 20) + '...'
          : product.value.title
      }),
      shortenDesc: computed(() => {
        return product.value.description.length > 120
          ? product.value.description.substring(0, 50) + '...'
          : product.value.description
      }),
      backgroundButton: computed(() => {
        return sucursal.value === 'sur'
          ? { background: '#218d9b' }
          : { background: '#c28400' }
      }),
      stockIcon: computed(() => {
        return product.value.stock
          ? { icon: 'bi bi-check2 stock', text: 'En stock' }
          : { icon: 'bi bi-x out-stock', text: 'Agotado' }
      }),
      photoThumb: computed(
        () => product.value.photos.filter((e) => e.includes('jpg')) || []
      )
    }
  }
}
</script>
