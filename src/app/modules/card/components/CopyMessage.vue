<template>
  <div class="copy">
    <p>&copy;{{currentYear}} Di medical. Todos los derechos resevados.</p>
  </div>
</template>

<script>
export default {
    setup() {
        const currentYear = new Date().getFullYear()
        return {
            currentYear
        }
    }
}
</script>

<style>

</style>