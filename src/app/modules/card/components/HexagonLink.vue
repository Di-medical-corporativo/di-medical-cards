<template>
  <div class="hexagon-container">
    <div class="hexagon-container__link">
        <a 
            :href="link" 
            class="hexagon-container__link__page">
            <i 
                :class="`bi bi-${icon} icon`" 
                :style="{ 'color': colorIcon }">
            </i>
        </a>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'

export default {
    props: {
        sucursal: {
            type: String
        },
        icon: {
            type: String
        },
        link: {
            type: String
        }
    },

    setup(props) {
        return {
            colorIcon: computed(() =>{ 
                return props.sucursal === 'sur' ? '#218d9b' : '#c28400'
            })
        }
    }
}
</script>

<style>

</style>