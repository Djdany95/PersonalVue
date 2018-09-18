
<template>
  <div id="blog">
    <h1 class="titleSerif">{{ $t('section.blog.title') }}</h1>
    <h3 class="totalPosts">{{ totalPosts }} {{ $t('section.blog.published') }}</h3>
    <div
      v-if="loading==true"
      class="spinner"/>
    <div v-else>
      <div v-if="error==false">
        <transition-group
          name="fade"
          mode="out-in">
          <a
            v-for="post in posts"
            :key="post.id"
            :href="post.url"
            class="postCard"
            target="top"
            aria-label="Post">
            <h1 class="titleSerif">{{ post.post }}</h1>
            <h5><u>{{ $t('section.blog.read') }}</u></h5>
          </a>
        </transition-group>
      </div>
      <div v-else>
        <h1 class="postCard">
          {{ $t('section.blog.error') }}
        </h1>
      </div>
      <a
        :href="'https://dev.to/'+blogUser"
        class="loadMore"
        target="top"
        aria-label="Dev.to">{{ $t('section.blog.loadmore') }}</a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { blogUser } from '../shared/config.js';
export default {
  name: 'Blog',
  data () {
    return {
      posts: [],
      totalPosts: '',
      error: false,
      loading: true,
      blogUser: blogUser
    }
  },
  created() {
    this.getPosts();
  },
  methods: {
    getPosts(){
      const vm = this;
      axios.get('https://devto-posts-api.herokuapp.com/getlastposts/'+this.blogUser)
        .then(response => {
          vm.loading = false;
          vm.error = false;
          vm.posts = response.data.posts;
          vm.totalPosts = response.data.total;
        })
        .catch(() => {
          vm.loading = false;
          vm.error = true;
        })
    }
  }
}
</script>

<style scoped>
.totalPosts {
  margin-left: 1em;
}
.postCard {
  display: block;
  width: 75%;
  position: relative;
  margin-top: 1em;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 1em 1em;
  text-align: center;
  text-decoration: none;
  font-size: 1.5em;
  color: #2c3e50;
  background-color: rgb(250, 255, 250);
  border: 2px solid rgba(44, 175, 116, 0.2);
  transition: all 0.3s ease;
}
.postCard:hover {
  top: -5px;
  -webkit-box-shadow: 0px 0px 120px 0px rgba(44, 175, 116, 0.5);
  -moz-box-shadow: 0px 0px 120px 0px rgba(44, 175, 116, 0.5);
  box-shadow: 0px 0px 120px 0px rgba(44, 175, 116, 0.5);
}
.postCard h5 {
  text-decoration: #2c3e50;
  margin-bottom: 0;
}
.loadMore {
  position: relative;
  display: block;
  width: 20%;
  margin-top: 4em;
  margin-left: auto !important;
  margin-right: auto !important;
  padding: 0.5em;
  text-align: center;
  text-decoration: none;
  cursor: pointer;
  font-size: 1.1em;
  color: rgb(250, 255, 250);
  background-color: #2c3e50;
  border: 1px solid rgba(44, 175, 116, 0.2);
  -webkit-border-radius: 2em;
  -moz-border-radius: 2em;
  border-radius: 2em;
  transition: all 0.3s ease;
}
.loadMore:hover {
  top: -2px;
  -webkit-box-shadow: 0px 0px 50px 0px rgba(44, 175, 116, 0.5);
  -moz-box-shadow: 0px 0px 50px 0px rgba(44, 175, 116, 0.5);
  box-shadow: 0px 0px 50px 0px rgba(44, 175, 116, 0.5);
}

/*Responsive*/
@media screen and (max-width: 959.98px) {
  .postCard {
    font-size: 1.1em;
    width: 75%;
    margin-left: auto !important;
    margin-right: auto !important;
  }
  .totalPosts {
    font-size: 0.9em;
  }
  .loadMore {
    font-size: 0.9em;
  }
}

.spinner {
  width: 4em;
  height: 4em;
  background-color: #2c3e50;

  margin: 5em auto;
  -webkit-animation: sk-rotateplane 1.2s infinite ease-in-out;
  animation: sk-rotateplane 1.2s infinite ease-in-out;
}

@-webkit-keyframes sk-rotateplane {
  0% {
    -webkit-transform: perspective(120px);
  }
  50% {
    -webkit-transform: perspective(120px) rotateY(180deg);
  }
  100% {
    -webkit-transform: perspective(120px) rotateY(180deg) rotateX(180deg);
  }
}

@keyframes sk-rotateplane {
  0% {
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg);
  }
  50% {
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
  }
  100% {
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
