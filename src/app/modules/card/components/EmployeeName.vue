<template>
  <div class="card-contact__name">
    <h1>{{employee.name}}</h1>
    <h4>{{employee.job}}</h4>
  </div>
</template>

<script>
export default {
    props: {
        sucursal: {
            type: String,
        },
        employee: {
            type: Object,
            default: () => {}
        }
    }
}
</script>