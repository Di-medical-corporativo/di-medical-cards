<template>
  <div class="card-contact__name">
    <p class="card-contact__name__employee">{{employee.name}}</p>
    <h4 class="card-contact__name__job">{{employee.job}}</h4>
    <button 
        class="card-contact__name__button"
        :style="{ 'background': sucursalColor }"
    >
        <i class="bi bi-person-fill icon"></i>
        Sobre mi
    </button>
  </div>
</template>

<script>
import { computed } from 'vue'
export default {
    props: {
        sucursal: {
            type: String,
        },
        employee: {
            type: Object,
            default: () => {}
        }
    },

    setup(props) {
        return { 
            sucursalColor: computed(() => {
                return props.sucursal == 'sur' ? '#218d9b' : '#c28400'
            })
        }
    }
}
</script>