import './App.css';
import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import LandingPage from './components/LandingPage/LandingPage';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import Auth from './hoc/auth';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={Auth(LandingPage, true)}/>
        <Route exact path="/login" element={Auth(LoginPage, false)}/>
        <Route exact path="/register" element={Auth(RegisterPage, false)}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
