<template>
  <nav class="navMenu">
    <router-link
      v-for="item in sections"
      :key="item.name"
      :id="item.name+'Tab'"
      :style="{'color': item.color}"
      :to="item.url"
      class="menuItem">{{ $t('section.'+item.name+'.title') }} <i :class="item.icon"/></router-link>
  </nav>
</template>

<script>
import { sections as configSections } from '../shared/config.js'
export default {
  name: 'NavMenu',
  data () {
    return {
      sections: configSections
    }
  },
  watch: {
    '$route' () {
      this.setBckColor()
    }
  },
  mounted () {
    this.setBckColor()
  },
  methods: {
    setBckColor: function () {
      this.sections.forEach(item => {
        if (item.url === this.$route.path) {
          document.getElementById(item.name+'Tab').style.backgroundColor = item.bck
        } else {
          document.getElementById(item.name+'Tab').style.backgroundColor = 'initial'
        }
      })
    }
  }
}
</script>

<style scoped>
.navMenu a {
  transition: all 0.3s ease;
  box-shadow: 2px 2px;
  cursor: pointer;
  text-decoration: none;
  font-size: 1em;
  border-radius: 5px 5px 5px 5px;
  font-weight: bold;
  margin: 0.5em;
  padding: 0.5em;
}
.navMenu .fas {
  font-size: 1.4em;
}
.navMenu a:hover {
  font-size: 1.4em;
}
/*Responsive*/
@media screen and (max-width: 599.98px) {
  .navMenu a {
    font-size: 0.8em;
  }
  .navMenu a:hover {
    font-size: 1.3em;
  }
}
@media screen and (max-width: 425.98px) {
  .navMenu a {
    font-size: 0.7em;
  }
  .navMenu a:hover {
    font-size: 1.1em;
  }
}
@media screen and (max-width: 399.98px) {
  .navMenu a {
    font-size: 0.6em;
  }
  .navMenu a:hover {
    font-size: 0.9em;
  }
}
</style>
