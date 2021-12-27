
import serialize from 'serialize-javascript';

interface UserInfo {
  name: string;
}

const setUserInfo = (key: string, userInfo: UserInfo): void => {
  localStorage.setItem(key, serialize(userInfo, { isJSON: true }));
};

const getUserInfo = (key: string): any => {
  const userInfo = localStorage.getItem(key);

  return JSON.parse(userInfo!);
};

const delUserInfo = (key: string): void => {
  localStorage.removeItem(key);
};

export { setUserInfo, getUserInfo, delUserInfo };