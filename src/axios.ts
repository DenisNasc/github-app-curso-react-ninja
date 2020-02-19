import axios from 'axios';

const config = {
  baseURL: 'https://api.github.com',
  timeout: 1000
};

export default axios.create(config);
