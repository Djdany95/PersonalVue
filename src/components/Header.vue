
<template>
  <header>
      <div>
        <h1>Dkdnil J. Pkfms Nkder</h1>
        <Languages class="langComp"/>
    </div>
  </header>
</template>

<script>
import Languages from './HeaderLanguages'
export default {
  name: 'Header',
  components: {
    Languages
  },
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.langComp {
  right: 0px;
  top: 10px;
  position: absolute;
  padding: 1em;
  text-align: right;
}
</style>
