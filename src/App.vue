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
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
}
body, html {
  margin: 0;
  padding: 0;
  width: 100%;
  min-width: 100%;
  max-width: 100%;
  height: 100%;
  min-height: 100%;
  max-height: 100%;
  overflow: hidden;
  touch-action: none;
  cursor: default;
}
ul, li {
  list-style: none;
  padding-inline-start: 0px;
  margin-block-start: 0;
  margin-block-end: 0;
}
</style>
