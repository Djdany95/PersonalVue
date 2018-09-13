<template>
  <nav class="navMenu">
    <router-link
      v-for="item in menu"
      :key="item.name"
      :id="item.name"
      :style="{'color': item.color}"
      :to="item.url">{{ $t('section.'+item.name+'.title') }} <i :class="item.icon"/></router-link>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      menu: [
        { 'name': 'about', 'icon': 'fas fa-user-circle', 'color': '#48b9d8', 'bck': '#d4f6ff', 'url': '/' },
        { 'name': 'projects', 'icon': 'fas fa-folder-open', 'color': '#d6ba00', 'bck': '#ffffd2', 'url': '/projects' },
        { 'name': 'blog', 'icon': 'fas fa-file-alt', 'color': '#be030c', 'bck': '#ffd1db', 'url': '/blog' }
      ]
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
      this.menu.forEach(item => {
        if (item.url === this.$route.path) {
          document.getElementById(item.name).style.backgroundColor = item.bck
        } else {
          document.getElementById(item.name).style.backgroundColor = 'initial'
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
