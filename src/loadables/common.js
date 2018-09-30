import Loadable from 'react-loadable';

export const LoadableLogin = Loadable({
  loader: () => import('containers/Login/Login'),
  loading() {
    return null;
  }
});

export const LoadableApp = Loadable({
  loader: () => import('containers/App'),
  loading() {
    return null;
  }
});

export const LoadableAboutMe = Loadable({
  loader: () => import('containers/About/About'),
  loading() {
    return null;
  }
});

export const LoadablePortfolio = Loadable({
  loader: () => import('containers/Portfolio/Portfolio'),
  loading() {
    return null;
  }
});
