// LIBRARY
import React from 'react';

// STYLE
import './App.scss';

// COMPONENTS
import Header from './components/Header';

// PAGES
import Home from './pages/Home';
import LoginPage from './pages/Login';
import RegisterPage from './pages/Register';


// ROUTE
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
            <Route path='/login' element={<LoginPage />}/>
            <Route path='/register' element={<RegisterPage />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
