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
    getApi(type){
      let apiUrl = store.apiUrl + type;
      axios.get(apiUrl, {params: store.apiParams})
        .then(result => {
          store[type] = result.data.results;
      })
    } 
  },

  mounted(){
    this.getApi('movie');
    this.getApi('tv');

  }
}

</script>

<template>

  
  

  <Header @startSearch="getApi('tv'); getApi('movie')"/>

  <Main />

</template>

<style lang="scss">



</style>
