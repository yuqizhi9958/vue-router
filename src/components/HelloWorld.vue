<template>
  <div class="head">a
    <router-link to="/center">中心</router-link>
    <router-link to="/foot">底部</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.head {
  width: 100%;
  height: 100px;
  background-color: yellowgreen;
}
</style>
