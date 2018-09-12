import Vue from 'vue';
import SectionAbout from '@/components/SectionAbout';
import VueI18n from 'vue-i18n';
import strings from '../../../src/shared/i18n';
import router from '@/router';
require('es6-promise/auto');

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'es', // set default locale
  messages: strings // set locale strings
});

describe('SectionAbout.vue', () => {
  let vm;
  let Constructor;

  beforeEach(() => {
    Constructor = Vue.extend(SectionAbout);
    vm = new Constructor({ i18n, router }).$mount();
  });

  afterEach(() => {
    vm.$destroy();
  });

  it('should set data correctly', () => {
    expect(vm.resume).to.be.false;
  });

  it('toggleResume should set data correctly', () => {
    expect(vm.resume).to.be.false;
    vm.toggleResume()
    expect(vm.resume).to.be.true;
  });

  it('resumeComponent should set data correctly in spanish', () => {
    vm.$locale='es'
    vm.resumeComponent()
  });

  it('resumeComponent should set data correctly in english', () => {
    vm.$locale='en'
    vm.resumeComponent()
  });
});
