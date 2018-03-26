<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  /* min-height: 100% */
  /* overflow-x: scroll; */
}
body {
  /* background-image: url('assets/Gradient-Backgrounds.jpg') !important; */
  top: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  position: fixed;
  background: #102131;
  /* overflow-x: scroll; */
}
</style>
