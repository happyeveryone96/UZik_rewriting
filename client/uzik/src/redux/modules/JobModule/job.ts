import axios from 'axios';
import { createSlice } from '@reduxjs/toolkit';

const WORKNET_KEY = process.env.REACT_APP_WORKNET_API_KEY;

const initialState = {
  job_list: []
};

export const job = createSlice({
  name: 'job',
  initialState,
  reducers: {
    getAllJobs: (state, action) => {
      state.job_list = action.payload;
    },
  },
});

export const getAllJobsApi = () => {
  return function (dispatch: any) {
    axios.get(`opi/opi/opia/jobSrch.do?authKey=${WORKNET_KEY}&returnType=XML&target=JOBCD`)
    .then((res) => {
      let xmlDoc = new DOMParser().parseFromString(res.data, 'text/xml');
      let jobList = xmlDoc.getElementsByTagName('jobList');
      const allJobList: Array<string | null> = []
      for (let i = 0; i < jobList.length; i++) {
        allJobList.push(jobList[i].childNodes[3].textContent);
      }
      dispatch(getAllJobs(allJobList))
    });
  }
}

export const { getAllJobs } = job.actions;
export default job;