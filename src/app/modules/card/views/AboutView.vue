<template>
  <div class="card-about">
    <div class="card-about__logo">
        <Logo :sucursal="sucursal"/>
    </div>
    <div class="card-about__image">
        <button 
            class="card-about__image__button"
            :style="buttonBackground"
        >
            <i class="bi bi-arrow-left icon"></i>
        </button>
        <div 
            class="card-about__image__outline"
            :style="outlineBackground"
            >
            <img 
                alt="" 
                class="card-about__image__employee"
                src="" 
            >
        </div>
    </div>
    <div class="card-about__info"></div>
  </div>
</template>

<script>
import { computed, defineAsyncComponent } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
export default {
    components: {
        Logo: defineAsyncComponent(() => import('../components/Logo.vue'))
    },

    setup() {
        const route = useRoute()
        const { sucursal } = route.params
        return {
            sucursal,
            buttonBackground: computed(() => {
                const backgroundColor = sucursal == 'sur' ? '#218d9b' : '#c28400'
                return { 'background': backgroundColor }
            }),
            outlineBackground: computed(() => {
                const backgrounds = {
                    'sur': 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/FondoSur.webp?alt=media&token=eb8461a2-b4e0-4578-ad86-a4f6d3f008f0',
                    'corporativo': 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/FondoCorp.webp?alt=media&token=acdc5457-d064-490b-bf1a-2f6787b8c0a8'
                }

                return { 'background-image':  `url(${backgrounds[sucursal]})` }
            })
        }
    }
}
</script>

<style>

</style>