import Vue from 'vue'
import Main from '@/components/Main'
import VueI18n from 'vue-i18n'
import strings from '../../../src/shared/i18n';
import router from '@/router'

Vue.use(VueI18n)
const i18n = new VueI18n({
  locale: 'es', // set default locale
  messages: strings // set locale strings
})

describe('Main.vue', () => {
  let vm
  let Constructor

  beforeEach(() => {
    Constructor = Vue.extend(Main)
    vm = new Constructor({ i18n, router }).$mount()
  })

  afterEach(() => {
    vm.$destroy()
  })

  it('should render correct contents', () => {
    expect(vm.$el.querySelector('header')).to.exist;
    expect(vm.$el.querySelector('section')).to.exist;
    expect(vm.$el.querySelector('footer')).to.exist;
  })
})
