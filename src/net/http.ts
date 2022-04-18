import axios from 'axios';

import { API_URL, AUTH_API } from './consts';

export const http = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const authHttp = axios.create({
  baseURL: AUTH_API,
  headers: {
    'Content-Type': 'application/json',
  },
});
