import { reactive } from 'vue'

export const store = reactive({
  apiUrl: 'https://api.themoviedb.org/3/search/',
  apiParams:{
    api_key:'ba058520bbf56b34153b02a9068f3eb4',
    query: '',
    language: 'it-IT',
  },
  movie: [],
  tv:[],
});