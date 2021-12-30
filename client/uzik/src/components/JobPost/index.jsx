// LIBRARY
import React, { useState, useEffect } from 'react';

// STYLE
import './index.scss';

// REDUX
import { history } from "../../redux/configureStore";

const JobPost = () => {
  return (
      <div className="job-post" onClick={()=>history.push('/detail/1')}>
        <div className="job-post-name">
          직업명
        </div>
        <div className="job-post-title">
          제목
        </div>
        <div className="job-post-content">
          내용 요약
        </div>
      </div>
  )
}

export default JobPost;