import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useEffect } from 'react';

import { useRouter } from 'next/navigation';

import useModal from './useModal';
import Introduce from '@/component/Common/Modal/Introduce';
import { axiosInstance } from '@/utils/axios';

export const useInterceptor = () => {
  const route = useRouter();
  const [openModal, closeModal] = useModal();
  const responseHandler = (response: AxiosResponse<any, any>) => {
    return response;
  };
  const requestHandler = async (config: InternalAxiosRequestConfig<any>) => {
    config.withCredentials = true;
    config.baseURL = process.env.NEXT_PUBLIC_BACKEND_URL;
    const accessToken = localStorage.getItem('strcat_token');
    config.headers.Authorization = `Bearer ${
      accessToken === null ? '' : accessToken
    }`;
    return config;
  };

  const errorHandler = (errorStatus: number) => {
    if (errorStatus === 500) {
      openModal(
        <Introduce
          mainContent="일시적으로 문제가 발생했어요 🥲"
          subContent="잠시 후 다시 시도해주세요."
          handleModalClose={closeModal}
        />,
      );
    }
  };

  const requestInterceptor =
    axiosInstance.interceptors.request.use(requestHandler);
  const responseInterceptor = axiosInstance.interceptors.response.use(
    (response) => responseHandler(response),
    (error) => {
      errorHandler(error.response.status);
      return Promise.reject(error);
    },
  );

  useEffect(() => {
    return () => {
      axiosInstance.interceptors.request.eject(requestInterceptor);
      axiosInstance.interceptors.response.eject(responseInterceptor);
    };
  }, [responseInterceptor, requestInterceptor]);
};
