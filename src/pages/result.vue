<template>
  <div>
    <navBarBack></navBarBack>
    <side-bar></side-bar>
    <div id="graph-panel" class="wrapper-panel">
  </div>
    <rightBar></rightBar>
  </div>
</template>

<script>
import sideBar from '../components/sideBar'
import dataShow from '../components/dataShow'
import rightBar from "../components/rightBar";
import {RUN} from '../assets/js/drawFunction.js'
import navBarBack from "../components/navBarBack";
export default {
  name: "result",
  data() {
    return {
      data:this.$route.params.value

      }

  },
  components: {
    sideBar,
    dataShow,
    rightBar,
    navBarBack
  },
  methods: {},
  mounted() {
    RUN(this.data)
    console.log('dataShow')
  }
}
</script>

<style scoped>

</style>
