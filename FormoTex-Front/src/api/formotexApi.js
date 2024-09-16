import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables.js';

const { VITE_API_URL } = getEnvVariables();

const formotexApi = axios.create({
  baseURL: VITE_API_URL
});

// Todo: Add interceptors
formotexApi.interceptors.request.use( config => {

  config.headers = {
    ...config.headers,
    'x-token': localStorage.getItem('token')
  }

  return config
})

export default formotexApi;