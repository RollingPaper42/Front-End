import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import BottomButton from '../BottomButton';
import { DrawerProfileCat, Logout } from '../Icon/Drawer';
import DrawerClose from '../Icon/drawer/DrawerClose';
import Home from '../Icon/drawer/Home';
import DrawerItem from './DrawerItem';
import DropList from './DropList';
import { useLogin } from '@/hooks/useLogin';
import { drawerState, themeState } from '@/recoil/state';
import { drawerBoard } from '@/types/drawerBoard';
import { axiosInstance } from '@/utils/axios';
import { handleBackground } from '@/utils/handleBackground';
import { useRouter } from 'next/navigation';

export default function Drawer() {
  const [isLogin, , setIsLogin] = useLogin();
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [personalList, setPersonalList] = useState<drawerBoard[]>([]);
  const [theme] = useRecoilState(themeState);
  const router = useRouter();

  const fetchData = useCallback(async () => {
    try {
      const personal = await axiosInstance.get('/users/boards');
      setPersonalList(personal.data);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  }, [setPersonalList]);

  const handleLogout = () => {
    setDrawer(false);
    localStorage.removeItem('strcat_token');
    // router.push('/');
    setIsLogin(false);
  };

  const handleNewStrcat = () => {
    setDrawer(false);
    router.push('/create');
  };

  const handleHome = () => {
    setDrawer(false);
    router.push('/');
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    drawer && (
      <div
        className="fixed  z-drawer h-full w-full max-w-md bg-black bg-opacity-40"
        onClick={(e) => {
          handleBackground(e, () => setDrawer(false));
          if (e.target === e.currentTarget)
            document.body.style.overflow = 'auto';
        }}
      >
        <div
          className={`absolute right-0 h-full w-[300px] ${theme.bgTheme.background} ${theme.textTheme.default}`}
        >
          <div className="flex h-[70px] w-full justify-start px-[24px] py-[22px]">
            <div className="absolute right-[24px]">
              <div className="flex justify-center items-center w-[24px] h-[24px]">
                <DrawerClose />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col items-center ${theme.textTheme.default}`}
          >
            <DropList
              title="내 스트링캣"
              list={personalList}
              category="personal"
            />
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
            <div
              className={`absolute bottom-0 w-full ${theme.bgTheme.background} px-[24px]`}
            >
              <div className="h-[54px] w-full" onClick={handleHome}>
                <DrawerItem title="홈으로" icon={<Home />} />
              </div>
              <div className="h-[54px] w-full" onClick={handleLogout}>
                <DrawerItem title="로그아웃" icon={<Logout />} />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
