import Vue from 'vue';
import SectionAbout from '@/components/SectionAbout';
import VueI18n from 'vue-i18n';
import {i18nStrings} from '../../../src/shared/config';
import router from '@/router';
import 'es6-promise/auto';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'es', // set default locale
  messages: i18nStrings // set locale strings
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
    vm.toggleResume();
    expect(vm.resume).to.be.true;
  });

  it('resumeComponent should set data correctly in spanish', () => {
    vm.$locale = 'es';
    vm.resumeComponent();
  });

  it('resumeComponent should set data correctly in english', () => {
    vm.$locale = 'en';
    vm.resumeComponent();
  });
});
