import Vue from 'vue';
import SectionProjects from '@/components/SectionProjects';
import VueI18n from 'vue-i18n';
import strings from '../../../src/shared/i18n';
import router from '@/router';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'es', // set default locale
  messages: strings // set locale strings
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
