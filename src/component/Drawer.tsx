import { drawerState } from '@/recoil/drawer';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { useCallback, useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import DropListItem from './DropListItem';
import DrawerItem from './DrawerItem';
import { useLogin } from '@/hooks/useLogin';
import { AxiosError } from 'axios';
import { handleBackground } from '@/utils/handleBackground';

interface Board {
  id: string;
  title: string;
}

export default function Drawer() {
  const [isLogin] = useLogin();
  const [drawer] = useRecoilState(drawerState);
  const [dropList, setDropList] = useState(false);
  const [groupDropList, setGroupDropList] = useState(false);
  const [personalList, setPersonalList] = useState<Board[]>([]);
  const [groupList, setGroupList] = useState<Board[]>([]);

  const fetchData = useCallback(async () => {
    if (isLogin) {
      try {
        const personal = await axiosInstance.get('/api/users');
        setPersonalList(personal.data);
        const group = await axiosInstance.get('/api/users');
        setGroupList(personal.data);
      } catch (err) {
        const error = err as AxiosError;
        console.log(error);
      }
    }
  }, [isLogin, setPersonalList, setGroupList]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  const [, setDrawer] = useRecoilState(drawerState);

  return (
    drawer &&
    isLogin && (
      <div
        className="fixed z-30 h-full w-full max-w-md"
        onClick={(e) => handleBackground(e, () => setDrawer(false))}
      >
        <div className="absolute right-0 z-20 h-full w-[300px] bg-black text-white">
          <div className="flex h-[123px] w-full justify-start">
            <Image
              src="/ProfileImg.svg"
              width={72}
              height={72}
              alt="profileImg"
              className="m-[24px]"
            />
          </div>
          <div className="flex flex-col items-center text-white">
            <div
              className="flex h-[53px] w-full items-center justify-between px-[24px]"
              onClick={() => setDropList(!dropList)}
            >
              <DrawerItem
                title="내 스트링캣"
                alt="personalStrCat"
                icon="/StrCatIcon.svg"
              />
              {personalList.length != 0 && (
                <Image
                  src={dropList ? '/ListDownButton.svg' : '/ListUpButton.svg'}
                  width={24}
                  height={24}
                  alt="dropList"
                  className="ml-[12px]"
                />
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
                alt="groupStrCat"
                icon="/StrCatIcon.svg"
              />
              <Image
                src={
                  groupDropList ? '/ListDownButton.svg' : '/ListUpButton.svg'
                }
                width={24}
                height={24}
                alt="groupDropList"
              />
            </div>
            {groupDropList && (
              <DropListItem list={groupList} category="group" />
            )}
            <div className="absolute bottom-0 w-full px-[24px]">
              <div className="h-[53px] w-full">
                <DrawerItem
                  title="이용약관"
                  alt="version"
                  icon="/VersionIcon.svg"
                />
              </div>
              <div className="h-[53px] w-full">
                <DrawerItem
                  title="Man Strcat"
                  alt="notify"
                  icon="/NotifyIcon.svg"
                />
              </div>
              <div className="h-[53px] w-full">
                <DrawerItem
                  title="로그아웃"
                  alt="logout"
                  icon="/LogoutIcon.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}
