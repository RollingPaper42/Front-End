import axios from 'axios';
export const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(async function setConfig(config) {
  const token =
    'eyJraWQiOiJhY2Nlc3MiLCJhbGciOiJIUzI1NiJ9.eyJpYXQiOjE3MDA1NTQ4MDgsImV4cCI6MTcwMDU3MjgwOCwianRpIjoiMyJ9.m7uhFnowEKxYNSi5ybccUgDCFCscAzBVr1mni0-nmIc';
  config.withCredentials = true;
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});
