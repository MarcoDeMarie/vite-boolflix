<script>

import { store } from '../../data/store' 


export default {
  name: 'Card',

  data(){
    return{
      store,
    }
  },
}
</script>

<template>
  

  <div
    class="card"
    v-for="(movie, index) in store.movie"
    :key="index">
    <h3>{{movie.title}}</h3>
    <h5>{{ movie.original_title }}</h5>

    <img
      v-if="movie.original_language === 'it'"
      class="flag"
      src="/img/it.png"
      alt="">
      <img
      v-else-if="movie.original_language === 'en'"
      class="flag"
      src="/img/en.png"
      alt="">
      <p v-else>{{ movie.original_language }}</p>
      
    <p>{{ Math.round(movie.vote_average/2) }}</p>
  </div>
  
  <div
    class="card"
    v-for="(tv, index) in store.tv"
    :key="index">
    <h3>{{tv.name}}</h3>
    <h5>{{ tv.original_name }}</h5>
    <img
      v-if="tv.original_language === 'it'"
      class="flag"
      src="/img/it.png"
      alt="">
      <img
      v-else-if="tv.original_language === 'en'"
      class="flag"
      src="/img/en.png"
      alt="">
      <p v-else>{{ tv.original_language }}</p>
    <p>{{ Math.round(tv.vote_average/2) }}</p>
  </div>
  
</template>

<style>
.card{
  height: 400px;
  width: 250px;
  background-color: rebeccapurple;
  margin: 10px 10px 10px 10px;
}
.flag{
  width: 20px;
  height: 15px;
}
</style>