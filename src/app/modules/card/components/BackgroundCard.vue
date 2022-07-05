<template>
  <div class="background">
    <slot></slot>
  </div>
</template>

<script>
export default {
    props: {
        dimedicalBackground: {
            type: String,
            required: true
        }
    },
    setup() {
        
    }
}
</script>