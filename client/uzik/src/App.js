import './App.scss';
import React from "react";
import {
  Route,
  Switch,
} from "react-router-dom";

import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import Auth from './hoc/auth';
import WritePage from './pages/WritePage';
import PostDetailPage from './pages/PostDetailPage';

const App = () =>{
  return (
    <div className='App'>
      <Switch>
        <Route exact path="/" component={Auth(LandingPage, true)}/>
        <Route exact path="/login" component={Auth(LoginPage, false)}/>
        <Route exact path="/register" component={Auth(RegisterPage, false)}/>
        <Route exact path="/write" component={WritePage}/>
        <Route exact path="/detail/:id" component={PostDetailPage}/>
      </Switch>
    </div>
  );
}

export default App;
