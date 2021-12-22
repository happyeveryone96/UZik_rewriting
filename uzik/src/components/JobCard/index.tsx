// LIBRARY
import React, { useState, useEffect } from 'react';

// STYLE
import './index.scss'

// COMPONENTS
import Spinner from "../Spinner";

const JobCard = (props: any): React.ReactElement => {
  const jobName: string = props.props ? props.props : '로딩중';
  const [isLoaded, setIsLoaded] = useState(true);

  useEffect(() => {
    if (jobName !== '로딩중') {
      setIsLoaded(false);
    }
  },[jobName])

  return (
    <Spinner visible={isLoaded}>
      <div className="job">
        <div className="job-name">{jobName}</div>
        <a href={`https://search.naver.com/search.naver?query=+${jobName}`} target="_blank" className="job-naver job-search">네이버</a>
        <a href={`https://search.daum.net/search?q=${jobName}`} target="_blank" className="job-daum job-search">다음</a>
        <a href={`https://www.google.com/search?q=${jobName}`} target="_blank" className="job-google job-search">구글</a>
        <a href={`https://www.youtube.com/results?search_query=${jobName}`} target="_blank" className="job-youtube job-search">유튜브</a>
        <a href={`https://www.work.go.kr/wnSearch/unifSrch.do?topQuery=${jobName}`} target="_blank" className="job-worknet job-search">워크넷</a>
      </div>
    </Spinner>
  )
}

export default JobCard;