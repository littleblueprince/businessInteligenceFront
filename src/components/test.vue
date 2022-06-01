<template>
  <div>
    {{ value }}
  </div>
</template>

<script>
export default {
  name: "test",
  data() {
    return {
      value: this.$route.params.value
    }
  }
}
</script>

<style scoped>

</style>
