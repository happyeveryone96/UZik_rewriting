// LIBRARY
import React, { useState, useEffect } from 'react';

// COMPOENTS
import Header from '../../components/Header'

// STYLE
import './index.scss';

// REDUX
import { history } from "../../redux/configureStore";

const PostDetailPage = () => {
  return (
    <div>
      <Header/>
      <div className="post">
        <div className="post-name">
          <p className="post-text">
            작성자
          </p>
        </div>
        <div className="post-job">
          <p className="post-text">
            직업명
          </p>
        </div>
        <div className="post-title">
          <p className="post-text">
            제목
          </p>
        </div>
        <div className="post-content">
          <p className="post-text">
            내용
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostDetailPage;