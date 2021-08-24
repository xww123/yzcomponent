<template>
  <div id="app">
    <yz-button type="primary" @click="fn">按钮1</yz-button>
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    fn () {
      console.log('fn按钮1')
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
