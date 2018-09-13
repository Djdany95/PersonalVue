
<template>
  <div id="projects">
    <h1>{{ $t('section.projects.title') }}</h1>
    <a 
      v-for="project in projects" 
      :key="project.name" 
      :href="project.url" 
      :style="{'background-color': project.bck}" 
      class="projectCard">
      <h2>{{ project.name }}</h2>
      <i :class="project.icon"/>
      <h4>{{ project.desc }}</h4>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      colors: ['#ccffe8', '#ffd1db', '#ffffd2', '#d4f6ff', '#95F7CA', '#9ACFF5', '#FFB59A', '#FFD39A', '#d4f6ff', '#ffffd2', '#ffd1db', '#ff8a90', '#ffee7d', '#84e4ff']
    }
  },
  computed: {
    projects: function () {
      return [
        {'name': 'MyWatchList', 'icon': 'fab fa-angular', 'url': 'https://github.com/djdany01/MyWatchList', 'desc': this.$t('section.projects.mywatchlist'), 'bck': this.colors[Math.floor(Math.random() * this.colors.length)]},
        {'name': 'MyWatchList API', 'icon': 'fab fa-node-js', 'url': 'https://github.com/djdany01/MyWatchListAPI', 'desc': this.$t('section.projects.mywatchlistapi'), 'bck': this.colors[Math.floor(Math.random() * this.colors.length)]},
        {'name': 'NoMoreIntros', 'icon': 'fab fa-python', 'url': 'https://github.com/djdany01/NoMoreIntros', 'desc': this.$t('section.projects.nomoreintros'), 'bck': this.colors[Math.floor(Math.random() * this.colors.length)]},
        {'name': 'HorasCLI', 'icon': 'fab fa-python', 'url': 'https://github.com/djdany01/HorasCLI', 'desc': this.$t('section.projects.horascli'), 'bck': this.colors[Math.floor(Math.random() * this.colors.length)]},
        {'name': 'PersonalVue', 'icon': 'fab fa-vuejs', 'url': 'https://github.com/djdany01/personalVue', 'desc': this.$t('section.projects.personalvue'), 'bck': this.colors[Math.floor(Math.random() * this.colors.length)]},
        {'name': 'DeleteBlankLines', 'icon': 'fab fa-python', 'url': 'https://github.com/djdany01/DeleteBlankLines', 'desc': this.$t('section.projects.deleteblanklines'), 'bck': this.colors[Math.floor(Math.random() * this.colors.length)]}
      ]
    }
  }
}
</script>

<style scoped>
.projectCard {
  margin: 1em 1em 1em 10em;
  padding: 0.5em 0 0.5em 0;
  width: 15em;
  height: 15em;
  display: inline-block;
  text-decoration: none;
  color: #2c3e50;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(44, 175, 116, 0.2);
}
.projectCard:hover {
  top: -5px;
  -webkit-box-shadow: 0px 0px 120px 0px rgba(44, 175, 116, 0.5);
  -moz-box-shadow: 0px 0px 120px 0px rgba(44, 175, 116, 0.5);
  box-shadow: 0px 0px 120px 0px rgba(44, 175, 116, 0.5);
}
.projectCard h2 {
  position: relative;
  top: 0px;
}
.projectCard i {
  font-size: 5em;
}
.projectCard h4 {
  position: absolute;
  bottom: 0px;
}

/*Responsive*/
@media screen and (max-width: 959.98px) {
  .projectCard {
    display: block;
    font-size: 1em;
    width: 100%;
    margin: 1em 0 0 0;
  }
  .projectCard h4 {
    position: relative;
    bottom: -20px;
  }
}
</style>
