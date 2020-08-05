import axios from 'axios';
import env from 'utils/env';

class GoogleAnalyticsService {
  get headers() {
    const h = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };
    return h;
  }

  get = (url, params) => {
    const options = {
      url: `${env.API_URL}${url}`,
      method: 'get',
      headers: { ...this.headers },
      params
    };
    return axios(options);
  }

  post = (url, header, data) => {
    const options = {
      url: `${url}`,
      method: 'post',
      headers: {
        ...this.headers,
        Authorization: `Bearer ${header.AccessToken}`
      },
      data
    };
    return axios(options);
  }
}

const googleAnalyticsService = new GoogleAnalyticsService();
export default googleAnalyticsService;
