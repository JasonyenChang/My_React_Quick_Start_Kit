import httpServices from './HttpServiceAxios';
import googleAnalyticsService from './GoogleAnalyticsAxios';

export const getUsers = () => httpServices.get('user', {});

export const getGAData = (data) => googleAnalyticsService.post(
  'https://content-analyticsreporting.googleapis.com/v4/reports:batchGet?alt=json',
  { AccessToken: 'ya29.a0Ae4lvC3E4xpNkrrGXhGu6NSxGtfZpHb84Mnyi0lzljHsRsoKfJ--QbDX45rsH3H0VKO4CUcqa9s3nmXn-QzMwl-2mw4LrqaouEwoAkPR4yoQS6LLXiYPDZuNvUi9M2T7mNJzdYDejVol7TCIFcjtLMUr8rrbJuda8Dn4' },
  data,
);
