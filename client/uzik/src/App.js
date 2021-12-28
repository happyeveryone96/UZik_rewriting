import './App.scss';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Router,
} from "react-router-dom";

import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';
import RegisterPage from './components/RegisterPage';
import Auth from './hoc/auth';

function App() {
  return (
    <BrowserRouter>
    <div className='App'>
        <Routes>
          <Route exact path="/" element={Auth(LandingPage, true)}/>
          <Route exact path="/login" element={Auth(LoginPage, false)}/>
          <Route exact path="/register" element={Auth(RegisterPage, false)}/>
        </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
