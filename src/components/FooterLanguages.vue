
<template>
  <div>
    <h4 class="madeWith">{{ $t('madeWith.made') }} <a href="https://vuejs.org/"><i class="fas fa-heart"></i></a> {{ $t('madeWith.by') }} <span style="color: #551a8b">{{ $t('madeWith.me') }}</span></h4>
    <a v-for="(item, index) in lang" :key="index" v-if="openLang" class="lang" @click="setLang(item.lang)">{{ item.name }}</a>
    <div><i @click="toggleLang" class="fas fa-language icoLang"></i></div>
  </div>
</template>

<script>
export default {
  name: 'Languages',
  data () {
    return {
      openLang: false,
      lang: [{'name': 'English', 'lang': 'en'}, {'name': 'Español', 'lang': 'es'}]
    }
  },
  created () {
    this.getLang()
  },
  methods: {
    getLang: function () {
      if (localStorage.getItem('lang')) {
        this.setLang(localStorage.getItem('lang'))
      } else {
        localStorage.setItem('lang', 'en')
        this.setLang(localStorage.getItem('lang'))
      }
    },
    setLang: function (lang) {
      this.$locale = lang
      localStorage.setItem('lang', lang)
      this.openLang = false
    },
    toggleLang: function () {
      this.openLang = !this.openLang
    }
  }
}
</script>

<style scoped>
.madeWith {
  position: absolute;
  bottom: 0px;
  color: #2caf74;
}
.lang {
  display: block;
  text-decoration: none;
  cursor: pointer;
  font-size: 1em;
  font-weight: bold;
  transition: all 0.3s ease;
}
.lang:hover {
  font-size: 1.5em;
  font-weight: bolder;
  color: #2caf74;
}
.icoLang {
  font-size: 2.5em;
  cursor: pointer;
  transition: all 0.3s ease;
}
.icoLang:hover {
  color: #2caf74;
}
</style>
