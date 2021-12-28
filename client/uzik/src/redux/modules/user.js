// import jwtDecode from 'jwt-decode';
import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { setToken, delToken } from '../../shared/token';
// import { setUserInfo } from '../../shared/userInfo';
// import { history } from '../configureStore';

const initialState = {
  user_info: { email: '' },
  is_login: false,
};

const userSlice = createSlice({
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
      setToken(action.payload.token);
      state.is_login = true;
    },
  },
});

export const loginUser = (dataTosubmit) => 
  async (dispatch, getState, { history }) => {
  const request = axios.post('/api/user/login', dataTosubmit)
    .then(response => response.data.loginSuccess)
    .then(history.push('/'));
}

export const registerUser = (dataTosubmit) => 
  async (dispatch, getState, { history }) => {
  const request = axios.post('/api/user/register', dataTosubmit)
    .then(response => console.log(response))
}

export const auth = () => 
  async (dispatch, getState, { history }) => {
  const request = axios.get('/api/user/auth')
    .then(response => response.data)
}

export const { SetUser, logOut, logCheck } = userSlice.actions;
export default userSlice;