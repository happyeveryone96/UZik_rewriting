// LIBRARY
import React from 'react';

// STYLE
import './App.scss';

// COMPONENTS
import Header from './components/Header'
import JobCard from './components/JobCard'

function App() {
  const firstJob: string = '선생님'
  const secondJob: string = '축구선수'
  const thirdJob: string = '야구선수'
  
  return (
    <div className='App'>
      <Header/>
      <div className="App-job">
      <JobCard props={firstJob} />
      <JobCard props={secondJob} />
      <JobCard props={thirdJob} />
      </div>
    </div>
  );
}

export default App;
