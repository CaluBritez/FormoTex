import axios from 'axios';
import { getEnvVariables } from '../helpers/getEnvVariables.js';

const { VITE_API_URL } = getEnvVariables();

const formotexApi = axios.create({
  baseURL: VITE_API_URL
});

// Todo: Add interceptors

export default formotexApi;