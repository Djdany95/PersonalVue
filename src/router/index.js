import Vue from 'vue';
import Router from 'vue-router';
import Main from '../components/Main.vue';
import Projects from '../components/SectionProjects.vue';
import About from '../components/SectionAbout.vue';
import Blog from '../components/SectionBlog.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        { path: '', component: About },
        { path: 'about', component: About },
        { path: 'projects', component: Projects },
        { path: 'blog', component: Blog }
      ]
    }
  ]
});
