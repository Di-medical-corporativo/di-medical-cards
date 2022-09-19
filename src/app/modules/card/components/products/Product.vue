<template>
  <div class="products__product">
    <div class="products__product--photo">
        <img
            src="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/products%2F38c2b377-7422-49e9-a5f8-42d493bde14e%2F7c077cc9-2fce-48b0-acff-5f6a99c310a8-product.jpg?alt=media&token=5068c62d-a816-4efe-bb48-843d77c4c2e2"
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
            Más informacion
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
      })
    }
  }
}
</script>
