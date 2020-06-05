<template>
  <div id="app">
    <Header1></Header1>
    <Top1></Top1>

  </div>
</template>

<script>
import Header1 from "@/components/Header1";
import Top1 from "@/components/Top1";

export default {
  name: 'App',
  components: {
    Top1,
    Header1
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
