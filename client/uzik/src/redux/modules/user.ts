import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import { delToken } from '../../shared/token';
import { SignUpType, SignInType } from '../../shared/ApiTypes';
import apis from '../../shared/api';
import { history } from '../configureStore.js';

const initialState = {
  user_info: { email: '', id: '', name: ''},
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
      state.user_info.name = action.payload.name;
      state.is_login = true;
    },
  },
});

export const loginUser = (user: SignInType) => {
  return function () {
    apis
      .SignIn(user)
      .then(({ data }: any) => {
        if (data.loginSuccess === true) {
          history.push('/')
        } else {
          alert('로그인 실패!')
        }
      })
  };
};

export const registerUser = (user: SignUpType) => async () => {
  try {
    await apis.SignUp(user);
    window.alert('회원가입이 완료되었습니다!');
    history.push('/');
  } catch (err: any) {
    window.alert('이미 존재하는 아이디입니다.');
  }
};

export const auth = () => 
  async (dispatch:any) => {
    const request = axios.get('/api/user/auth')
      .then(response => {
        const email = response.data.email;
        const name = response.data.name;
        const id = response.data._id;
        const userInfo = { email, name, id }
        dispatch(SetUser(userInfo));
      })
}

export const logoutUser = () => {
  return function () {
    apis
      .LogOut()
      .then(({ data }: any) => {
        if (!data.isAuth) {
          delToken();
          history.push('/login')
        } else {
          alert('로그아웃 하는데 실패했습니다.')
        }
      })
  };
};

export const { SetUser, logOut, logCheck } = user.actions;
export default user;