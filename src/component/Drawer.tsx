import { drawerState } from '@/recoil/drawer';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { axiosInstance } from '@/utils/axios';

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
        setGroupList(res.data);
      })
      .catch((err) => {
        //401 406 500
        console.log(err);
      });
  }, []);

  const truncateTitle = (title: string) => {
    if (title.length <= 17) {
      return title;
    } else {
      return title.substring(0, 17) + '...';
    }
  };

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
        <div className="flex flex-col items-center text-white">
          <div className="flex h-[53px] w-full items-center justify-between px-[24px] text-white">
            <div className="flex items-center">
              <Image
                src="/StrCatIcon.svg"
                width={24}
                height={24}
                alt="personalStrCat"
                className="mr-[12px]"
              />
              내 스트링캣
            </div>
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
            <div className="flex w-full flex-col px-[24px]">
              {personalList &&
                personalList.map((personal: Board) => {
                  return (
                    <div
                      key={personal.id}
                      className="flex h-[53px] items-center justify-between"
                    >
                      {truncateTitle(personal.title)}
                      <Image
                        src="/CheckSmall.svg"
                        width={24}
                        height={24}
                        alt="check"
                        className="ml-[12px]"
                      />
                    </div>
                  );
                })}
            </div>
          )}
          <div className="flex h-[53px] w-full items-center justify-between px-[24px] text-white">
            <div className="flex items-center">
              <Image
                src="/StrCatIcon.svg"
                width={24}
                height={24}
                alt="groupStrCat"
                className="mr-[12px]"
              />
              그룹 스트링캣
            </div>
            <Image
              src={dropList ? '/ListDownButton.svg' : '/ListUpButton.svg'}
              width={24}
              height={24}
              alt="dropList"
              className="ml-[12px]"
              onClick={() => setGroupDropList(!groupDropList)}
            />
          </div>
          {groupDropList && (
            <div className="flex w-full flex-col px-[24px]">
              {groupList &&
                groupList.map((group: Board) => {
                  return (
                    <div
                      key={group.id}
                      className="flex h-[53px] items-center justify-between"
                    >
                      {truncateTitle(group.title)}
                      <Image
                        src="/CheckSmall.svg"
                        width={24}
                        height={24}
                        alt="check"
                        className="ml-[12px]"
                      />
                    </div>
                  );
                })}
            </div>
          )}
          <div className="absolute  bottom-0 w-full">
            <div className="flex h-[53px] w-full items-center pl-[24px]">
              <Image
                src="/VersionIcon.svg"
                width={24}
                height={24}
                alt="version"
                className="mr-[12px]"
              />
              버전 정보?
            </div>
            <div className="flex h-[53px] w-full items-center pl-[24px]">
              <Image
                src="/NotifyIcon.svg"
                width={24}
                height={24}
                alt="notify"
                className="mr-[12px]"
              />
              Man Strcat
            </div>
            <div className="flex h-[53px] w-full items-center pl-[24px] text-white">
              <Image
                src="/LogoutIcon.svg"
                width={24}
                height={24}
                alt="logout"
                className="mr-[12px]"
              />
              로그아웃
            </div>
          </div>
        </div>
      </div>
    )
  );
}
