
<template>
  <div id="about">
    <h1 class="titleSerif">{{ $t('section.about.title') }}</h1>
    <div class="aboutCard">
      <div
        class="openResume"
        @click="toggleResume">
        <h1 class="titleSerif">{{ $t('section.about.name') }}</h1>
        <img
          class="myPic"
          src="../assets/me.png"
          alt="Me">
      </div>
      <h4>{{ $t('section.about.description') }}</h4>
      <div>
        <a
          :href="social.github"
          target="top"
          aria-label="Github">
          <svg
            class="badge"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zM277.3 415.7c-8.4 1.5-11.5-3.7-11.5-8 0-5.4.2-33 .2-55.3 0-15.6-5.2-25.5-11.3-30.7 37-4.1 76-9.2 76-73.1 0-18.2-6.5-27.3-17.1-39 1.7-4.3 7.4-22-1.7-45-13.9-4.3-45.7 17.9-45.7 17.9-13.2-3.7-27.5-5.6-41.6-5.6-14.1 0-28.4 1.9-41.6 5.6 0 0-31.8-22.2-45.7-17.9-9.1 22.9-3.5 40.6-1.7 45-10.6 11.7-15.6 20.8-15.6 39 0 63.6 37.3 69 74.3 73.1-4.8 4.3-9.1 11.7-10.6 22.3-9.5 4.3-33.8 11.7-48.3-13.9-9.1-15.8-25.5-17.1-25.5-17.1-16.2-.2-1.1 10.2-1.1 10.2 10.8 5 18.4 24.2 18.4 24.2 9.7 29.7 56.1 19.7 56.1 19.7 0 13.9.2 36.5.2 40.6 0 4.3-3 9.5-11.5 8-66-22.1-112.2-84.9-112.2-158.3 0-91.8 70.2-161.5 162-161.5S388 165.6 388 257.4c.1 73.4-44.7 136.3-110.7 158.3zm-98.1-61.1c-1.9.4-3.7-.4-3.9-1.7-.2-1.5 1.1-2.8 3-3.2 1.9-.2 3.7.6 3.9 1.9.3 1.3-1 2.6-3 3zm-9.5-.9c0 1.3-1.5 2.4-3.5 2.4-2.2.2-3.7-.9-3.7-2.4 0-1.3 1.5-2.4 3.5-2.4 1.9-.2 3.7.9 3.7 2.4zm-13.7-1.1c-.4 1.3-2.4 1.9-4.1 1.3-1.9-.4-3.2-1.9-2.8-3.2.4-1.3 2.4-1.9 4.1-1.5 2 .6 3.3 2.1 2.8 3.4zm-12.3-5.4c-.9 1.1-2.8.9-4.3-.6-1.5-1.3-1.9-3.2-.9-4.1.9-1.1 2.8-.9 4.3.6 1.3 1.3 1.8 3.3.9 4.1zm-9.1-9.1c-.9.6-2.6 0-3.7-1.5s-1.1-3.2 0-3.9c1.1-.9 2.8-.2 3.7 1.3 1.1 1.5 1.1 3.3 0 4.1zm-6.5-9.7c-.9.9-2.4.4-3.5-.6-1.1-1.3-1.3-2.8-.4-3.5.9-.9 2.4-.4 3.5.6 1.1 1.3 1.3 2.8.4 3.5zm-6.7-7.4c-.4.9-1.7 1.1-2.8.4-1.3-.6-1.9-1.7-1.5-2.6.4-.6 1.5-.9 2.8-.4 1.3.7 1.9 1.8 1.5 2.6z"/>
          </svg>
        </a>
        <a
          :href="social.devto"
          target="top"
          aria-label="Dev.to">
          <svg
            class="badge"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 -20 448 440">
            <path d="M10.5 2.5C5.6 4.2 2.4 7.8 1 12.9.3 15.6.1 77.2.2 207.1.5 396.6.5 397.5 2.5 401c1.2 1.9 3.6 4.3 5.5 5.5 3.5 2 4.2 2 196 2s192.5 0 196-2c1.9-1.2 4.3-3.6 5.5-5.5 2-3.5 2-4.2 2-196s0-192.5-2-196c-1.2-1.9-3.6-4.3-5.5-5.5-3.5-2-4.4-2-194.5-2.2-162.9-.2-191.6 0-195 1.2zm96.8 124c9 1.9 15.5 5.6 22.2 12.6 6.1 6.4 9.9 13.7 11.5 21.9 1.3 6.9 1.3 81.1 0 88.1-3.4 18.2-18.9 32.4-38.1 34.9-4 .5-17.4 1-29.6 1H51V125h24.8c17.6 0 26.6.4 31.5 1.5zm130.7 13V154h-51v36h31v29h-31l.2 18.2.3 18.3 25.3.3 25.2.2v29h-29.5c-32.8 0-37.9-.6-43.1-5.2-7.3-6.4-6.9-2.3-7.2-72.6-.2-43.8.1-64.5.8-67.3 1.4-5.2 7.3-11.6 12.5-13.4 3.1-1.1 10.9-1.4 35.3-1.5H238v14.5zm48.9-12.3c.4 1.3 6.8 25.6 14.2 54 7.4 28.5 13.6 51.2 13.8 50.5.3-.7 6.6-24.8 14.1-53.7l13.7-52.5 15.6-.3c11.8-.2 15.7.1 15.7 1s-34.6 132.4-36.6 139c-1.4 4.6-8.9 14-13.1 16.5-5.3 3-13.1 3.5-17.9 1-4.3-2.2-10-8.8-12.9-15-1.8-3.8-31.2-112-38-140l-.7-2.7h15.6c15.3 0 15.7 0 16.5 2.2z"/>
            <path d="M80 205v51.2l10.3-.4c8.9-.3 10.8-.7 14.8-3 7.8-4.6 7.9-4.9 7.9-48.4 0-42.4 0-42.4-7.3-47.2-3.6-2.4-5.1-2.7-14.9-3.1l-10.8-.3V205z"/>
          </svg>
        </a>
        <a
          :href="social.twitter"
          target="top"
          aria-label="Twitter">
          <svg
            class="badge"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512">
            <path d="M400 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-48.9 158.8c.2 2.8.2 5.7.2 8.5 0 86.7-66 186.6-186.6 186.6-37.2 0-71.7-10.8-100.7-29.4 5.3.6 10.4.8 15.8.8 30.7 0 58.9-10.4 81.4-28-28.8-.6-53-19.5-61.3-45.5 10.1 1.5 19.2 1.5 29.6-1.2-30-6.1-52.5-32.5-52.5-64.4v-.8c8.7 4.9 18.9 7.9 29.6 8.3a65.447 65.447 0 0 1-29.2-54.6c0-12.2 3.2-23.4 8.9-33.1 32.3 39.8 80.8 65.8 135.2 68.6-9.3-44.5 24-80.6 64-80.6 18.9 0 35.9 7.9 47.9 20.7 14.8-2.8 29-8.3 41.6-15.8-4.9 15.2-15.2 28-28.8 36.1 13.2-1.4 26-5.1 37.8-10.2-8.9 13.1-20.1 24.7-32.9 34z"/>
          </svg>
        </a>
      </div>
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
import '../../static/css/github-gist.css';
import { social as configSocial } from '../shared/config.js'
export default {
  name: 'About',
  data () {
    return {
      resume: false,
      social: configSocial
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
  width: 10em;
  margin: 0;
  height: 10em;
  border: 5px solid rgba(44, 175, 116, 0.2);
}
.aboutCard {
  width: 85%;
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
  font-size: 2.5em;
}
.aboutCard h4 {
  white-space: pre-line;
  width: 90%;
  margin-left: auto !important;
  margin-right: auto !important;
  line-height: 1.7;
  font-size: 1.1em;
  text-align: left;
}
.aboutCard .badge {
  height: 4em;
  width: 5em;
  fill: #2c3e50;
  margin: 0em 1em;
  margin-bottom: 1em;
  transition: all 0.3s ease;
}
.aboutCard .badge:hover {
  height: 5em;
  width: 6em;
}
.resumeCard {
  width: 90%;
  margin-left: auto !important;
  margin-right: auto !important;
  background-color: rgb(250, 255, 250);
  display: block;
  text-decoration: none;
  color: #2c3e50;
  text-align: justify;
  position: relative;
  transition: all 0.3s ease;
  border: 1px solid rgba(44, 175, 114, 1);
}
.resumeCard section {
  margin: 1em 0;
}
</style>
