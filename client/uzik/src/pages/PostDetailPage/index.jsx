// LIBRARY
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ROUTE
import { useLocation } from 'react-router-dom';

// COMPOENTS
import Header from '../../components/Header';

// ELEMENTS
import Button from '../../elements/Button';

// STYLE
import './index.scss';
import { css } from "styled-components";

// REDUX
import { getPostDetailDB, deletePostDB } from '../../redux/modules/post';

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
  const user = useSelector((state) => state.user);
  const userCheck = user.user_info.name === name;

  const deletePost = () => {
    if (window.confirm('정말 삭제하시겠습니까?')) {
      dispatch(deletePostDB(variable));
    }
  };
  
  useEffect(() => {
    dispatch(getPostDetailDB(variable));
  },[dispatch]);

  return (
    <div>
      <Header/>

      <div className="post">
      {userCheck &&
        <Button 
          width='30px'
          height='30px'
          color='white'
          background='#718093'
          addstyle={() => {
            return css`
              border-radius: 10px 0 0 0;
            `;
          }}
          onClick={deletePost}>
            삭제
        </Button>
      }
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