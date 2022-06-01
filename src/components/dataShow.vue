<template>
  <div id="graph-panel" class="wrapper-panel">
  </div>
</template>

<script>
import {RUN} from '../assets/js/drawFunction.js'
export default {
  name: "dataShow",
  mounted() {
    RUN()
    console.log('dataShow')
  }
}
</script>

<style scoped>

</style>
