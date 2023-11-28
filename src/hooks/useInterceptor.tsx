import { axiosInstance } from '@/utils/axios';
import { useEffect } from 'react';
import useModal from './useModal';
import Error from '@/component/Modal/Error';
import { AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { useRouter } from 'next/navigation';

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
        <Error content="500 에러 발생 " handleModalClose={closeModal} />,
      );
    }
    if (errorStatus === 406) {
      openModal(
        <Error
          content="유효하지않은 접근입니다"
          handleModalClose={closeModal}
        />,
      );
    }
    // if (errorStatus === 401) {
    //   route.push('/login');
    // }
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
