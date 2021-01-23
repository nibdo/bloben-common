import axios from 'axios';

import { BASE_URL } from 'bloben-common/globals/url';
import { logger } from 'bloben-common/utils/common';

const headers: any = {
  credentials: 'same-origin',
  'Content-Type': 'application/json',
  withCredentials: true,
};

const config: any = {
  timeout: 5000,
  headers,
  withCredentials: true,
};

const Axios: any = {
  get: async (path: string) => {
    const URL: string = BASE_URL + path;
    try {
      return axios.get(URL, config);
    } catch (error) {
      logger(error);

      return error.response;
    }
  },
  getJSON: async (path: string) => {
    const URL: string = BASE_URL + path;
    try {
      const response: any = await axios.get(URL, config);

      return response.json();
    } catch (error) {
      logger(error);

      return error.response;
    }
  },
  post: async (path: string, data: any) => {
    const URL: string = BASE_URL + path;
    try {
      return axios.post(URL, data, config);
    } catch (error) {
      logger(error);

      return error.response;
    }
  },
  patch: async (path: string, data: any) => {
    const URL: string = BASE_URL + path;
    try {
      return axios.patch(URL, data, config);
    } catch (error) {
      logger(error);

      return error.response;
    }
  },
  put: async (path: string, data: any) => {
    const URL: string = BASE_URL + path;
    try {
      return axios.put(URL, data, config);
    } catch (error) {
      logger(error);

      return error.response;
    }
  },
  delete: async (path: string, data: any) => {
    const URL: string = BASE_URL + path;
    try {
      return axios.delete(URL, { ...config, data });
    } catch (error) {
      logger(error);

      return error.response;
    }
  },
};

export default Axios;
