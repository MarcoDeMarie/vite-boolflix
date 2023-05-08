<script >
import Card from './partials/Card.vue'
import { store } from '../data/store' 

export default{
  name: 'Main',

  components:{
      Card,
  },

  data() {
    return {
      store
    }
  },

}

</script>

<template>
  <main>
    <div class="container">
      <Card />
    </div>
    
  </main>
  
</template>

<style lang="scss" scoped>
@use '../scss/partials/generals' as *;
@use '../scss/partials/variables' as *;

main{
  background-color: rgba(7, 7, 7, 0.885);
  color: white;
}

.container{
  display: flex;
  flex-wrap: wrap;
}

</style>
