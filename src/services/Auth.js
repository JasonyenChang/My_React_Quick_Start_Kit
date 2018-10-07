export const logout = () => {
  sessionStorage.clear();
};

export const isAuthenticated = () => {
  if (sessionStorage.getItem('AccessToken') === null) {
    return false;
  }
  return true;
};
