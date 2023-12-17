import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import BottomButton from '../BottomButton';
import { Logout } from '../Icon/Drawer';
import { Logo } from '../Icon/Header';
import DrawerClose from '../Icon/drawer/DrawerClose';
import Home from '../Icon/drawer/Home';
import DrawerItem from './DrawerItem';
import DropList from './DropList';
import { useLogin } from '@/hooks/useLogin';
import { drawerState } from '@/recoil/state';
import { drawerBoard } from '@/types/drawerBoard';
import { axiosInstance } from '@/utils/axios';
import { handleBackground } from '@/utils/handleBackground';
import { defaultState } from '@/utils/theme/default';
import { usePathname, useRouter } from 'next/navigation';

export default function Drawer() {
  const [isLogin, checkLogin, setIsLogin] = useLogin();
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [drawerClosing, setDrawerClosing] = useState(false);
  const [personalList, setPersonalList] = useState<drawerBoard[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const fetchData = useCallback(async () => {
    try {
      const personal = await axiosInstance.get('/users/boards');
      setPersonalList(personal.data);
    } catch (err) {
      const error = err as AxiosError;
    }
  }, [setPersonalList]);

  const drawerSlowClose = () => {
    setDrawerClosing(true);
    setTimeout(() => {
      setDrawer(false);
      setDrawerClosing(false);
    }, 200);
    document.body.style.overflow = 'auto';
  };

  const drawerClose = () => {
    setDrawer(false);
    document.body.style.overflow = 'auto';
  };
  const handleLogout = () => {
    drawerClose();
    localStorage.removeItem('strcat_token');
    setIsLogin(false);
    window.location.reload();
  };

  const handleNewStrcat = () => {
    drawerClose();
    router.push('/create', { scroll: false });
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
            defaultState.background
          } ${defaultState.activateText} ${
            drawerClosing ? 'animate-drawerClose' : 'animate-drawerOpen'
          }`}
        >
          <div className="flex h-[70px] w-full px-[24px] py-[22px]">
            <div onClick={handleHome}>
              <Logo />
            </div>
            <div className="absolute right-[24px]">
              <div
                className="flex h-[24px] w-[24px] items-center justify-center"
                onClick={drawerSlowClose}
              >
                <DrawerClose />
              </div>
            </div>
          </div>
          <div className={`flex flex-col items-center`}>
            {isLogin ? (
              <>
                <DropList list={personalList} category="personal" />
                <div className="mt-[12px] w-full px-[24px]">
                  <BottomButton
                    name="새 스트링캣 만들기"
                    height="h-[44px]"
                    width="w-full"
                    onClickHandler={handleNewStrcat}
                    color={`${defaultState.MiddleButton}`}
                    textColor={`${defaultState.highLightText}`}
                  />
                </div>
              </>
            ) : (
              <>
                <div className="flex w-full justify-start px-[24px] text-body-size1 font-semibold">
                  <p>
                    로그인을 하면
                    <br />
                    나만의 스트링캣을 만들고
                    <br />
                    관리할 수 있어요.
                  </p>
                </div>
                <div className="mt-[12px] w-full px-[24px]">
                  <BottomButton
                    name="로그인"
                    height="h-[44px]"
                    width="w-full"
                    onClickHandler={handleLogin}
                    color={`${defaultState.MiddleButton}`}
                    textColor={`${defaultState.highLightText}`}
                  />
                </div>
              </>
            )}
            <div
              className={`absolute bottom-0 w-full ${defaultState.background} px-[24px]`}
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
