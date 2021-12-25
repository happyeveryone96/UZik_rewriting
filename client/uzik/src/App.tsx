// LIBRARY
import React from 'react';

// STYLE
import './App.scss';

// COMPONENTS
import Header from './components/Header'

// PAGES
import Home from './pages/Home';

// ROUTE
import { BrowserRouter, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header/>
          <Routes>
            <Route path='/' element={<Home />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
