import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { delToken } from '../../shared/token.ts';
import { SignUpType, SignInType } from '../../shared/ApiTypes';

const initialState = {
  user_info: { email: '', id: ''},
  is_login: false,
};

const user = createSlice({
  name: 'user',
  initialState,
  reducers: {
    logCheck: (state, action) => {
      state.is_login = true;
    },
    logOut: (state, action) => {
      delToken();
      state.is_login = false;
    },
    SetUser: (state, action) => {
      state.user_info.email = action.payload.email;
      state.user_info.id = action.payload.id;
      state.is_login = true;
    },
  },
});

export const loginUser = (body: SignInType) => 
  async (dispatch:any, getState:any, { history }) => {
  const request = axios.post('/api/user/login', body)
    .then(response => {
      if (response.data.loginSuccess === true) {
        history.push('/')
      } else {
        alert('Error');
      }})
}

export const registerUser = (body: SignUpType) => 
  async (dispatch:any, getState:any, { history }) => {
  const request = axios.post('/api/user/register', body)
    .then(response => {
      if (response.data.success === true) {
        history.push('/login')
      } else {
        alert('중복된 이메일입니다.')
      }})
  return { payload: request }
}

export const auth = () => 
  async (dispatch:any, { history }) => {
    const request = axios.get('/api/user/auth')
      .then(response => {
        const email = response.data.email;
        const name = response.data.name;
        const id = response.data._id;
        const userInfo = { email, name, id }
        dispatch(SetUser(userInfo));
      })
}

export const { SetUser, logOut, logCheck } = user.actions;
export default user;