<script setup>
import { computed } from 'vue'
import meta from './services/metatags'
// eslint-disable-next-line no-unused-vars
const title = computed(() => meta.state.title)
// eslint-disable-next-line no-unused-vars
const url = computed(() => meta.state.url)
</script>

<template>
  <router-view />
  <teleport to="head">
    <title>{{title}} - Lo más selecto de las mejores marcas para el mercado hospitalario</title>
    <meta property="og:url" :content="url" />
  </teleport>
</template>
