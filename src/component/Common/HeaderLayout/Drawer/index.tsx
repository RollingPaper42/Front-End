import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { usePathname, useRouter } from 'next/navigation';

import BottomButton from '../../BottomButton';
import { Logout } from '../../Icon/Drawer';
import { Logo } from '../../Icon/Header';
import DrawerClose from '../../Icon/drawer/DrawerClose';
import Home from '../../Icon/drawer/Home';
import Inquiry from '../../Icon/drawer/Inquiry';
import { DrawerHeader } from './DrawerHeader';
import DrawerSection from './DrawerSection';
import DropList from './DropList';
import { useLogin } from '@/hooks/useLogin';
import { drawerState } from '@/recoil/drawer';
import { titleFontState } from '@/recoil/font/title';
import { drawerBoard } from '@/types/drawerBoard';
import { History } from '@/types/history';
import { axiosGetUserBoard } from '@/utils/apiInterface';
import { axiosGetUserHistory } from '@/utils/apiInterface';
import { handleBackground } from '@/utils/handleBackground';
import { defaultState } from '@/utils/theme/default';

export default function Drawer() {
  const [isLogin, checkLogin, setIsLogin] = useLogin();
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [drawerClosing, setDrawerClosing] = useState(false);
  const [personalList, setPersonalList] = useState<drawerBoard[]>([]);
  const [historyList, setHistoryList] = useState<History[]>([]);
  const router = useRouter();
  const pathname = usePathname();

  const fetchData = useCallback(async () => {
    try {
      const personal = await axiosGetUserBoard();
      setPersonalList(personal.data);
      const history = await axiosGetUserHistory();
      setHistoryList(history.data);
      // history 뷰는 아직 구현 안함
    } catch (err) {
      const error = err as AxiosError;
    }
  }, [setPersonalList, setHistoryList]);

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

  const handleClickBacground = (e: any) => {
    handleBackground(e, drawerSlowClose);
    if (e.target === e.currentTarget) document.body.style.overflow = 'auto';
  };

  const handleClickInquiry = () => {
    window.open('https://forms.gle/A21VjqrLnQH3XxCAA');
  };

  return (
    drawer && (
      <div
        className={`fixed  z-drawer h-full w-full max-w-md bg-black bg-opacity-80 overflow-hidden ${
          drawerClosing ? ' animate-drawerCloseBg' : 'animate-drawerOpenBg'
        }`}
        onClick={handleClickBacground}
      >
        <div
          className={`absolute right-0 h-full w-[300px] opacity-100 ${
            defaultState.background
          } ${defaultState.activateText} ${
            drawerClosing ? 'animate-drawerClose' : 'animate-drawerOpen'
          }`}
        >
          <DrawerHeader
            Logo={Logo}
            handleHome={handleHome}
            DrawerClose={DrawerClose}
            drawerSlowClose={drawerSlowClose}
          />
          <div className={`flex flex-col items-center`}>
            {isLogin ? (
              <>
                <DropList
                  title={'내 스트링캣'}
                  list={personalList}
                  category="personal"
                />
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
                <div
                  className={`"flex w-full justify-start px-[24px] ${titleFontState.titleLabel}`}
                >
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
                <DropList
                  title={'최근 방문한 스트링캣'}
                  list={personalList}
                  category="personal"
                />
              </>
            )}
            <div
              className={`absolute bottom-0 w-full ${defaultState.background} px-[24px]`}
            >
              <DrawerSection
                items={[
                  { title: '홈으로', icon: <Home />, onClick: handleHome },
                  {
                    title: '문의하기',
                    icon: <Inquiry />,
                    onClick: () => handleClickInquiry,
                  },
                  isLogin
                    ? {
                        title: '로그아웃',
                        icon: <Logout />,
                        onClick: handleLogout,
                      }
                    : { title: '', icon: <></>, onClick: () => {} },
                ]}
              />
            </div>
          </div>
        </div>
      </div>
    )
  );
}
