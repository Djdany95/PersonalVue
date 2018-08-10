import Vue from 'vue'
import Router from 'vue-router'
import Main from '../components/Main.vue'
import Home from '../components/SectionHome.vue'
import Blog from '../components/SectionBlog.vue'
import Projects from '../components/SectionProjects.vue'
import About from '../components/SectionAbout.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Main,
      children: [
        { path: '', component: Home },
        { path: 'blog', component: Blog },
        { path: 'projects', component: Projects },
        { path: 'about', component: About }
      ]
    }
  ]
})
