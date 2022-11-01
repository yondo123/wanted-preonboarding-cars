import axios from 'axios';
import { apiInfo } from '../types/index';

const axiosInstance = axios.create({
  baseURL: apiInfo.REUQEST_URL,
});

axiosInstance.interceptors.request.use(
  (config) => {
    config.method = 'GET';
    return config;
  },
  (err) => Promise.reject(err)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status) {
      switch (error.response) {
        case 404:
          return Promise.reject(error);
        default:
          return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
