// LIBRARY
import React, { useEffect } from 'react';

// COMPONENTS
import JobCard from '../../components/JobCard';
import JobPost from '../../components/JobPost';
import Header from '../../components/Header';

// ELEMENTS
import { Button } from '../../elements/index';

// REDUX
import { useDispatch, useSelector } from 'react-redux';
import { getAllJobsApi } from '../../redux/modules/job'
import { history } from "../../redux/configureStore";

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
    console.log(document.cookie);
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
      <Button
        color='white'
        width='100px' 
        height='30px' 
        background='#718093'
        margin='10px 80px'
        borderRadius='10px'
        clickEvent={() => history.push('/write')}>
        글쓰기
      </Button>
      <JobPost/>
      <JobPost/>
      <JobPost/>
      <JobPost/>
      <JobPost/>
      <JobPost/>
      <JobPost/>
      <JobPost/>
      <JobPost/>
      <JobPost/>
      <JobPost/>
      <JobPost/>
    </div>
  )
}

export default LandingPage;
