import { Dispatch } from 'react';
import { useRecoilState } from 'recoil';

import { loginState } from '@/recoil/login';
import { axiosGetLoginCheck } from '@/utils/apiInterface';

export const useLogin = (): [
  boolean,
  () => void,
  Dispatch<React.SetStateAction<boolean>>,
] => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const checkLogin = () => {
    axiosGetLoginCheck()
      .then((res) => {
        setIsLogin(res.data.login);
      })
      .catch((err) => {});
  };

  return [isLogin, checkLogin, setIsLogin];
};
