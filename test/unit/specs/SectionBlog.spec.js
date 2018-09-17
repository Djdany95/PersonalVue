import Vue from 'vue';
import SectionBlog from '@/components/SectionBlog';
import VueI18n from 'vue-i18n';
import { i18nStrings } from '../../../src/shared/config';
import router from '@/router';
import MockAdapter from 'axios-mock-adapter';
import axios from 'axios';

Vue.use(VueI18n);
const i18n = new VueI18n({
  locale: 'es', // set default locale
  messages: i18nStrings // set locale strings
});

describe('SectionBlog.vue', () => {
  let vm;
  let Constructor;
  let mock;

  beforeEach(() => {
    mock = new MockAdapter(axios);
    Constructor = Vue.extend(SectionBlog);
    vm = new Constructor({ i18n, router }).$mount();
  });

  afterEach(() => {
    mock.reset();
    vm.$destroy();
  });

  it('should set data correctly', () => {
    expect(vm.posts.length).to.be.equal(0);
    expect(vm.totalPosts).to.be.equal('');
    expect(vm.error).to.be.false;
    expect(vm.loading).to.be.true;
  });

  it('getPosts OK should set data correctly', async () => {
    expect(vm.error).to.be.false;
    expect(vm.loading).to.be.true;
    expect(vm.posts.length).to.be.equal(0);
    expect(vm.totalPosts).to.be.equal('');

    mock.onGet().reply(200, {
      posts: [{id: 1, post: 'test1', url: 'urlTest1'}],
      total: '1'
    });
    await vm.getPosts();
  });

  it('getPosts FAIL should set data correctly', async () => {
    expect(vm.error).to.be.false;
    expect(vm.loading).to.be.true;
    expect(vm.posts.length).to.be.equal(0);
    expect(vm.totalPosts).to.be.equal('');

    mock.onGet().reply(404);

    try {
      await vm.getPosts();
    } catch (error) {
      expect(vm.error).to.be.true;
      expect(vm.loading).to.be.false;
      expect(vm.posts.length).to.be.equal(0);
      expect(vm.totalPosts).to.be.equal('');
    }

  });
});
