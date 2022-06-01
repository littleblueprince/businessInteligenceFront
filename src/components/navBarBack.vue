<template>
  <div>
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item @click="btnClick">返回</b-nav-item>
        </b-navbar-nav>
      </b-navbar>
    </div>
  </div>
</template>

<script>

export default {
  name: "navBarBack",
 methods: {
    btnClick() {
      const vm = this;
      vm.$router.push({name: 'index'})
    }
  }
}
</script>

<style scoped>

</style>
