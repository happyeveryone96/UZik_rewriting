const getToken = () => {
  const value = `; ${document.cookie}`;
  const parts = value.split('; Authorization=');
  return parts.pop()!.split(';').shift()!;
};

const setToken = (token: string): void => {
  document.cookie = `Authorization=${token}`;
};

const delToken = () => {
  document.cookie = 'x_auth=; expires=Thu, 18 Dec 2013 12:00:00 GMT';
};

export { getToken, setToken, delToken };