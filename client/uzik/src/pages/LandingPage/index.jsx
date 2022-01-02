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
import { getPostDB } from '../../redux/modules/post';

// STYLE
import './index.scss';

function LandingPage() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.post.list);
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

  useEffect(() => {
   dispatch(getPostDB());
  },[]);

  return (
    <div>
      <Header/>
      <div className="App-job">
        <div className="App-job-first">
        <JobCard props={firstJob} />
        </div>
        <div className="App-job-second">
        <JobCard props={secondJob} />
        </div>
        <div className="App-job-third">
        <JobCard props={thirdJob} />
        </div>
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
      <div className='App-content-header'>
        <div className='App-content-header-job'>직업명</div>
        <div className='App-content-header-title'>제목</div>
        <div className='App-content-header-content'>내용</div>
      </div>
      {posts && posts.length > 0 ? (
          posts.map((post, idx) => {
            return (
              <div style={{ width: "100%" }} key={idx}>
                <JobPost post={post} />
              </div>
            );
          })
        ) : (
          <></>
        )}
    </div>
  )
}

export default LandingPage;
