<template>
  <nav class="navMenu">
    <a v-for="item in menu" :key="item.name" :style="{'color': item.color, 'background-color': item.name===actual?item.bck:none}">{{ $t(item.name) }} <i :class="item.icon"></i></a>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      actual: 'home',
      menu: [
        { 'name': 'home', 'icon': 'fas fa-home', 'color': '#2caf74', 'bck': '#ccffe8' },
        { 'name': 'blog', 'icon': 'fas fa-file-alt', 'color': '#be030c', 'bck': '#ffd1db' },
        { 'name': 'portfolio', 'icon': 'fas fa-folder-open', 'color': '#d6ba00', 'bck': '#ffffd2' },
        { 'name': 'about', 'icon': 'fas fa-user-circle', 'color': '#48b9d8', 'bck': '#d4f6ff' }
      ]
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
.navMenu a:hover {
  font-size: 1.5em;
  left: -0.1em;
}

.navMenu .fas {
  font-size: 1.8em;
}

@media screen and (max-width: 767.99px) {
  .navMenu a {
    font-size: 0.7em;
    }
  .navMenu a:hover {
    font-size: 1.2em;
  }
}
</style>
