
<template>
  <div id="about">
    <h1>{{ $t('section.about.title') }}</h1>
    <div class="aboutCard">
      <div
        class="openResume"
        @click="toggleResume">
        <h1>{{ $t('section.about.name') }}</h1>
        <img
          class="myPic"
          src="https://via.placeholder.com/350x150"
          alt="Daniel">
      </div>
      <h3>{{ $t('section.about.description') }}</h3>
      <a href="https://github.com/djdany01">
        <img
          class="badge"
          src="../assets/badges/github-badge.svg"
          alt="Daniel J. Pérez Nieto Github">
      </a>
      <a href="https://dev.to/djdany01">
        <img
          class="badge"
          src="../assets/badges/dev-badge.svg"
          alt="Daniel J. Pérez Nieto DEV.to">
      </a>
      <a href="https://twitter.com/djdany_01">
        <img
          class="badge"
          src="../assets/badges/twitter-badge.svg"
          alt="Daniel J. Pérez Nieto Twitter">
      </a>
    </div>
    <transition
      name="fade"
      mode="out-in">
      <div
        v-if="resume"
        class="resumeCard">
        <component :is="resumeComponent" />
      </div>
    </transition>
  </div>
</template>

<script>
// Needed for markdown styles
import '../../static/css/github-gist.css'
export default {
  name: 'About',
  data () {
    return {
      resume: false
    }
  },
  computed: {
    resumeComponent () {
      // eslint-disable-next-line no-console
      console.log('resume-'+this.$locale) // Not working without this
      return () => import('../../static/resume/resume-' + this.$locale + '.md')
    }
  },
  methods: {
    toggleResume () {
      this.resume = !this.resume
    }
  },
}
</script>

<style scoped>
.openResume {
  cursor: pointer;
}
.myPic {
  border-radius: 100%;
  width: 150px;
  margin: 0;
  height: 150px;
}
.aboutCard {
  width: 75%;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: rgb(250, 255, 250);
  display: block;
  text-decoration: none;
  color: #2c3e50;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(44, 175, 116, 0.2);
}
.aboutCard:hover {
  -webkit-box-shadow: 0px 0px 120px 0px rgba(44, 175, 116, 0.5);
  -moz-box-shadow: 0px 0px 120px 0px rgba(44, 175, 116, 0.5);
  box-shadow: 0px 0px 120px 0px rgba(44, 175, 116, 0.5);
}
.aboutCard h1 {
  font-size: 1.7em;
}
.aboutCard h3 {
  white-space: pre-line;
  padding: 10px;
  margin-bottom: 0px;
}
.aboutCard .badge {
  height: 4em;
  width: 5em;
  margin: 0em 1em;
  margin-bottom: 1em;
}
.resumeCard {
  width: 90%;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: rgb(250, 255, 250);
  display: block;
  text-decoration: none;
  color: #2c3e50;
  text-align: center;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(44, 175, 114, 1);
}
.resumeCard section {
  margin: 1em 0;
}
</style>
