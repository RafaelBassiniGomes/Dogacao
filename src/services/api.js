import axios from 'axios';

const config = {
  headers: {
    Authorization: 'Bearer ',
  },
};

const api = axios.create({
  baseURL: 'https://api.dogacao.org',
  // baseURL: 'http://localhost:4000',
  config,
});

export default api;
