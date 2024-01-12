import { Dispatch } from 'react';
import { useRecoilState } from 'recoil';

import { loginState } from '@/recoil/login';
import { axiosInstance } from '@/utils/axios';

export const useLogin = (): [
  boolean,
  () => void,
  Dispatch<React.SetStateAction<boolean>>,
] => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const checkLogin = () => {
    axiosInstance
      .get('/login/check')
      .then((res) => {
        setIsLogin(res.data.login);
      })
      .catch((err) => {});
  };

  return [isLogin, checkLogin, setIsLogin];
};
