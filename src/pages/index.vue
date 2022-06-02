<template>
  <div>
    <navBar></navBar>
    <side-bar></side-bar>
    <div class="wrapper-panel1"></div>
    <rightBar></rightBar>
  </div>
</template>

<script>
import navBar from "../components/navBar";
import sideBar from '../components/sideBar'
import dataShow from '../components/dataShow'
import rightBar from "../components/rightBar";

export default {
  name: "index",
  data() {
    return {}
  },
  components: {
    navBar,
    sideBar,
    dataShow,
    rightBar
  },
  methods: {},
  mounted() {
    console.log('index')
  }
}
</script>

<style scoped>
</style>
