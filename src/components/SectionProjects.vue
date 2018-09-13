
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
import { projects as configProjects } from '../shared/config.js'
export default {
  name: 'Projects',
  data () {
    return {
      cardColors: [
        '#ccffe8', '#ffd1db', '#ffffd2', '#d4f6ff', '#95F7CA', '#9ACFF5', '#FFB59A',
        '#FFD39A', '#d4f6ff', '#ffffd2', '#ffd1db', '#ff8a90', '#ffee7d', '#84e4ff'
        ]
    }
  },
  computed: {
    projects: function () {
      const vm = this;
      let projects = configProjects.map((project) => {
        project.desc = vm.translateProject(project.translate);
        project.bck = vm.randomColor();
        return project;
      });
      return projects;
    }
  },
  methods: {
    randomColor: function(){
      return this.cardColors[Math.floor(Math.random() * this.cardColors.length)];
    },
    translateProject: function(translate){
      return this.$t(translate);
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
