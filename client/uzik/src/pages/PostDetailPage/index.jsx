// LIBRARY
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ROUTE
import { useLocation } from 'react-router-dom';

// COMPOENTS
import Header from '../../components/Header'

// STYLE
import './index.scss';

// REDUX
import { getPostDetailDB } from '../../redux/modules/post';

const PostDetailPage = () => {
  const dispatch = useDispatch();
  const path = useLocation();
  const postId = path.pathname.split('/')[2]
  const variable = { postId: postId } 
  const post = useSelector((state) => state.post);
  const contents = post.postDetail.contents;
  const job = post.postDetail.job;
  const title = post.postDetail.title;
  const name = post.postDetail.name;
  useEffect(() => {
    dispatch(getPostDetailDB(variable));
  },[dispatch]);
  console.log(post);

  return (
    <div>
      <Header/>
      <div className="post">
        <div className="post-name">
          <p className="post-text">
            작성자 : {name}
          </p>
        </div>
        <div className="post-job">
          <p className="post-text">
            직업명 : {job}
          </p>
        </div>
        <div className="post-title">
          <p className="post-text">
            제목 : {title}
          </p>
        </div>
        <div className="post-content">
          <p className="post-text">
            내용 : {contents}
          </p>
        </div>
      </div>
    </div>
  )
}

export default PostDetailPage;