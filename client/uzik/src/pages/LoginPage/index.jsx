import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../../redux/modules/user.ts';
import Button from '../../elements/Button';
import Input from '../../elements/Input';

// REDUX
import { history } from '../../redux/configureStore';

function LoginPage() {
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHanlder = (event) => {
    setEmail(event.target.value);
  }
  const onPasswordHandler = (event) => {
    setPassword(event.target.value);
  }
  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      email: Email,
      password: Password
    }
    dispatch(loginUser(body))
  }

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        background:'#718093',
        width: '100%',
        height: '100vh'}}>
          <form style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={onSubmitHandler}>
            <label>Email</label>
            <Input type='email' value={Email} onChange={onEmailHanlder}/>
            <label>Password</label>
            <Input type="password" value={Password} onChange={onPasswordHandler} autoComplete="on"/>
            <br/>
            <Button 
              fontSize='20px' 
              background='#f5f6fa' 
              color='black'>로그인
            </Button>
            <br/>
            <Button 
              fontSize={'20px'} 
              background={'#f5f6fa'} 
              color={'black'}
              clickEvent={()=>history.push('/register')}>회원가입
            </Button>
          </form>
    </div>
  )
}

export default LoginPage
