
<template>
  <div id="projects">
    <h1>{{ $t('section.projects.title') }}</h1>
    <a v-for="project in projects" :key="project.name" class="projectCard" :href="project.url" :style="{'background-color': project.bck}">
      <h2>{{ project.name }}</h2>
      <i :class="project.icon"></i>
      <h4>{{ project.desc }}</h4>
    </a>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {
      projects: [
        {'name': 'MyWatchList', 'icon': 'fab fa-angular', 'url': 'https://mywatchlist.xyz', 'desc': 'Web to do a tracking list of your series.', 'bck': ''},
        {'name': 'MyWatchList API', 'icon': 'fab fa-node-js', 'url': 'https://github.com/djdany01/MyWatchListAPI', 'desc': 'API for the project MyWatchList.', 'bck': ''},
        {'name': 'NoMoreIntros', 'icon': 'fab fa-python', 'url': 'https://github.com/djdany01/NoMoreIntros/releases', 'desc': 'Program to cut videos (Delete that Intros/Outros).', 'bck': ''},
        {'name': 'HorasCLI', 'icon': 'fab fa-python', 'url': 'https://github.com/djdany01/HorasCLI', 'desc': 'Simple python CLI to create a schedule of hours used in projects.', 'bck': ''},
        {'name': 'PersonalVue', 'icon': 'fab fa-vuejs', 'url': 'https://daniperez.me', 'desc': 'Personal multilanguage portfolio and blog Vue version.', 'bck': ''},
        {'name': 'DeleteBlankLines', 'icon': 'fab fa-python', 'url': 'https://github.com/djdany01/DeleteBlankLines', 'desc': 'Python script to delete blank lines in a file.', 'bck': ''}
      ],
      colors: ['#ccffe8', '#ffd1db', '#ffffd2', '#d4f6ff', '#95F7CA', '#9ACFF5', '#FFB59A', '#FFD39A']
    }
  },
  beforeMount () {
    this.projects.forEach(project => {
      project.bck = this.colors[Math.floor(Math.random() * this.colors.length)]
    })
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
}
.projectCard:hover {
  top: -5px;
  left: -5px;
  -webkit-box-shadow: 5px 5px 10px 1px rgba(44, 175, 116, 0.5);
  -moz-box-shadow: 5px 5px 10px 1px rgba(44, 175, 116, 0.5);
  box-shadow: 5px 5px 10px 1px rgba(44, 175, 116, 0.5);
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
  left: 1px;
}

/*Responsive*/
@media screen and (max-width: 959.98px) {
  .projectCard {
    display: block;
    font-size: 1.2em;
    width: 100%;
    margin: 1em 0 0 0;
  }
}
</style>
