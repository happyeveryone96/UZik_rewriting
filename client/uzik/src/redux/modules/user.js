// import jwtDecode from 'jwt-decode';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { delToken } from '../../shared/token.tsx';

const initialState = {
  user_info: { email: '' },
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
      state.user_info.email = action.payload;
      state.is_login = true;
    },
  },
});

export const loginUser = (body) => 
  async (dispatch, getState, { history }) => {
  const request = axios.post('/api/user/login', body)
    .then(response => {
      if (response.data.loginSuccess === true) {
        history.push('/')
      } else {
        alert('Error');
      }})
}

export const registerUser = (body) => 
  async (dispatch, getState, { history }) => {
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
  async (dispatch, getState, { history }) => {
    const request = axios.get('/api/user/auth')
      .then(response => {
        const email = response.data.email;
        dispatch(SetUser(email))
      })
}

export const { SetUser, logOut, logCheck } = user.actions;
export default user;