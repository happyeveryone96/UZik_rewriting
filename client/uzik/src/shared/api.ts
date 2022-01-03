
// API TYPES
import { SignInType, SignUpType, AddPostType } from './ApiTypes';

// AXIOS
import axios from 'axios';

// TOKEN
import { getToken } from './token';

export const instance = axios.create({
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
  SignUp: (user: SignUpType) => instance.post('/api/user/register', user),
  SignIn: (user: SignInType) => instance.post('/api/user/login', user),
  LogOut: () => instance.get('/api/user/logout'),
  Auth: () => instance.get('/api/user/auth'),
  AddPost: (post: AddPostType) => axios.post('/api/post/create', post),
  GetPosts: () => instance.get('/api/post/getPosts'),
  GetPostDetail: (postId: string) => instance.post('/api/post/getPostDetail', { postId }),
  DeletePost: (postId: string) => instance.post('/api/post/delete', { postId })
}

export default apis;