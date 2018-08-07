
<template>
  <div>
    <div @click="toggleLang()"><i class="fas fa-language icoLang" style="font-size: 2em;"></i>
      <a v-for="(item, index) in lang" :key="index" v-if="openLang" class="lang" @click="changeLang(item)">{{ item }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Languages',
  data () {
    return {
      openLang: false,
      actual: 'Español',
      lang: ['English', 'Español']
    }
  },
  methods: {
    changeLang: function (lang) {
      if (lang === this.actual) {
        // Toast
        console.log('actual')
      } else {
        // Redirect
        console.log('redirect')
      }
    },
    toggleLang: function () {
      this.openLang = !this.openLang
    }
  }
}
</script>

<style scoped>
.lang{
    display: block;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.3s ease;
}
.lang:hover {
  font-size: 1.5em;
  color: #4FC08D;
}
.icoLang{
  cursor: pointer;
  transition: all 0.3s ease;
}
.icoLang:hover{
  color: #4FC08D;
}
</style>
