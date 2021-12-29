// LIBRARY
import React, { useEffect } from 'react';

// AXIOS
import axios from 'axios';

// COMPONENTS
import JobCard from '../../components/JobCard';
import Header from '../../components/Header';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobsApi } from '../../redux/modules/job'

function LandingPage() {
  const dispatch = useDispatch()

  const allJobs = useSelector((state) => state.job.job_list);
  const regex = /[^0-9]/g;
  const newAllJobs = allJobs.filter(job => regex.test(job) === true);
  let randomIndexArray = [];

  for (let i=0; i<3; i++) {
    const randomNum = Math.floor(Math.random() * 328);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum)
    }
  }

  const firstJob = newAllJobs[randomIndexArray[0]];
  const secondJob = newAllJobs[randomIndexArray[1]];
  const thirdJob = newAllJobs[randomIndexArray[2]];

  useEffect(() => {
    dispatch(getAllJobsApi());
  },[dispatch]);

  return (
    <div>
      <Header/>
      <div className="App-job">
        <JobCard props={firstJob} />
        <JobCard props={secondJob} />
        <JobCard props={thirdJob} />
      </div>
    </div>
  )
}

export default LandingPage;
