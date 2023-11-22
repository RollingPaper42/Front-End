import { drawerState } from '@/recoil/drawer';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios';
import DropListItem from './DropListItem';
import DrawerItem from './DrawerItem';

interface Board {
  id: string;
  title: string;
}
export default function Drawer() {
  const [drawer] = useRecoilState(drawerState);
  const [dropList, setDropList] = useState(false);
  const [groupDropList, setGroupDropList] = useState(false);
  const [personalList, setPersonalList] = useState<Board[]>([]);
  const [groupList, setGroupList] = useState<Board[]>([]);

  useEffect(() => {
    axiosInstance
      .get('/users/boards')
      .then((res) => {
        console.log(res.data.data);
        setPersonalList(res.data.data);
      })
      .catch((err) => {
        //401 406 500
        console.log(err);
      });
    axiosInstance
      .get('/users/board-groups')
      .then((res) => {
        setGroupList(res.data.data);
      })
      .catch((err) => {
        //401 406 500
        console.log(err);
      });
  }, []);

  return (
    drawer && (
      <div className="fixed right-0 top-0 z-20 h-full w-[300px] items-center bg-black">
        <div className="flex h-[123px] w-full justify-start">
          <Image
            src="/ProfileImg.svg"
            width={72}
            height={72}
            alt="profileImg"
            className="m-[24px]"
          />
        </div>
        <div className="flex flex-col items-center px-[24px] text-white">
          <div className="flex h-[53px] w-full items-center justify-between">
            <DrawerItem
              title="내 스트링캣"
              alt="personalStrCat"
              icon="/StrCatIcon.svg"
            />
            <Image
              src={dropList ? '/ListDownButton.svg' : '/ListUpButton.svg'}
              width={24}
              height={24}
              alt="dropList"
              className="ml-[12px]"
              onClick={() => setDropList(!dropList)}
            />
          </div>
          {dropList && (
            <div className="flex w-full flex-col">
              {personalList && (
                <DropListItem list={personalList} category="personal" />
              )}
            </div>
          )}
          <div className="flex h-[53px] w-full items-center justify-between">
            <DrawerItem
              title="그룹 스트링캣"
              alt="groupStrCat"
              icon="/StrCatIcon.svg"
            />
            <Image
              src={groupDropList ? '/ListDownButton.svg' : '/ListUpButton.svg'}
              width={24}
              height={24}
              alt="groupDropList"
              onClick={() => setGroupDropList(!groupDropList)}
            />
          </div>
          {groupDropList && <DropListItem list={groupList} category="group" />}
          <div className="absolute bottom-0 w-full px-[24px]">
            <div className="h-[53px] w-full">
              <DrawerItem
                title="버전 정보?"
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
    )
  );
}
