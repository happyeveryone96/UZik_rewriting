// LIBRARY
import React, { useEffect }from 'react';
import { useDispatch } from 'react-redux';

// REDUX
import { history } from '../redux/configureStore';
import { auth } from '../redux/modules/user.ts';

// ROUTE
import { useLocation } from 'react-router-dom';

export default function (SpecificComponent, option, adminRoute = null) {
  // option
  // null -> 아무나 출입이 가능한 페이지
  // true -> 로그인한 유저만 출입이 가능한 페이지
  // false -> 로그인한 유저는 출입 불가능한 페이지
  function AuthenticationCheck() {
    const path = useLocation().pathname;
    const token = document.cookie.split('x_auth=')[1];
    const dispatch = useDispatch();
    useEffect(() => {
      dispatch(auth())
      if (option && token !== undefined && path !== '/write' && path.split('/')[1] !== 'detail') {
        history.push('/');
      } else if (option && token === undefined) {
        history.push('/login');
      } else if (!option && token !== undefined) {
        history.push('/');
      }
    },[option])
    return (
      <SpecificComponent/>
    )
  }
  return AuthenticationCheck;
}