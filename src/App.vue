<template>
  <div id="app">
    <Header/>
    <section>
      <router-view/>
    </section>
    <Footer/>
  </div>
</template>

<script>
import Footer from './components/Footer'
import Header from './components/Header'
export default {
  name: 'App',
  components: {
    Header,
    Footer
  },
  methods: {
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
Footer{
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
}
Header{
  position:fixed;
  right: 0px;
  top: 10px;
  width: 100%;
  text-align: right;
}
</style>
