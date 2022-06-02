<template>
</template>

<script>
export default {
  name: "mack",
  data(){
    return {
    name:'sadadsa'
    }
  },
  methods: {
    open(data) {
      this.$notify({
        title: '节点补充信息',
        dangerouslyUseHTMLString: true,
        message: data
      });
    }
  }
}
</script>

<style scoped>

</style>
