import httpServices from './HttpServiceAxios';

export const getUsers = () => httpServices.get('api/getUsers', {});
// export const getUsers = () => [1, 2, 3];
