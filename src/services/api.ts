import axios from 'axios';

const api = axios.create({
  baseURL: 'https://loja.consul.com.br',
});

export default api;
