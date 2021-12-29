const delToken = () => {
  document.cookie = 'x_auth=; expires=Thu, 18 Dec 2013 12:00:00 GMT';
};

export { delToken };