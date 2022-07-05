<template>
  <div class="logo">
    <img 
        class="logo__image" 
        :src="logoDimedical" 
        alt="Dimedical logo" 
        srcset=""
    >
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: {
        sucursal: {
            type: String,
            required: true
        }
    },

    setup(props) {
        const logoDimedical = computed(() => {
            return props.sucursal === 'sur' ? 
            'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2FnoBackLogo.jpg?alt=media&token=25cb30e2-b960-43a0-918d-2da96a37956a' 
            : 'https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/static%2FlogoCorporativo.png?alt=media&token=ca32a756-7656-4259-b5b7-921c11a0a3e8' 
        })

        return { 
            logoDimedical
        }
    }
}
</script>

<style>

</style>