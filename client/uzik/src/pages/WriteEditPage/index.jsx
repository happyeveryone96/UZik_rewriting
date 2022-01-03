// LIBRARY
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// ELEMENTS
import { TextArea } from '../../elements/index';
import { Button } from '../../elements/index';

// COMPONENTS
import Header from '../../components/Header';

// STYLE
import { css } from "styled-components";
import './index.scss';

// ROUTE
import { useLocation } from 'react-router-dom';

// REDUX
import { history } from "../../redux/configureStore";
import { addPostDB, getPostDetailDB, editPostDB } from '../../redux/modules/post';

function WriteEditPage() {
  const dispatch = useDispatch();
  const path = useLocation();
  const editCheck = path.pathname?.split('/')[1] === 'edit';
  const postId = path.pathname?.split('/')[2];
  const user = useSelector(state => state.user);
  const post = useSelector(state => state.post?.postDetail);
  const preJob = post?.job;
  const preTitle = post?.title;
  const preContents = post?.contents;
  const [job, setJob] = useState(editCheck ? preJob : '');
  const [title, setTitle] = useState(editCheck ? preTitle : '');
  const [contents, setContents] = useState(editCheck ? preContents : '');
  const name = user.user_info.name;

  const $job = (e) => {
    setJob(e.target.value);
  };
  const $title = (e) => {
    setTitle(e.target.value);
  };
  const $contents = (e) => {
    setContents(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    const post = {
      postId: postId,
      writer: user.user_info.id,
      job: job,
      title: title,
      contents: contents,
      name: name,
    }
    if (editCheck) {
      dispatch(editPostDB(post));
    } else {
      dispatch(addPostDB(post));
    }
  }

  useEffect(() => {
    dispatch(getPostDetailDB(postId));
  },[dispatch]);

  return (
    <div className='write-page'>
      <Header/>
      <div className='write-page-title'>
       커뮤니티 글 등록
      </div>
      <TextArea
        is_auto='is_auto'
        onChange={$job}
        value={job}
        placeholder="직업을 입력해주세요."
        padding=" 7px 10px"
        width="30vw"
        bgColor="white"
        addstyle={() => {
          return css`
            resize: none;
            min-width: 300px;
            margin: 10px auto;
            display: flex;
            justify-content: center;
          `;
        }}
      />
      <TextArea
        is_auto='is_auto'
        onChange={$title}
        value={title}
        placeholder="제목을 입력해주세요."
        padding=" 7px 10px"
        width="30vw"
        bgColor="white"
        addstyle={() => {
          return css`
            resize: none;
            min-width: 300px;
            margin: 10px auto;
            display: flex;
            justify-content: center;
          `;
        }}
      />
      <TextArea
        onChange={$contents}
        value={contents}
        placeholder="내용을 입력해주세요."
        padding=" 7px 10px"
        width="30vw"
        height="300px"
        bgColor="white"
        addstyle={() => {
          return css`
            resize: none;
            min-width: 300px;
            margin: 10px auto;
            display: flex;
            justify-content: center;
          `;
        }}
      />
      <div className='write-page-button'>
        <Button 
          width='48%'
          background='#718093'
          color='white' 
          borderRadius="10px"
          clickEvent={onSubmit}>
            {editCheck ? '수정하기' : '작성하기'}
        </Button>
        <Button
          width='48%'
          background='#718093'
          color='white'
          borderRadius="10px"
          clickEvent={() => history.goBack()}>
          취소하기
        </Button>
      </div>
    </div>
  )
}

export default WriteEditPage;
