// Set here the languages you want and edit the i18n file too
export const languages = [
  { name: 'English', lang: 'en' },
  { name: 'Español', lang: 'es' }
];

// Set here you translations
export const i18nStrings = {
  es: {
    madeWith: {
      made: 'Hecho con',
      by: 'por',
      me: 'Mi'
    },
    section: {
      home: {
        title: 'Inicio'
      },
      blog: {
        title: 'Blog',
        published: 'Publicaciones publicadas',
        error: 'No se han podido cargar las publicaciones.',
        loadmore: 'Ver más...',
        read: 'Leer'
      },
      projects: {
        title: 'Proyectos',
        mywatchlist: 'Web para llevar un seguimiento de tus series.',
        mywatchlistapi: 'API para la aplicación web MyWatchList.',
        nomoreintros: 'Programa para cortar videos, intros y créditos.',
        horascli:
          'Python CLI para crear el seguimiento de las horas usadas en tus proyectos con Markdown.',
        personalvue: 'Portafolio personal multilenguaje en VueJS.',
        deleteblanklines:
          'Script de python para eliminar las líneas en blanco de un archivo.'
      },
      about: {
        title: 'Sobre mí',
        name: 'Daniel J. Pérez Nieto',
        description:
          'Soy un Desarrollador Junior Full Stack, centrado tanto Frontend (Angular, VueJS, ES6/ES7, SASS, LESS) como Backend (Node.js, Flask) para desarrollo web y aplicaciones, también tengo experiencia en Java, Android y Bases de Datos (MySQL, MongoDB).\n\nEstoy trabajando con Vuejs así como con Angular y Node.js, así como aprendiendo más Python para automatización, desarrollo backend y aplicaciones de escritorio. Estoy muy interesado en la tecnología en general.\n\nEstoy disponible para colaboraciones y discutir sobre cualquier cosa, puedes ponerte en contacto conmigo por estas redes:'
      }
    }
  },
  en: {
    madeWith: {
      made: 'Made with',
      by: 'by',
      me: 'Me'
    },
    section: {
      home: {
        title: 'Home'
      },
      blog: {
        title: 'Blog',
        published: 'Posts published',
        error: "The posts couldn't be loaded.",
        loadmore: 'See more...',
        read: 'Read'
      },
      projects: {
        title: 'Projects',
        mywatchlist: 'Web to do a tracking of your series.',
        mywatchlistapi: 'API for MyWatchList web application.',
        nomoreintros: 'Program to cut videos, intros and credits.',
        horascli:
          'Python CLI to create a schedule of hours used in your projects with Markdown.',
        personalvue: 'Personal multilanguage portfolio made in VueJS.',
        deleteblanklines: 'Python script to delete blank lines in a file.'
      },
      about: {
        title: 'About Me',
        name: 'Daniel J. Pérez Nieto',
        description:
          "I'm a Spanish Junior Full Stack Developer, focused on FrontEnd (Angular, VueJS, ES6/ES7, SASS, LESS) and BackEnd (Node.js, Flask) for apps and web development, i have experience too with Java, Android and Databases (MySQL, MongoDB).\n\nI'm working with Vuejs, Angular and Node.js, as well as learning more Python for automation, backend development and desktop applications. I'm very interested in technology in general.\n\nI'm available for collaborations and discussions about all, you can get in touch in this networks:"
      }
    }
  }
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

// Set the url to your social networks
export const social = {
  github: 'https://github.com/djdany01',
  devto: 'https://dev.to/djdany01',
  twitter: 'https://twitter.com/djdany_01'
};

// Set here your Dev.to user
export const blogUser = 'djdany01';
