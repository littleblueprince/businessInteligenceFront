<template>
  <div id="basic">

    <vue-particles
      id="particles-js"
      :clickEffect="true"
      :hoverEffect="true"
      :lineLinked="true"
      :lineOpacity="0.4"
      :linesDistance="150"
      :linesWidth="1"
      :moveSpeed="3"
      :particleOpacity="0.7"
      :particleSize="4"
      :particlesNumber="100"
      class="back"
      clickMode="push"
      color="#39AFFD"
      hoverMode="grab"
      linesColor="#8DD1FE"
      shapeType="circle"
    >
    </vue-particles>
    <el-button class="basicButton" style="position: absolute;" type="info" @click="btnClick()">
      点击进入
    </el-button>
  </div>
</template>

<script>
export default {
  name: "basicInfo",
  methods: {
    btnClick() {
      const vm = this;
      vm.$router.push({name: 'index', params: {id: 10}})
    }
  }
}
</script>

<style scoped>
.basicButton {
  position: relative;
  left: 500px;
  top: 300px;
}

#particles-js {
  width: 100%;
  height: 100%;
  position: fixed;
  background: url("../assets/basicIndex.jpg");
  background-size: 100%;
}
</style>
