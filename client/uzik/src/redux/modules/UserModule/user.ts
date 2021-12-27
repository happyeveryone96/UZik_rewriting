import jwtDecode from 'jwt-decode';
import { SignUpType } from './../../../shared/ApiTypes';
import { createSlice } from '@reduxjs/toolkit';
import apis from '../../../shared/api';
import { setToken, delToken } from '../../../shared/token';
import { setUserInfo } from '../../../shared/userInfo';
import { history } from '../../configureStore';
import { SignInType } from '../../../shared/ApiTypes';
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
      setToken(action.payload.token);
      state.is_login = true;
    },
  },
});

export const signUpDB = (user_info: SignUpType) => async () => {
  const user = {
    email: user_info.email,
    password: user_info.password,
    name: user_info.name,
  };
  try {
    await apis.SignUp(user);
    window.alert('회원가입이 완료되었습니다!');
    history.push('/');
  } catch (err: any) {
    window.alert('이미 존재하는 아이디입니다.');
  }
};

export const SignInDB = (userInfo: SignInType) => {
  return function (dispatch: any) {
    apis
      .SignIn(userInfo)
      .then(({ data }: any) => {
        dispatch(SetUser(data.username));
        setToken(data.token);
        setUserInfo('userInfo', jwtDecode(data.token));
        history.push('/');
      })
      .catch((err) => {
        window.alert(
          '존재하지 않는 아이디거나 아이디 혹은 비밀번호가 일치하지 않습니다.'
        );
      });
  };
};

export const { SetUser, logOut, logCheck } = user.actions;

export default user;