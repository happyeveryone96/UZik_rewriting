const getToken = () => {
  const value = document.cookie;
  const parts = value.split('x_auth=');
  return parts[1];
};

const delToken = () => {
  document.cookie = 'x_auth=; expires=Thu, 18 Dec 2013 12:00:00 GMT';
};

export { getToken, delToken };