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
  
  <!-- MOVIE -->
  <div
    class="card"
    v-for="(movie, index) in store.movie"
    :key="index">

    <img :src="`https://image.tmdb.org/t/p/w500/${movie.poster_path}`" :alt="movie.title">

    <div class="description">
      <h3>{{movie.title}}</h3>
      <h5>{{ movie.original_title }}</h5>

      <div class="language">
        <span>Language: </span><img
        class="flag"
        :src="`/img/${movie.original_language}.png`"
        alt="">
      </div>
        <div class="stars">
          <span>Rating:
            </span><p
            v-for="index in Math.round(movie.vote_average/2)"
            :key="index"
            ><i
            class="fa-solid fa-star"></i></p>
            <p
            v-for="index in 5 - Math.round(movie.vote_average/2) "
            :key="index"
            ><i
            class="fa-regular fa-star"></i></p>
        </div>
    </div>
  </div>
  

  <!-- SERIE TV -->
  <div
    class="card"
    v-for="(tv, index) in store.tv"
    :key="index">
    
    <img :src="`https://image.tmdb.org/t/p/w500/${tv.poster_path}`" :alt="tv.name">
    <div class="description">
      <h2>{{tv.name}}</h2>
    <h5>{{ tv.original_name }}</h5>

      <div class="language">
          <span>Language: </span><img
          class="flag"
          :src="`/img/${tv.original_language}.png`"
          alt="">
      </div>
      <div class="stars">
        <span>Rating: </span><p
          v-for="index in Math.round(tv.vote_average/2)"
          :key="index"
          ><i
          class="fa-solid fa-star"></i></p>
      </div>
    </div>
    
  </div>
  
</template>

<style lang="scss" scoped>
@use '../../scss/partials/generals' as *;
@use '../../scss/partials/variables' as *;

h3, h5{
  text-align: center;
  margin: 15px 10px 0 10px;

}

span{
  margin-left: 15px;
}

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

.stars {
  display: flex;
  margin-top: 15px;
}

.language{
  margin-top: 20px ;
}

.stars p{
    margin-left: 5px;
  }
  
.card .description {
  display: none;
}

.card:hover > img {
  display: none;
}

.card:hover .description {
  display: block;
}
</style>