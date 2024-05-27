import { axiosInstance } from './axios';

export const axiosGetBoard = (id: string) => {
  return axiosInstance.get(`/boards/${id}`);
};

export const axiosGetPublicBoard = () => {
  return axiosInstance.get(`/boards/public`);
};

export const axiosGetBoardSummaries = (id: string) => {
  return axiosInstance.get(`/boards/${id}/summaries`);
};

export const axiosGetUserBoard = () => {
  return axiosInstance.get(`/users/boards`);
};

export const axiosGetLoginCheck = () => {
  return axiosInstance.get(`/login/check`);
};

export const axiosGetUserHistory = () => {
  return axiosInstance.get('/users/history');
};

export const axiosPostBoard = (requestData: any) => {
  return axiosInstance.post('/boards', requestData);
};

export const axiosPostBoardContent = (id: string, requestData: any) => {
  return axiosInstance.post(`/boards/${id}/contents`, requestData);
};

export const axiosPostBoardContentPicture = (id: string, requestData: any) => {
  return axiosInstance.post(`/boards/${id}/contents/pictures`, requestData);
};

export const axiosPostUserHistory = (requestData: any) => {
  return axiosInstance.post('/users/history', requestData);
};

export const axoisDeleteContents = (id: string, requestData: any) => {
  return axiosInstance.delete(`boards/${id}/contents`, requestData);
};
