<template>
  <div class="copy">
    <p>&copy;{{ currentYear }} Di medical. Todos los derechos resevados.</p>
  </div>
</template>

<script>
export default {
  setup() {
    return {
      currentYear: new Date().getFullYear(),
    };
  },
};
</script>

<style>
</style>
