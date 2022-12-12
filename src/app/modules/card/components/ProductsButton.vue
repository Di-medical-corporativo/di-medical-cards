<template>
  <button
    class="card-contact__products__button"
    :style="buttonBackground"
    @click="goToProducts()"
  >
    <i class="bi bi-cart-fill icon"></i>
    Produtos
  </button>
</template>

<script>
import { computed } from 'vue'
import { useRouter } from 'vue-router'

export default {
  props: {
    sucursal: {
      type: String,
      required: true
    }
  },

  setup (props) {
    const router = useRouter()
    return {
      buttonBackground: computed(() => {
        const backgroundSucursal =
          props.sucursal === 'sur' ? '#218d9b' : '#c28400'
        return { background: backgroundSucursal }
      }),
      goToProducts: () => router.push({ name: 'products-card' })
    }
  }
}
</script>
