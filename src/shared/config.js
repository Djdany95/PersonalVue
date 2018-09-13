// Set here the languages you want and edit the i18n file too
export const languages = [
  { name: 'English', lang: 'en' },
  { name: 'Español', lang: 'es' }
];

// Set the url to your social networks
export const social = {
  github: 'https://github.com/djdany01',
  devto: 'https://dev.to/djdany01',
  twitter: 'https://twitter.com/djdany_01'
};

// You can change the colors, name and icon but don't touch the url if don't know how to change it.
export const sections = [
  {
    name: 'about',
    icon: 'fas fa-user-circle',
    color: '#48b9d8',
    bck: '#d4f6ff',
    url: '/'
  },
  {
    name: 'projects',
    icon: 'fas fa-folder-open',
    color: '#d6ba00',
    bck: '#ffffd2',
    url: '/projects'
  },
  {
    name: 'blog',
    icon: 'fas fa-file-alt',
    color: '#be030c',
    bck: '#ffd1db',
    url: '/blog'
  }
];

// Set here your projects, the translate is equal to your i18n, desc and bck is setted dynamically later
// To customize the colors go to SectionProjects.vue and change the colors there
export const projects = [
  {
    name: 'MyWatchList',
    icon: 'fab fa-angular',
    url: 'https://github.com/djdany01/MyWatchList',
    desc: '',
    bck: '',
    translate: 'section.projects.mywatchlist'
  },
  {
    name: 'MyWatchList API',
    icon: 'fab fa-node-js',
    url: 'https://github.com/djdany01/MyWatchListAPI',
    desc: '',
    bck: '',
    translate: 'section.projects.mywatchlistapi'
  },
  {
    name: 'NoMoreIntros',
    icon: 'fab fa-python',
    url: 'https://github.com/djdany01/NoMoreIntros',
    desc: '',
    bck: '',
    translate: 'section.projects.nomoreintros'
  },
  {
    name: 'HorasCLI',
    icon: 'fab fa-python',
    url: 'https://github.com/djdany01/HorasCLI',
    desc: '',
    bck: '',
    translate: 'section.projects.horascli'
  },
  {
    name: 'PersonalVue',
    icon: 'fab fa-vuejs',
    url: 'https://github.com/djdany01/personalVue',
    desc: '',
    bck: '',
    translate: 'section.projects.personalvue'
  },
  {
    name: 'DeleteBlankLines',
    icon: 'fab fa-python',
    url: 'https://github.com/djdany01/DeleteBlankLines',
    desc: '',
    bck: '',
    translate: 'section.projects.deleteblanklines'
  }
];
