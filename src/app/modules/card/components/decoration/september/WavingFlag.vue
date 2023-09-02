<template>
    <div class="waving-flag" ref="flagContainer">
    </div>
</template>

<script setup>
import { onMounted, ref } from 'vue'

let startNestedDivs = '\n\t<div class="s s'
let closeNestedDivs = ''
const numberOfDivs = 24
let counterNestedOpen, counterNestedClose

const flagContainer = ref(null)

onMounted(() => {
  for (counterNestedOpen = 0; counterNestedOpen < numberOfDivs; counterNestedOpen++) {
    startNestedDivs = startNestedDivs + counterNestedOpen + `">\n ${'\t'.repeat(counterNestedOpen + 1)}<div class="s s`
  }
  startNestedDivs = startNestedDivs + counterNestedOpen + '">'

  for (counterNestedClose = numberOfDivs + 1; counterNestedClose > 0; counterNestedClose--) {
    closeNestedDivs += `\n${'\t'.repeat(counterNestedClose - 1)}</div>`
  }

  closeNestedDivs += '\t\n'

  startNestedDivs = startNestedDivs + closeNestedDivs

  flagContainer.value.innerHTML = startNestedDivs
})
</script>
