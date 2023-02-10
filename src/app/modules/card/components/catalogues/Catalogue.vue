<template>
  <div class="card-catalogues__catalogue">
    <a
        :href="data.file"
        target="_blank"
        class="card-catalogues__catalogue__title"
        >
        {{data.title}} - {{data.brand}}
    </a>
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      default: () => {}
    }
  }
}
</script>

<style>

</style>
