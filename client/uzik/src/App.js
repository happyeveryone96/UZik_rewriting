import './App.scss';
import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Auth from './hoc/auth';

const App = () =>{
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, true)}/>
        <Route exact path="/login" component={Auth(LoginPage, false)}/>
        <Route exact path="/register" component={Auth(RegisterPage, false)}/>
      </Switch>
    </div>
  );
}

export default App;
