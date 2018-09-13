<template>
  <div id="main">
    <header>
      <NavMenu/>
    </header>
    <section>
      <transition 
        name="fade" 
        mode="out-in">
        <router-view/>
      </transition>
    </section>
    <footer>
      <Footer class="langComp"/>
    </footer>
  </div>
</template>

<script>
import Footer from './Footer'
import NavMenu from './NavMenu'
export default {
  name: 'Main',
  components: {
    NavMenu,
    Footer
  },
  methods: {
  }
}
</script>

<style>
header {
  position: fixed;
  z-index: 999;
  right: 0px;
  top: 10px;
  width: 100%;
  text-align: right;
}
section{
  margin-top: 60px;
  height: 100%;
  padding: 0 2em 0 2em;
}
footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
}
.langComp {
  padding: 1em;
  text-align: right;
}
@media screen and (max-width: 767.98px) {
  .langComp {
    padding: 1em;
    text-align: right;
  }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .3s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
