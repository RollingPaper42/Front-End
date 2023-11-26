import { axiosInstance } from '@/utils/axios';
import { useEffect } from 'react';
import useModal from './useModal';
import Error from '@/component/Modal/Error';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';

export const useInterceptor = () => {
  const [openModal, closeModal] = useModal();
  const responseHandler = (response: AxiosResponse<any, any>) => {
    return response;
  };
  const requestHandler = async (config: InternalAxiosRequestConfig<any>) => {
    config.withCredentials = true;
    config.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const accessToken = localStorage.getItem('strcat_token');
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  };

  const errorHandler = (errorStatus: number) => {
    if (errorStatus === 401 || errorStatus === 500) {
      openModal(
        <Error content="400 & 500 에러 발생 " handleModalClose={closeModal} />,
      );
    }
  };

  const requestInterceptor =
    axiosInstance.interceptors.request.use(requestHandler);
  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => errorHandler(error.response.status),
  );

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);
};
