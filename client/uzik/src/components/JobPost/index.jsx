// LIBRARY
import React, { useState, useEffect } from 'react';

// STYLE
import './index.scss'

const JobPost = () => {
  return (
      <div className="job-post">
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