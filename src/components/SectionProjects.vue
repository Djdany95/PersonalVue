
<template>
  <div id="projects">
    <h1>{{ $t('section.projects.title') }}</h1>
    <a v-for="project in projects" :key="project.name" class="projectCard" :href="project.url" :style="{'background': 'url('+project.img+') no-repeat center'}">
      <h2>{{ project.name }}</h2>
      <br>
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
        {'name': 'test1', 'img': 'http://via.placeholder.com/250x150', 'url': 'http://via.placeholder.com/250x150', 'desc': 'desc1', 'bck': 'none'},
        {'name': 'test2', 'img': 'http://via.placeholder.com/250x150', 'url': 'http://via.placeholder.com/250x150', 'desc': 'desc2', 'bck': 'none'},
        {'name': 'test3', 'img': 'http://via.placeholder.com/250x150', 'url': 'http://via.placeholder.com/250x150', 'desc': 'desc3', 'bck': 'none'},
        {'name': 'test4', 'img': 'http://via.placeholder.com/250x150', 'url': 'http://via.placeholder.com/250x150', 'desc': 'desc4', 'bck': 'none'},
        {'name': 'test5', 'img': 'http://via.placeholder.com/250x150', 'url': 'http://via.placeholder.com/250x150', 'desc': 'desc5', 'bck': 'none'},
        {'name': 'test6', 'img': 'http://via.placeholder.com/250x150', 'url': 'http://via.placeholder.com/250x150', 'desc': 'desc6', 'bck': 'none'}
      ],
      colors: ['#ccffe8', '#ffd1db', '#ffffd2', '#d4f6ff', '#95F7CA', '#9ACFF5', '#FFB59A', '#FFD39A']
    }
  },
  beforeMount(){
    this.projects.forEach(project => {
      project.bck = this.colors[Math.floor(Math.random() * this.colors.length)]
    });
  }
}
</script>

<style scoped>
.projectCard {
  margin: 1em 1em 1em 10em;
  padding: 0.5em 0 0.5em 0;
  width: 25%;
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
  -webkit-box-shadow: 5px 5px 10px 1px rgba(44,175,116,0.5);
-moz-box-shadow: 5px 5px 10px 1px rgba(44,175,116,0.5);
box-shadow: 5px 5px 10px 1px rgba(44,175,116,0.5);
}
.projectCard h2 {
  margin: 0;
  padding: 0;
}
.projectCard img {
  margin: 0;
  padding: 0;
  width: 100%;
}
.projectCard h4 {
  margin: 0;
  padding: 0;
}

/*Responsive*/
 @media screen and (max-width: 959.98px) {
  .projectCard {
    display: block;
    font-size: 1.2em;
    width: 100%;
    margin: 1em 0 0 0;
  }
  .projectCard:hover {
    
  }
}
</style>
