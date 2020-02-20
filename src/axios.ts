import axios from 'axios';

const config = {
  baseURL: 'https://api.github.com',
  timeout: 5000
};

export default axios.create(config);
