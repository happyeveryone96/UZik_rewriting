
import serialize from 'serialize-javascript';

const setUserInfo = (key, userInfo) => {
  localStorage.setItem(key, userInfo);
};

const getUserInfo = (key) => {
  const userInfo = localStorage.getItem(key);

  return JSON.parse(userInfo);
};

const delUserInfo = (key) => {
  localStorage.removeItem(key);
};

export { setUserInfo, getUserInfo, delUserInfo };