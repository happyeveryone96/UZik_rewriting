// LIBRARY
import React, { useEffect } from 'react';

// AXIOS
import axios from 'axios';

// COMPONENTS
import JobCard from '../../components/JobCard';

// REDUX
import { useDispatch, useSelector } from 'react-redux';

// API
import { getAllJobsApi } from '../../redux/modules/JobModule/job';
import { RootState } from '../../redux/configureStore';

const Home = (): React.ReactElement => {
  const dispatch = useDispatch()
  useEffect(() => {
    axios.get('http://13.125.2.115:8080/api/hello')
    .then(res => console.log(res.data));
  }, [])
  axios.interceptors.request.use((config) => {
    config.headers!['Content-Type'] = 'application/json; charset=utf-8';
    config.headers!['X-Requested-With'] = 'XMLHttpRequest';
    config.headers!.Accept = 'application/json';
    config.headers!['Access-Control-Allow-Origin'] = '*';
    return config;
  });
  const allJobs = useSelector((state: RootState) => state.job.job_list);
  const regex = /[^0-9]/g;
  const newAllJobs = allJobs.filter(job => regex.test(job) === true);
  let randomIndexArray = [];

  for (let i=0; i<3; i++) {
    const randomNum = Math.floor(Math.random() * 328);
    if (randomIndexArray.indexOf(randomNum) === -1) {
      randomIndexArray.push(randomNum)
    }
  }

  const firstJob: string = newAllJobs[randomIndexArray[0]];
  const secondJob: string = newAllJobs[randomIndexArray[1]];
  const thirdJob: string = newAllJobs[randomIndexArray[2]];

  useEffect(() => {
    dispatch(getAllJobsApi());
  },[dispatch]);
  
  return (
    <div className="App-job">
      <JobCard props={firstJob} />
      <JobCard props={secondJob} />
      <JobCard props={thirdJob} />
    </div>
  )
}

export default Home;