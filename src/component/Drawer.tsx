import { AxiosError } from 'axios';
import { useRecoilState } from 'recoil';
import { useCallback, useEffect, useState } from 'react';
import { themeState, drawerState } from '@/recoil/state';
import { useLogin } from '@/hooks/useLogin';
import { axiosInstance } from '@/utils/axios';
import DrawerItem from './DrawerItem';
import { handleBackground } from '@/utils/handleBackground';
import { DrawerProfileCat, Logout } from './Icon/Drawer';
import DropList from './DropList';

interface Board {
  id: string;
  title: string;
}

export default function Drawer() {
  const [isLogin, , setIsLogin] = useLogin();
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [personalList, setPersonalList] = useState<Board[]>([]);
  const [groupList, setGroupList] = useState<Board[]>([]);
  const [theme] = useRecoilState(themeState);
  const catTheme = theme.catTheme;

  const fetchData = useCallback(async () => {
    if (isLogin) {
      try {
        const personal = await axiosInstance.get('/users/boards');
        setPersonalList(personal.data);
        const group = await axiosInstance.get('/users/board-groups');
        setGroupList(group.data);
      } catch (err) {
        const error = err as AxiosError;
        console.log(error);
      }
    }
  }, [isLogin, setPersonalList, setGroupList]);

  const handleLogout = () => {
    setDrawer(false);
    localStorage.removeItem('strcat_token');
    // router.push('/');
    setIsLogin(false);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    drawer &&
    isLogin && (
      <div
        className="fixed z-30 h-full w-full max-w-md bg-black bg-opacity-40"
        onClick={(e) => {
          handleBackground(e, () => setDrawer(false));
          if (e.target === e.currentTarget)
            document.body.style.overflow = 'auto';
        }}
      >
        <div
          className={`absolute right-0 h-full w-[300px] ${theme.background} ${theme.defaultText}`}
        >
          <div className="flex h-[123px] w-full justify-start p-[24px]">
            <DrawerProfileCat
              circleColor={catTheme.profileCircle}
              eyeColor={catTheme.headerCatEye}
              bodyColor={catTheme.profileCat}
            />
          </div>
          <div className={`flex flex-col items-center ${theme.defaultText}`}>
            <DropList title="내 스트링캣" list={personalList} />
            <DropList title="그룹 스트링캣" list={groupList} />
            <div className="absolute bottom-0 w-full px-[24px]">
              <div className="h-[53px] w-full" onClick={handleLogout}>
                <DrawerItem
                  title="로그아웃"
                  icon={<Logout color={theme.defaultIcon} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
