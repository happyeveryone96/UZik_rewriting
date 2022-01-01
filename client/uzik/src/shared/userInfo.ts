
const setUserInfo = (key: string, isLogin: any) => {
  localStorage.setItem(key, isLogin);
};

const getUserInfo = (key: string) => {
  const isLogin = localStorage.getItem(key);

  return JSON.parse(isLogin!);
};

const delUserInfo = (key: string) => {
  localStorage.removeItem(key);
};

export { setUserInfo, getUserInfo, delUserInfo };