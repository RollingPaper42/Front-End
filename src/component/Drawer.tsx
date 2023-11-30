import { AxiosError } from 'axios';
import { useRecoilState } from 'recoil';
import { useCallback, useEffect, useState } from 'react';
import { themeState, drawerState } from '@/recoil/state';
import { useLogin } from '@/hooks/useLogin';
import { axiosInstance } from '@/utils/axios';
import DropListItem from './DropListItem';
import DrawerItem from './DrawerItem';
import { handleBackground } from '@/utils/handleBackground';
import {
  DrawerProfileCat,
  DropListDown,
  DropListUp,
  Logout,
} from './Icon/Drawer';
import Strcat from './Icon/Strcat';
import { useRouter } from 'next/navigation';

interface Board {
  id: string;
  title: string;
}

export default function Drawer() {
  const [isLogin, , setIsLogin] = useLogin();
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [dropList, setDropList] = useState(false);
  const [groupDropList, setGroupDropList] = useState(false);
  const [personalList, setPersonalList] = useState<Board[]>([]);
  const [groupList, setGroupList] = useState<Board[]>([]);
  const [theme] = useRecoilState(themeState);
  const catTheme = theme.catTheme;
  const router = useRouter();

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
  }, []);

  return (
    drawer &&
    isLogin && (
      <div
        className="fixed z-30 h-full w-full max-w-md bg-black bg-opacity-40"
        onClick={(e) => {
          handleBackground(e, () => setDrawer(false));
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
            <div
              className="flex h-[53px] w-full items-center justify-between px-[24px]"
              onClick={() => setDropList(!dropList)}
            >
              <DrawerItem
                title="내 스트링캣"
                icon={
                  <Strcat
                    eyeColor={catTheme.headerCatEye}
                    bodyColor={catTheme.headerCat}
                  />
                }
              />
              {personalList.length != 0 && (
                <div className="ml-[12px]">
                  {dropList ? (
                    <DropListUp color={theme.defaultIcon} />
                  ) : (
                    <DropListDown color={theme.defaultIcon} />
                  )}
                </div>
              )}
            </div>
            {dropList && (
              <div className="flex w-full flex-col">
                {personalList && (
                  <DropListItem list={personalList} category="personal" />
                )}
              </div>
            )}
            <div
              className="flex h-[53px] w-full items-center justify-between px-[24px]"
              onClick={() => setGroupDropList(!groupDropList)}
            >
              <DrawerItem
                title="그룹 스트링캣"
                icon={
                  <Strcat
                    eyeColor={catTheme.headerCatEye}
                    bodyColor={catTheme.headerCat}
                  />
                }
              />
              {groupList.length != 0 && (
                <div className="ml-[12px]">
                  {groupDropList ? (
                    <DropListUp color={theme.defaultIcon} />
                  ) : (
                    <DropListDown color={theme.defaultIcon} />
                  )}
                </div>
              )}
            </div>
            {groupDropList && (
              <DropListItem list={groupList} category="group" />
            )}
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
