import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { SignInDB } from '../../redux/modules/UserModule/user';
// import { loginUser } from '../../../_actions/user_action';

function LoginPage(): React.ReactElement {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');

  const onEmailHanlder = (event:any) => {
    setEmail(event.target.value);
  }
  const onPasswordHandler = (event:any) => {
    setPassword(event.target.value);
  }
  const onSubmitHandler = (event:any) => {
    event.preventDefault();

    let userInfo = {
      email: Email,
      password: Password
    }
    dispatch(SignInDB(userInfo))
    // dispatch(loginUser(body))
    // .then(response => {
    //   if (response.payload.loginSuccess) {
    //     navigate('/')
    //   } else {
    //     alert('Error');
    //   }
    // })
  }

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        height: '100vh'}}>
          <form style={{ display: 'flex', flexDirection: 'column' }}
            onSubmit={onSubmitHandler}>
            <label>Email</label>
            <input type="email" value={Email} onChange={onEmailHanlder} />
            <label>Password</label>
            <input type="password" value={Password} onChange={onPasswordHandler} autoComplete="on"/>
            <br/>
            <button>로그인</button>
            <br/>
            <button onClick={()=>navigate('/register')}>회원가입</button>
          </form>
    </div>
  )
}

export default LoginPage