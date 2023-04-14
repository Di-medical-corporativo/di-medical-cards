<template>
  <div class="hexagon-container">
    <div class="hexagon-container__link">
      <div :href="link" class="hexagon-container__link__page" @click="updateFieldCountAndRedirect">
        <i :class="`bi bi-${icon} icon`" :style="{ color: colorIcon }"> </i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import useEmployee from '../composables/useEmployee'

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
    },
    employeeVisitId: {
      type: String
    },
    updateVisit: {
      type: String
    }
  },

  setup (props) {
    const { updateVisitCount } = useEmployee()

    const createAnchorTag = () => {
      const anchorTag = document.createElement('a')
      anchorTag.href = props.link
      return anchorTag
    }

    const updateFieldCountAndRedirect = () => {
      if (props.updateVisit) {
        updateVisitCount(props.employeeVisitId, props.updateVisit)
      }

      const a = createAnchorTag()
      a.click()
    }

    return {
      colorIcon: computed(() => {
        return props.sucursal === 'sur' ? '#218d9b' : '#c28400'
      }),
      updateFieldCountAndRedirect
    }
  }
}
</script>

<style>
</style>
