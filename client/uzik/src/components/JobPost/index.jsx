// LIBRARY
import React, { useState, useEffect } from 'react';

// STYLE
import './index.scss';

// REDUX
import { history } from "../../redux/configureStore";

const JobPost = (post) => {
  const job = post.post.job;
  const title = post.post.title;
  const contents = post.post.contents;
  const id = post.post._id;
  return (
      <div className="job-post" onClick={()=>history.push(`/detail/${id}`)}>
        <div className="job-post-name">
          {job}
        </div>
        <div className="job-post-title">
          {title}
        </div>
        <div className="job-post-content">
          {contents}
        </div>
      </div>
  )
}

export default JobPost;