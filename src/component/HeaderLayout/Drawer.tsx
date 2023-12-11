import { AxiosError } from 'axios';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { DrawerProfileCat, Logout } from '../Icon/Drawer';
import DrawerItem from './DrawerItem';
import DropList from './DropList';
import { useLogin } from '@/hooks/useLogin';
import { drawerState, themeState } from '@/recoil/state';
import { drawerBoard } from '@/types/drawerBoard';
import { axiosInstance } from '@/utils/axios';
import { handleBackground } from '@/utils/handleBackground';

export default function Drawer() {
  const [isLogin, , setIsLogin] = useLogin();
  const [drawer, setDrawer] = useRecoilState(drawerState);
  const [personalList, setPersonalList] = useState<drawerBoard[]>([]);
  const [personalDrop, setPersonalDrop] = useState<boolean>(false);
  const [groupDrop, setGroupDrop] = useState<boolean>(false);
  const [groupList, setGroupList] = useState<drawerBoard[]>([]);
  const [theme] = useRecoilState(themeState);
  const catTheme = theme.catTheme;

  const fetchData = useCallback(async () => {
    try {
      const personal = await axiosInstance.get('/users/boards');
      setPersonalList(personal.data);
      const group = await axiosInstance.get('/users/board-groups');
      setGroupList(group.data);
    } catch (err) {
      const error = err as AxiosError;
      console.log(error);
    }
  }, [setPersonalList, setGroupList]);

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
          <div className="flex h-[123px] w-full justify-start p-[24px]">
            <DrawerProfileCat
              circleColor={catTheme.profileCircle}
              eyeColor={catTheme.headerCatEye}
              bodyColor={catTheme.profileCat}
            />
          </div>
          <div
            className={`flex flex-col items-center ${theme.textTheme.default}`}
          >
            <DropList
              title="내 스트링캣"
              list={personalList}
              category="personal"
              dropDown={personalDrop}
              handleDropDown={() => {
                if (!personalDrop) setGroupDrop(false);
                setPersonalDrop(!personalDrop);
              }}
            />
            <DropList
              title="그룹 스트링캣"
              list={groupList}
              category="group"
              dropDown={groupDrop}
              handleDropDown={() => {
                if (!groupDrop) setPersonalDrop(false);
                setGroupDrop(!groupDrop);
              }}
            />
            <div className="h-[54px] w-full"></div>
            <div
              className={`absolute bottom-0 w-full ${theme.bgTheme.background} px-[24px]`}
            >
              <div className="h-[54px] w-full" onClick={handleLogout}>
                <DrawerItem
                  title="로그아웃"
                  icon={<Logout color={theme.iconTheme.default} />}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
