import request from './request';
import { BASE_URL } from './apiConstants';

export const API = {
  getPlanets: (params = {}) => {
    const url = `${BASE_URL}/planets`;
    return request(url, {}, params, 'GET');
  },
  getShapes: () => {
    const url = `${BASE_URL}/shapes`;
    return request(url, {}, {}, 'GET');
  },
  getColors: () => {
    const url = `${BASE_URL}/colors`;
    return request(url, {}, {}, 'GET');
  },
  getSizes: () => {
    const url = `${BASE_URL}/sizes`;
    return request(url, {}, {}, 'GET');
  },
};
