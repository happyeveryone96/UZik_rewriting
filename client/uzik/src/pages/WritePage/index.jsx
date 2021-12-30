// LIBRARY
import React from 'react'

// ELEMENTS
import { TextArea } from '../../elements/index';
import { Button } from '../../elements/index';

// STYLE
import { css } from "styled-components";
import './index.scss';

// REDUX
import { history } from "../../redux/configureStore";
import Header from '../../components/Header';

function WritePage() {
  const [job, setJob] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [contents, setContents] = React.useState("");

  const $job = (e) => {
    setContents(e.target.value);
  };
  const $title = (e) => {
    setContents(e.target.value);
  };
  const $contents = (e) => {
    setContents(e.target.value);
  };

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
          borderRadius="10px">
          작성하기
        </Button>
        <Button
          width='48%' 
          borderRadius="10px"
          clickEvent={() => history.push('/')}>
          취소하기
        </Button>
      </div>
    </div>
  )
}

export default WritePage
