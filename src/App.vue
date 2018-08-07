<template>
  <div id="app">
    <Header></Header>
    <nav></nav>
    <section></section>
    <footer><Frameworks/></footer>
  </div>
</template>

<script>
import Frameworks from './components/FooterFrameworks'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
    Frameworks
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}
</style>
