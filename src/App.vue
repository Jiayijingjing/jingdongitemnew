<template>
  <div id="app">
    <Top />
    <Head />
    <router-view ></router-view>
    <Bottom />
    <Foot />
  </div>
</template>

<script>
import HelloWorld from './components/home'
import Foot from './components/foot'
import Top from './components/top'
import Head from './components/head'
import Bottom from './components/bottom'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Foot,
    Top,
    Head,
    Bottom

  }
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;

}

</style>
