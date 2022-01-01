// LIBRARY
import React from 'react';

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
          {job.length > 8 ? job.substring(0,8)+'...' : job}
        </div>
        <div className="job-post-title">
          {title.length > 8 ? title.substring(0,8)+'...' : title}
        </div>
        <div className="job-post-content">
          {contents}
        </div>
      </div>
  )
}

export default JobPost;