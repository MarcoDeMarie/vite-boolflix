<script >
import { store } from '../data/store' 


export default{
  name: 'Header',

  data(){
    return{
      store,
    }
  }

}

</script>

<template>

  <header>
    <div class="container">

      <div class="logo">
        <img src="/img/logo-boolflix.png" alt="logo">
      </div>

      <div class="reserch">
        <input v-model.trim="store.apiParams.query" type="text" placeholder="Cerca un film o una Serie Tv...">
        <button @click="$emit('startSearch')" >Cerca</button>
      </div>

    </div>
  </header>

  

  


  
</template>

<style lang="scss" scoped>
@use '../scss/partials/generals' as *;
@use '../scss/partials/variables' as *;

header{
  background-color: black;
  padding: 10px 10px 10px 10px;
}

.container{
  display: flex;
  justify-content: space-between;
  align-items: center;
}

button{
  margin-left: 10px;
  height: 30px;
  width: 50px;
}

input{
  width: 300px;
  height: 30px;
}

img{
  height: 60px;
}

</style>
