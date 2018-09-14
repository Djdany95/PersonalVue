<template>
  <div>
    <h4 class="madeWith">{{ $t('madeWith.made') }} <a 
      href="https://vuejs.org/" 
      target="top"><i class="fas fa-heart me"/></a> {{ $t('madeWith.by') }} <a
        href="https://dev.to/djdany01"
        class="me"
        target="top">{{ $t('madeWith.me') }}</a></h4>
    <span v-if="openLang">
      <a
        v-for="(item, index) in languages"
        :key="index"
        class="lang"
        @click="setLang(item.lang)">{{ item.name }}</a>
    </span>
    <div>
      <i
        class="fas fa-language icoLang"
        @click="toggleLang"/>
    </div>
  </div>
</template>

<script>
import { languages as configLanguages } from '../shared/config.js'
export default {
  name: 'Languages',
  data () {
    return {
      openLang: false,
      languages: configLanguages
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
  font-size: 0.7em;
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
  color: rgb(44, 175, 116);
}
.me {
  color: rgb(44, 62, 80);
  text-decoration: none;
}
</style>
