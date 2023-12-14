import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import BottomButton from '../BottomButton';
import { Logout } from '../Icon/Drawer';
import DrawerClose from '../Icon/drawer/DrawerClose';
import Home from '../Icon/drawer/Home';
import DrawerItem from './DrawerItem';
import DropList from './DropList';
import { useLogin } from '@/hooks/useLogin';
import { drawerState, themeState } from '@/recoil/state';
import { drawerBoard } from '@/types/drawerBoard';
import { axiosInstance } from '@/utils/axios';
import { handleBackground } from '@/utils/handleBackground';
import { usePathname, useRouter } from 'next/navigation';

export default function Drawer() {
  const [isLogin, checkLogin, setIsLogin] = useLogin();
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [drawerClosing, setDrawerClosing] = useState(false);
  const [personalList, setPersonalList] = useState<drawerBoard[]>([]);
  const [theme] = useRecoilState(themeState);
  const router = useRouter();
  const pathname = usePathname();

  const fetchData = useCallback(async () => {
    try {
      const personal = await axiosInstance.get('/users/boards');
      setPersonalList(personal.data);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  }, [setPersonalList]);
  const drawerSlowClose = () => {
    setDrawerClosing(true);
    setTimeout(() => {
      setDrawer(false);
      setDrawerClosing(false);
    }, 400);
    document.body.style.overflow = 'auto';
  };

  const drawerClose = () => {
    setDrawer(false);
    document.body.style.overflow = 'auto';
  };
  const handleLogout = () => {
    drawerClose();
    localStorage.removeItem('strcat_token');
    // router.push('/');
    setIsLogin(false);
  };

  const handleNewStrcat = () => {
    drawerClose();
    router.push('/create');
  };

  const handleHome = () => {
    drawerClose();
    router.push('/');
  };

  const handleLogin = () => {
    drawerClose();
    localStorage.setItem('strcat_login_success_url', pathname);
    router.push('/login');
  };
  useEffect(() => {
    checkLogin();
  }, [checkLogin]);

  useEffect(() => {
    if (isLogin) {
      fetchData();
    }
  }, [fetchData, isLogin]);

  return (
    drawer && (
      <div
        className={`fixed  z-drawer h-full w-full max-w-md bg-black bg-opacity-80 overflow-hidden ${
          drawerClosing ? ' animate-drawerCloseBg' : 'animate-drawerOpenBg'
        }`}
        onClick={(e) => {
          handleBackground(e, drawerSlowClose);
          if (e.target === e.currentTarget)
            document.body.style.overflow = 'auto';
        }}
      >
        <div
          className={`absolute right-0 h-full w-[300px] opacity-100 ${
            theme.bgTheme.background
          } ${theme.textTheme.default} ${
            drawerClosing ? '  animate-drawerClose' : 'animate-drawerOpen'
          }`}
        >
          <div className="flex h-[70px] w-full justify-start px-[24px] py-[22px]">
            <div className="absolute right-[24px]">
              <div
                className="flex justify-center items-center w-[24px] h-[24px]"
                onClick={drawerSlowClose}
              >
                <DrawerClose />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${theme.textTheme.default}`}
          >
            {isLogin ? (
              <>
                <DropList list={personalList} category="personal" />
                <div className="w-full px-[24px] mt-[12px]">
                  <BottomButton
                    name="새 스트링캣 만들기"
                    width="w-full"
                    onClickHandler={handleNewStrcat}
                    disabled={false}
                    color={`bg-strcat-bright-yellow`}
                    textColor="text-strcat-black"
                    height="h-[44px]"
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex justify-start w-full px-[24px] text-body-size1 font-semibold">
                  <p>
                    로그인을 하면
                    <br />
                    나만의 스트링캣을 만들고
                    <br />
                    관리할 수 있어요
                  </p>
                </div>
                <div className="w-full px-[24px] mt-[12px]">
                  <BottomButton
                    name="로그인"
                    width="w-full"
                    onClickHandler={handleLogin}
                    disabled={false}
                    color={`bg-strcat-bright-yellow`}
                    textColor="text-strcat-black"
                    height="h-[44px]"
                  />
                </div>
              </>
            )}
            <div
              className={`absolute bottom-0 w-full ${theme.bgTheme.background} px-[24px]`}
            >
              <div className="h-[54px] w-full" onClick={handleHome}>
                <DrawerItem title="홈으로" icon={<Home />} />
              </div>
              {isLogin ? (
                <div className="h-[54px] w-full" onClick={handleLogout}>
                  <DrawerItem title="로그아웃" icon={<Logout />} />
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </div>
    )
  );
}
