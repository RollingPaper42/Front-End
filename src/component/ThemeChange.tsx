'use client';

import { useRecoilState } from 'recoil';
import { calm, cyan, green, strcat, themeState } from '@/recoil/theme';
import Image from 'next/image';

export default function ThemeChange() {
  const [Theme, setTheme] = useRecoilState(themeState);
  const handleThemeChange = (newTheme: themeState) => {
    setTheme(newTheme);
  };
  return (
    <>
      <div className="flex w-full flex-row items-center justify-center">
        <div className="basis-8"></div>
        <Image
          src="/strcatButton.png"
          width={52}
          height={52}
          alt="strcatButton"
          className="mt-20 basis-14 "
          onClick={() => handleThemeChange(strcat)}
        />
        <div className="basis-8"></div>
        <Image
          src="/CalmButton.png"
          width={52}
          height={52}
          alt="CalmButton"
          className="mt-20 basis-14"
          onClick={() => handleThemeChange(calm)}
        />
        <div className="basis-8"></div>
        <Image
          src="/GreenButton.png"
          width={52}
          height={52}
          alt="GreenButton"
          className="mt-20 basis-14"
          onClick={() => handleThemeChange(green)}
        />
        <div className="basis-8"></div>
        <Image
          src="/CyanButton.png"
          width={52}
          height={52}
          alt="CyanButton"
          className="mt-20 basis-14"
          onClick={() => handleThemeChange(cyan)}
        />
        <div className="basis-8"></div>
      </div>
      <div className="flex w-full flex-row items-center justify-center">
        <div className=" mt-9 basis-8"></div>
        <div className={`basis-14 text-center ${Theme.DefaultFontColor} `}>
          strcat
        </div>
        <div className="basis-8"></div>
        <div className={`basis-14 text-center ${Theme.DefaultFontColor} `}>
          Calm
        </div>
        <div className="basis-8"></div>
        <div className={`basis-14 text-center ${Theme.DefaultFontColor} `}>
          green
        </div>
        <div className="basis-8"></div>
        <div className={`basis-14 text-center ${Theme.DefaultFontColor} `}>
          Cyan
        </div>
        <div className="basis-8"></div>
      </div>
    </>
  );
}
