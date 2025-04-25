import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  params: {
    api_key: 'd783cdaf4065d7449170aef8e781cd23', 
    language: 'pt-BR',
    page: 1
  }
});

export default api;
