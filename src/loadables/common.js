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

export const LoadableBadge = Loadable({
  loader: () => import('containers/Portfolio/Badge/Badge'),
  loading() {
    return null;
  }
});

export const LoadableCard = Loadable({
  loader: () => import('containers/Portfolio/Card/Card'),
  loading() {
    return null;
  }
});

export const LoadableRing = Loadable({
  loader: () => import('containers/Portfolio/Ring/Ring'),
  loading() {
    return null;
  }
});

export const LoadableMixChart = Loadable({
  loader: () => import('containers/Portfolio/MixChart/MixChart'),
  loading() {
    return null;
  }
});

export const LoadableAnalytics = Loadable({
  loader: () => import('containers/Analytics/Analytics'),
  loading() {
    return null;
  }
});
