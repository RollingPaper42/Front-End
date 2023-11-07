import axios from 'axios';

export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(function setConfig(config) {
  config.withCredentials = true;
  return config;
});
