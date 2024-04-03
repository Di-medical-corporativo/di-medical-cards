<template>
  <div
    class="stories__modal"
    @click.self="emitCloseModal"
  >
    <div class="stories__modal__close" @click="emitCloseModal">
      <i class="bi bi-x icon"></i>
    </div>
    <div class="modal__image" v-if="!isLoading">
      <div
        class="modal__image__next left"
        @click="counterImage--"
        v-if="counterImage > 0"
      >
      <i class="bi bi-caret-left-fill"></i>
      </div>
      <v-lazy-image :src="stories[counterImage].url" class="story__image" />
      <div
        class="modal__image__next right"
        @click="counterImage++"
        v-if="counterImage < stories.length - 1"
      >
      <i class="bi bi-caret-right-fill"></i>
      </div>
    </div>
    <div class="stories__modal__loading" v-else>
        <p>Cargando...</p>
    </div>
  </div>
</template>

<script>
import { computed, ref, toRefs } from 'vue'
import VLazyImage from 'v-lazy-image'
import { useRouter } from 'vue-router'
import { useStore } from 'vuex'
export default {
  props: {
    idx: {
      type: Number,
      default: () => 0
    },
    open: {
      type: Boolean
    }
  },

  setup (props, { emit }) {
    const router = useRouter()
    const store = useStore()
    const closeModal = toRefs(props).open
    const isLoading = ref(false)
    const counterImage = ref(0)

    const getStories = async () => {
      try {
        isLoading.value = true
        await store.dispatch('card/getAllStories')
      } catch (e) {
        router.push({ name: 'not-found' })
      }
      isLoading.value = false
    }

    const emitCloseModal = () => {
      emit('close-modal')
    }

    getStories()

    return {
      closeModal,
      emitCloseModal,
      counterImage,
      stories: computed(() => store.getters['card/getStories']),
      isLoading
    }
  },
  components: {
    VLazyImage
  }
}
</script>

<style>
</style>
