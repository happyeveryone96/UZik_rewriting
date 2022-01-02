import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  list: [],
  postDetail: [],
};

const post = createSlice({
  name: 'post',
  initialState,
  reducers: {
    addPost: (state, action) => {
      const writer = action.payload.writer;
      const job = action.payload.job;
      const title = action.payload.title;
      const contents = action.payload.contents;
      state.list.push(writer, job, title, contents);
      state.is_login = true;
    },
    getPost: (state, action) => {
      state.list = action.payload;
    },
    getOnePost: (state, action) => {
      state.postDetail = action.payload;
    },
  },
});

export const addPostDB = (post) => {
  return function (dispatch, getState, { history }) {
    axios.post('/api/post/create', post)
    .then((response) => {
      if (response.data.success) {
        alert('글 작성 완료!');
        setTimeout(() => {
          history.push('/');
        },1000)
      } else {
        alert('글 작성 실패!')
      }
    })
  }
};

export const getPostDB = () => {
  return function (dispatch, getState, { history }) {
    axios.get('/api/post/getPosts')
    .then((response) => {
      if (response.data.success) {
        const posts = response.data.posts
        dispatch(getPost(posts))
      } else {
        alert('게시물 가져오기 실패!')
      }
    })
  }
};

export const getPostDetailDB = (variable) => {
  return function (dispatch, getState, { history }) {
    axios.post('/api/post/getPostDetail', variable)
    .then((response) => {
      if (response.data.success) {
        const postDetail = response.data.postDetail;
        dispatch(getOnePost(postDetail));
      } else {
        alert('게시물 가져오기 실패!')
      }
    })
  }
};

export const deletePostDB = (variable) => {
  return function (dispatch, getState, { history }) {
    axios.post('/api/post/delete', variable)
    .then((response) => {
      if (response.data.success) {
        history.push('/');
      } else {
        alert('게시물 가져오기 실패!')
      }
    })
  }
};

export const { addPost, getPost, getOnePost } = post.actions;
export default post;