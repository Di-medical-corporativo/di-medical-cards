<script setup>
import { computed } from 'vue'
import meta from './services/metatags'
const title = computed(() => meta.state.title)
const description = computed(() => meta.state.description)
const url = computed(() => meta.state.url)
</script>

<template>
  <router-view />
  <teleport to="head">
    <title>{{title}} - Lo más selecto de las mejores marcas para el mercado hospitalario</title>
    <meta property="og:description" :content="description">
    <meta property="og:title" content="Contacta con nuestros asesores por medio de su Vcard | Lo más selecto de las mejores marcas para el mercado hospitalario." />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="https://firebasestorage.googleapis.com/v0/b/di-medical-del-sur.appspot.com/o/corp_logo.jpg?alt=media&token=6bc0943d-3c07-4791-a1bb-75f063fb504f" />
    <meta property="og:url" :content="url" />
  </teleport>
</template>
