// LIBRARY
import React, { useEffect } from 'react';

// AXIOS
import axios from 'axios';

// ROUTE
import { useNavigate } from 'react-router-dom';

// COMPONENTS
import JobCard from '../../components/JobCard';

// REDUX
import { useDispatch, useSelector } from 'react-redux';

function LandingPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch()

  // const allJobs = useSelector((state: RootState) => state.job.job_list);
  // const regex = /[^0-9]/g;
  // const newAllJobs = allJobs.filter(job => regex.test(job) === true);
  // let randomIndexArray = [];

  // for (let i=0; i<3; i++) {
  //   const randomNum = Math.floor(Math.random() * 328);
  //   if (randomIndexArray.indexOf(randomNum) === -1) {
  //     randomIndexArray.push(randomNum)
  //   }
  // }

  // const firstJob: string = newAllJobs[randomIndexArray[0]];
  // const secondJob: string = newAllJobs[randomIndexArray[1]];
  // const thirdJob: string = newAllJobs[randomIndexArray[2]];

  // useEffect(() => {
  //   dispatch(getAllJobsApi());
  // },[dispatch]);
  const firstJob = '축구선수';
  const secondJob = '축구선수';
  const thirdJob = '축구선수';


  useEffect(() => {
    axios.get('/api/hello')
    .then(res => console.log(res.data));
  }, [])

  const onClickHandler = () => {
    axios.get('/api/user/logout')
    .then(response => {
      if (response.data.success) {
        navigate('/login');
      } else {
        alert('로그아웃 하는데 실패했습니다.')
      }
    })
  }

  return (
    <div 
      style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center',
        width: '100%',
        height: '100vh'}}>
      <h2>시작 페이지</h2>
      <div className="App-job">
        <JobCard props={firstJob} />
        <JobCard props={secondJob} />
        <JobCard props={thirdJob} />
      </div>
      <button onClick={onClickHandler}>
        로그아웃
      </button>
    </div>
  )
}

export default LandingPage
