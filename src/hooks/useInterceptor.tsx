import { axiosInstance } from '@/utils/axios';
import { useEffect } from 'react';
import useModal from './useModal';
import Error from '@/component/Modal/Error';

export const useInterceptor = () => {
  const [openModal, closeModal] = useModal();
  const responseHandler = (response: any) => {
    return response;
  };
  const requestHandler = async (config: any) => {
    config.withCredentials = true;
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
