
// Api Types
import { SignInType, SignUpType } from './ApiTypes';

// Info
import { setUserInfo, delUserInfo } from './userInfo';

// redux
import { history } from '../redux/configureStore';

// axios
import axios from 'axios';

// token / jwt
import { getToken, delToken, setToken } from './token';
import jwtDecode from 'jwt-decode';
export const instance = axios.create({
  baseURL: 'http://13.125.2.115:8080/',
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

instance.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (err) => {
    const path = window.location.pathname;

    if (err.response.status === 307) {
      setToken(err.response.data.newAccessToken);
      setUserInfo('userInfo', jwtDecode(getToken()!));
      history.go(0);
    } else if (
      err.response.status === 401 &&
      !['/signup', '/'].includes(path)
    ) {
      window.alert('토큰이 만료되었어요! 다시 로그인해주세요!');
      delToken();
      delUserInfo('userInfo');
      history.push('/');
    }
    return Promise.reject(err);
  }
);

const apis = {
  SignUp: (user: SignUpType) => instance.post('/api/user/register', user),
  SignIn: (user: SignInType) => instance.post('/api/user/login', user),
}

export default apis;