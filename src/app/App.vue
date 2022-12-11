<script setup>
import { computed } from 'vue'
import meta from './services/metatags'
const title = computed(() => meta.state.title)
const url = computed(() => meta.state.url)
</script>

<template>
  <router-view />
  <teleport to="head">
    <title>{{title}} - Lo más selecto de las mejores marcas para el mercado hospitalario</title>
    <meta property="og:url" :content="url" />
  </teleport>
</template>
