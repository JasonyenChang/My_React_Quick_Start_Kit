const storageEvent = (e) => {
  // console.log('#### storageEvent #### ', e.key);
  switch (e.key) {
    case 'logout':
      // do logout
      logout();
      localStorage.removeItem('logout');
      localStorage.removeItem('getSessionStorage');
      break;
    case 'getSessionStorage': {
      // send data to another page
      localStorage.setItem('sessionStorage', JSON.stringify(sessionStorage.getItem('User')));
      break;
    }
    case 'sessionStorage': {
      if (e.newValue) {
        // console.log('### session storage ###', JSON.parse(e.newValue));
        sessionStorage.setItem('User', JSON.parse(e.newValue));
        localStorage.removeItem('sessionStorage');
      }
      break;
    }
    default:
  }
};

const redirectToLogin = () => {
  if (window.location.hostname === 'localhost') {
    window.location.href = '/';
  } else {
    window.location.href = 'https://jasonyenchang.github.io/My_React_Quick_Start_Kit/#/login';
  }
};

export const logout = () => {
  window.removeEventListener('storage', storageEvent);
  localStorage.setItem('logout', 'logout');
  sessionStorage.clear();
  redirectToLogin();
};

export const pageSync = () => {
  window.addEventListener('storage', storageEvent);
  localStorage.getSessionStorage = new Date();
  setTimeout(() => {
    if (!sessionStorage.getItem('User')) {
      redirectToLogin();
    }
  }, 500);
};
