const getToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split('; Authorization=');
  return parts.pop()!.split(';').shift()!;
};

const setToken = (token: string): void => {
  document.cookie = `Authorization=${token}`;
};

const delToken = (): void => {
  document.cookie = `Authorization=; expires=${new Date(
    '2000-02-02'
  ).toUTCString()}`;
};

const isLogin = () => !!getToken();

export { getToken, setToken, delToken, isLogin };