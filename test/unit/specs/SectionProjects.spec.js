import Vue from 'vue';
import SectionProjects from '@/components/SectionProjects';
import VueI18n from 'vue-i18n';
import {i18nStrings} from '../../../src/shared/config';
import router from '@/router';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'es', // set default locale
  messages: i18nStrings // set locale strings
});

describe('SectionProjects.vue', () => {
  let vm;
  let Constructor;

  beforeEach(() => {
    Constructor = Vue.extend(SectionProjects);
    vm = new Constructor({ i18n, router }).$mount();
  });

  afterEach(() => {
    vm.$destroy();
  });

  it('should set data correctly', () => {
    expect(vm.cardColors.length).to.be.gt(1);
    expect(vm.projects.length).to.be.gt(1);
  });
});
