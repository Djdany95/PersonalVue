import Vue from 'vue';
import NavMenu from '@/components/NavMenu';
import SectionAbout from '@/components/SectionAbout';
import VueI18n from 'vue-i18n';
import strings from '../../../src/shared/i18n';
import VueRouter from 'vue-router';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'es', // set default locale
  messages: strings // set locale strings
});

Vue.use(VueRouter);
const router = new VueRouter({
  routes: [
    { path: '/', name: 'index', component: NavMenu },
    { path: '/about', name: 'about', component: SectionAbout }
  ]
});

describe('NavMenu.vue', () => {
  let vm;
  let Constructor;

  beforeEach(() => {
    Constructor = Vue.extend(NavMenu);
    vm = new Constructor({ i18n, router }).$mount();
  });

  afterEach(() => {
    vm.$destroy();
  });

  it('should set data correctly', () => {
    expect(vm.sections.length).to.be.gt(1);
  });

  it('setbBckColor should set data correctly when url is equals to name', done => {
    router.push({ name: 'about' });
    Vue.nextTick(function() {
      done();
    });
  });
});
