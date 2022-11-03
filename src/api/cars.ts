import axiosInstance from './interceptor';

export default {
  getCars() {
    return axiosInstance({
      headers: {},
      url: '/cars',
      method: 'get',
    });
  },
};
