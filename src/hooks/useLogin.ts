import { Dispatch } from 'react';
import { useRecoilState } from 'recoil';

import { loginState } from '@/recoil/login';
import { axiosGetLoginCheck } from '@/utils/apiInterface';

export const useLogin = (): [
  boolean | undefined,
  () => void,
  Dispatch<React.SetStateAction<boolean | undefined>>,
] => {
  const [isLogin, setIsLogin] = useRecoilState(loginState);
  const checkLogin = () => {
    axiosGetLoginCheck().then((res) => {
      setIsLogin(res.data.login);
    });
  };

  return [isLogin, checkLogin, setIsLogin];
};
