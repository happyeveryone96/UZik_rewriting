const getToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split('; Authorization=');
  return parts.pop().split(';').shift();
};

const setToken = (token) => {
  localStorage.setItem("token", token);
  document.cookie = `Authorization=${token}`;
};

const delToken = (token) => {
    document.cookie = '';
};

const isLogin = () => getToken();

export { getToken, setToken, delToken, isLogin };