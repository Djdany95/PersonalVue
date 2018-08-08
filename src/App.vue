<template>
  <div id="app">
    <Header/>
    <NavMenu/>
    <section>
      <router-view/>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
import NavMenu from './components/NavMenu'
export default {
  name: 'App',
  components: {
    Header,
    Footer,
    NavMenu
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

</style>
