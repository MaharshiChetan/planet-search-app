import axios from 'axios';

// Request interceptor
axios.interceptors.request.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor
axios.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

const request = (url, data, params, method, headers = {}) =>
  axios({
    url,
    method,
    data,
    params,
    headers,
  });

export default request;
