<script >

import axios from 'axios'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import { store } from './data/store' 



export default{
  name: 'App',
  components:{
      Header,
      Main
  },
  data() {
    return {
      store
    }
  },
  methods:{
    getApi(){
      axios.get(store.apiUrl, {
        params: {
          api_key: store.token,
          query: store.titleSearch,
        }
      })
        .then(result => {
          store.movies = result.data.results;
          console.log(store.movies)
      })
    } 
  },

  mounted(){
    this.getApi();
  }
}

</script>

<template>

  <div v-for="(movie, index) in store.movies" :key="index">{{ movie.title }}</div>
  

  <Header @startSearch="getApi" />

  <Main />

</template>

<style lang="scss">



</style>
