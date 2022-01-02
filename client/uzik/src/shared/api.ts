
// API TYPES
import { SignInType, SignUpType } from './ApiTypes';

// AXIOS
import axios from 'axios';

// TOKEN / JWT
import { getToken } from './token';

export const instance = axios.create({
  // baseURL: 'http://13.125.2.115:8080/',
  baseURL: 'http://localhost:8080/',
  withCredentials: true,
  timeout: 3000,
});

instance.interceptors.request.use((config) => {
  config.headers!['Content-Type'] = 'application/json; charset=utf-8';
  config.headers!['X-Requested-With'] = 'XMLHttpRequest';
  config.headers!.token = getToken();
  config.headers!.Accept = 'application/json';
  return config;
});

const apis = {
  SignUp: (user: SignUpType) => axios.post('/api/user/register', user),
  SignIn: (user: SignInType) => axios.post('/api/user/login', user),
  LogOut: () => axios.get('/api/user/logout'),
  Auth: () => axios.get('/api/user/auth'),
}

export default apis;