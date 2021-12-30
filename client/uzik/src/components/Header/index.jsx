// LIBRARY
import React from 'react';

// AXIOS
import axios from 'axios';

// REDUX
import { history } from '../../redux/configureStore';

// ELEMENTS
import Button from '../../elements/Button';

// TOKEN
import { delToken } from '../../shared/token';

// ROUTE
import { useLocation } from "react-router-dom";

// STYLE
import { css } from "styled-components";
import './index.scss'

const Header = () => {
  const path = useLocation().pathname;
  const onClickHandler = () => {
    axios.get('/api/user/logout')
    .then(response => {
      if (!response.data.isAuth) {
        delToken();
        history.push('/login')
      } else {
        alert('로그아웃 하는데 실패했습니다.')
      }
    })
  }

  return (
    <div className="all">
      <div className="header">
      {path === '/' ? (
        <Button
          width='100px'
          height='60px'
          margin='30px 100px'
          background='#f5f6fa' 
          color='black'
          borderRadius='10px'
          clickEvent={()=>history.push(0)}
          addstyle={() => {
            return css`
              position: relative;
              left: 100px;
            `;
          }}
          >
        새로고침
        </Button>
      ) : (
        <Button
          width='100px'
          height='60px'
          margin='30px 100px'
          background='#f5f6fa' 
          color='black'
          borderRadius='10px'
          clickEvent={()=>history.goBack()}
          addstyle={() => {
            return css`
              position: relative;
              left: 100px;
            `;
          }}
          >
        뒤로가기
        </Button>
      )}
      <div className="header-name">우리들의 직업</div>
      <Button
        width='100px'
        height='60px'
        margin='30px 100px'
        background='#f5f6fa' 
        color='black'
        borderRadius='10px'
        clickEvent={onClickHandler}
        addstyle={() => {
          return css`
            position: relative;
            right: 100px;
          `;
        }}
        >
      로그아웃
      </Button>
      </div>
    </div>
  )
}

export default Header;