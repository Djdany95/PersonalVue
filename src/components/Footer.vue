
<template>
  <footer>
    <Languages class="langComp"/>
  </footer>
</template>

<script>
import Languages from './FooterLanguages'
export default {
  name: 'Footer',
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
  padding: 1em;
  text-align: right;
}
@media screen and (max-width: 767.98px) {
  .langComp {
    padding: 1em;
    text-align: right;
  }
}
</style>
