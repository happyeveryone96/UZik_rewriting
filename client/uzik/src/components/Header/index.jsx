// LIBRARY
import React from 'react';

// AXIOS
import axios from 'axios';

// ROUTE
import { useNavigate } from 'react-router-dom';

// ELEMENTS
import Button from '../../elements/Button';

import { delToken } from '../../shared/token'

// STYLE
import './index.scss'

const Header = () => {
  const navigate = useNavigate();

  const onClickHandler = () => {
    axios.get('/api/user/logout')
    .then(response => {
      if (response.data.success) {
        console.log(response.data.success)
        // delToken();
        // navigate('/login');
      } else {
        alert('로그아웃 하는데 실패했습니다.')
      }
    })
  }

  return (
    <>
    <div className="header">
    <Button
      width='100px'
      height='60px'
      margin='30px 100px'
      background='#f5f6fa' 
      color='black'
      borderRadius='10px'
      clickEvent={()=>navigate(0)}
      >
    새로고침
    </Button>
    <div className="name">우리들의 직업</div>
    <Button
      width='100px'
      height='60px'
      margin='30px 100px'
      padding='30px'
      background='#f5f6fa' 
      color='black'
      borderRadius='10px'
      clickEvent={onClickHandler}
      >
    로그아웃
    </Button>
    </div>
    </>
  )
}

export default Header;