// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import VueI18n from 'vue-i18n';
import App from './App';
import router from './router';
import strings from './shared/i18n';

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: 'en', // set default locale
  messages: strings // set locale strings
});

Object.defineProperty(Vue.prototype, '$locale', {
  get: function() {
    return i18n.locale;
  },
  set: function(locale) {
    i18n.locale = locale;
  }
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  i18n,
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
});
