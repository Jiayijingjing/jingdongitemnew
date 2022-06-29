<template>
  <div id="app">
    <Top />
    <HelloWorld />
    <Foot />
  </div>
</template>

<script>
import HelloWorld from './components/home/HelloWorld.vue'
import Foot from './components/foot'
import Top from './components/top'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Foot,
    Top

  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}

</style>
