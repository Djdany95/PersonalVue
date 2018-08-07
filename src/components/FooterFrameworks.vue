<template>
  <div>
    <a v-for="(item, index) in frameworks" :key="index" class="frameworks" :style="{color: item.color, 'background-color': item.bck}" @click="changeFramework(item.name)"><i :class="item.icon"></i>{{ item.name }}</a>
  </div>
</template>

<script>
export default {
  name: 'Frameworks',
  data () {
    return {
      actual: 'Vue',
      frameworks: [
        { 'name': 'Vue', 'icon': 'fab fa-vuejs', 'color': '#4FC08D', 'bck': '#ccffe8' },
        { 'name': 'Angular', 'icon': 'fab fa-angular', 'color': '#DD0031', 'bck': '#ffd1db' },
        { 'name': 'React', 'icon': 'fab fa-react', 'color': '#61DAFB', 'bck': '#d4f6ff' },
        { 'name': 'Vanilla', 'icon': 'fab fa-js-square', 'color': '#ffdc00', 'bck': '#ffffd2' }
      ]
    }
  },
  methods: {
    changeFramework: function (framework) {
      if (framework === this.actual) {
        // Toast
        console.log('actual')
      } else {
        // Redirect
        console.log('redirect')
      }
    }
  }
}
</script>

<style scoped>
.frameworks {
  padding: 0.5em;
  font-size: 1em;
  text-decoration: none;
  cursor: pointer;
  transition: all 0.3s ease;
}
.frameworks:hover {
  font-size: 1.5em;
}
</style>
