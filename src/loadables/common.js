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
