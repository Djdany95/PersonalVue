<template>
  <nav class="navMenu">
    <a v-for="item in menu" :key="item.name" :style="{'color': item.color, 'background-color': item.bck, 'top': item.position}">{{ item.name }} <i :class="item.icon"></i></a>
  </nav>
</template>

<script>
export default {
  name: 'NavMenu',
  data () {
    return {
      menu: [
        { 'position': '200px', 'name': 'Home', 'icon': 'fas fa-home', 'color': '#2caf74', 'bck': '#ccffe8' },
        { 'position': '260px', 'name': 'Blog', 'icon': 'fas fa-file-alt', 'color': '#be030c', 'bck': '#ffd1db' },
        { 'position': '320px', 'name': 'Portfolio', 'icon': 'fas fa-folder-open', 'color': '#d6ba00', 'bck': '#ffffd2' },
        { 'position': '380px', 'name': 'About', 'icon': 'fas fa-user-circle', 'color': '#48b9d8', 'bck': '#d4f6ff' }
      ]
    }
  }
}
</script>

<style scoped>
.navMenu a {
  transition: all 0.3s ease;
  border-radius: 50px 15px 50px 15px;
  box-shadow: 2px 2px;
  cursor: pointer;
  position: fixed;
  left: -130px;
  padding: 15px;
  width: 150px;
  text-decoration: none;
  font-size: 1em;
  border-radius: 0 5px 5px 0;
  font-weight: bold;
}
.navMenu a:hover {
  font-size: 1.5em;
  left: 0;
}

.navMenu .fas {
  position: absolute;
  right: 6px;
  top: 10px;
  font-size: 1.8em;
}
</style>
