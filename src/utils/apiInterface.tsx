import { axiosInstance } from './axios';

export const axiosGetBoard = (id: string) => {
  return axiosInstance.get(`/boards/${id}`);
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

export const axiosPostBoard = (requestData: any) => {
  return axiosInstance.post('/boards', requestData);
};

export const axiosPostBoardContent = (id: string, requestData: any) => {
  return axiosInstance.post(`/boards/${id}/contents`, requestData);
};

export const axiosPostBoardContentPicture = (id: string, requestData: any) => {
  return axiosInstance.post(`/boards/${id}/contents/pictures`, requestData);
};
