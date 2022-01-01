// LIBRARY
import React from 'react';
import { useSelector } from 'react-redux';

// ELEMENTS
import { TextArea } from '../../elements/index';
import { Button } from '../../elements/index';

// COMPONENTS
import Header from '../../components/Header';

// STYLE
import { css } from "styled-components";
import './index.scss';

// REDUX
import { history } from "../../redux/configureStore";

// AXIOS
import Axios from 'axios';

function WritePage() {
  const user = useSelector(state => state.user);
  console.log(user);
  const [job, setJob] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");

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
      writer: user.user_info._id,
      job: job,
      title: title,
      contents: contents,
    }
    Axios.post('http://localhost:8080/api/post/create', post)
      .then((response) => {
        if (response.data.success) {
          console.log(post);
          // alert('글 작성 완료!');
          // setTimeout(() => {
          //   history.push('/');
          // },1000)
        } else {
          console.log(response);
          alert('글 작성 실패!')
        }
      })
  }
  return (
    <div className='write-page'>
      <Header/>
      <div className='write-page-title'>
       커뮤니티 글 등록
      </div>
      <TextArea
        is_auto='is_auto'
        onChange={$job}
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
          작성하기
        </Button>
        <Button
          width='48%'
          background='#718093'
          color='white'
          borderRadius="10px"
          clickEvent={() => history.push('/')}>
          취소하기
        </Button>
      </div>
    </div>
  )
}

export default WritePage
