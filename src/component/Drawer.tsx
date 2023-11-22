import { drawerState } from '@/recoil/drawer';
import { useRecoilState } from 'recoil';
import Image from 'next/image';
import { useState } from 'react';

export default function Drawer() {
  const [drawer] = useRecoilState(drawerState);
  const [dropList, setDropList] = useState(false);
  const [groupDropList, setGroupDropList] = useState(false);

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
              <div className="flex h-[53px] items-center justify-between">
                내 스트링캣 1
                <Image
                  src="/CheckSmall.svg"
                  width={24}
                  height={24}
                  alt="check"
                  className="ml-[12px]"
                />
              </div>
              <div className="flex h-[53px] items-center justify-between">
                내 스트링캣 2
                <Image
                  src="/CheckSmall.svg"
                  width={24}
                  height={24}
                  alt="check"
                  className="ml-[12px]"
                />
              </div>
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
              <div className="flex h-[53px] items-center justify-between">
                그룹 스트링캣 2
                <Image
                  src="/CheckSmall.svg"
                  width={24}
                  height={24}
                  alt="check"
                  className="ml-[12px]"
                />
              </div>
              <div className="flex h-[53px] items-center justify-between">
                그룹 스트링캣 2
              </div>
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
