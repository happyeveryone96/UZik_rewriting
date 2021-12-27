import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { signUpDB } from '../../redux/modules/UserModule/user';

function RegisterPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [Name, setName] = useState('');
  const [ConfirmPassword, setConfirmPassword] = useState('');

  const onEmailHanlder = (event:any) => {
    setEmail(event.target.value);
  }
  const onNameHandler = (event:any) => {
    setName(event.target.value);
  }
  const onPasswordHandler = (event:any) => {
    setPassword(event.target.value);
  }
  const onConfirmPasswordHandler = (event:any) => {
    setConfirmPassword(event.target.value);
  }
  const onSubmitHandler = (event:any) => {
    event.preventDefault();

    if (Password !== ConfirmPassword) {
      return alert('비밀번호와 비밀번화 확인은 같아야 합니다.')
    }
    let body = {
      email: Email,
      password: Password,
      name: Name
    }
    dispatch(signUpDB(body))
    // dispatch(registerUser(body))
    // .then(response => {
    //   if (response.payload.success) {
    //     navigate('/login');
    //   } else {
    //     alert('Failed to sign up');
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
            <label>Name</label>
            <input type="text" value={Name} onChange={onNameHandler} />
            <label>Password</label>
            <input type="password" value={Password} onChange={onPasswordHandler} />
            <label>Confirm Password</label>
            <input type="password" value={ConfirmPassword} onChange={onConfirmPasswordHandler} />
            <br/>
            <button>회원가입</button>
          </form>
    </div>
  )
}

export default RegisterPage