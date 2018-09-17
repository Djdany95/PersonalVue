import Vue from 'vue';
import Footer from '@/components/Footer';
import VueI18n from 'vue-i18n';
import {i18nStrings} from '../../../src/shared/config';
import router from '@/router';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'es', // set default locale
  messages: i18nStrings // set locale strings
});

describe('Footer.vue', () => {
  let vm;
  let Constructor;

  beforeEach(() => {
    Constructor = Vue.extend(Footer);
    vm = new Constructor({ i18n, router }).$mount();
  });

  afterEach(() => {
    vm.$destroy();
  });

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('.madeWith')).to.exist;
    expect(vm.$el.querySelector('.lang')).to.not.exist;
    expect(vm.$el.querySelector('.icoLang')).to.exist;
  });

  it('should set data correctly', () => {
    expect(vm.openLang).to.be.false;
    expect(vm.languages.length).to.be.gt(0);
  });

  it('toggleLang should set data correctly', done => {
    expect(vm.openLang).to.be.false;
    expect(vm.$el.querySelector('.lang')).to.not.exist;
    vm.toggleLang();
    expect(vm.openLang).to.be.true;
    Vue.nextTick(function() {
      expect(vm.$el.querySelector('.lang')).to.exist;
      done();
    });
  });

  it('setLang should render correct contents', done => {
    expect(vm.$el.querySelector('.madeWith')).to.exist;

    vm.setLang('es');
    Vue.nextTick(function() {
      expect(vm.$el.querySelector('.madeWith').textContent).to.have.string(
        'Hecho'
      );
      done();
    });

    vm.setLang('en');
    Vue.nextTick(function() {
      expect(vm.$el.querySelector('.madeWith').textContent).to.have.string(
        'Made'
      );
      done();
    });
  });

  it('getLang should set data correctly when getItem', () => {
    localStorage.clear();
    expect(localStorage.getItem('lang')).to.deep.equal(null);
    localStorage.setItem('lang', 'es');

    vm.getLang();
    expect(localStorage.getItem('lang')).to.deep.equal('es');
  });

  it('getLang should set data correctly when not getItem', () => {
    localStorage.clear();
    expect(localStorage.getItem('lang')).to.deep.equal(null);

    vm.getLang();
    expect(localStorage.getItem('lang')).to.deep.equal('en');
  });
});
