// AXIOS
import axios from 'axios';

const WORKNET_KEY = process.env.REACT_APP_WORKNET_API_KEY;

export const getAllJobsApi = async() => {
  await axios.get(`opi/opi/opia/jobSrch.do?authKey=${WORKNET_KEY}&returnType=XML&target=JOBCD`)
  .then((res) => {
    let xmlDoc = new DOMParser().parseFromString(res.data, 'text/xml');
    let jobList = xmlDoc.getElementsByTagName('jobList');
    const allJobList: Array<string | null> = []
    for (let i = 0; i < jobList.length; i++) {
      allJobList.push(jobList[i].childNodes[3].textContent);
    }
  });
}
