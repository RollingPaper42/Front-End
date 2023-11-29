'use client';

import { useRecoilState } from 'recoil';
import { calm, cyan, green, strcat, themeState } from '@/recoil/theme';
import {
  ThemeCalm,
  ThemeCyan,
  ThemeGreen,
  ThemeStrcat,
} from '@/component/Icon/Theme';

export default function ThemeChange() {
  const [Theme, setTheme] = useRecoilState(themeState);
  const handleThemeChange = (newTheme: themeState) => {
    setTheme(newTheme);
  };
  return (
    <div className="mx-[34px]">
      <div className="flex w-full flex-row items-center justify-center">
        <div
          className="mt-20 basis-1/6 "
          onClick={() => handleThemeChange(strcat)}
        >
          <ThemeStrcat />
          <div className={`${Theme.defaultText} `}>strcat</div>
        </div>
        <div className="basis-1/6"></div>
        <div
          className="mt-20 basis-1/6 "
          onClick={() => handleThemeChange(calm)}
        >
          <ThemeCalm />
          <div className={`basis-1/6 text-center ${Theme.defaultText} `}>
            Calm
          </div>
        </div>
        <div className="basis-1/6"></div>
        <div
          className="mt-20 basis-1/6 "
          onClick={() => handleThemeChange(green)}
        >
          <ThemeGreen />
          <div className={`basis-1/6 text-center ${Theme.defaultText} `}>
            green
          </div>
        </div>
        <div className="basis-1/6"></div>
        <div
          className="mt-20 basis-1/6  "
          onClick={() => handleThemeChange(cyan)}
        >
          <ThemeCyan />
          <div className={`text-center ${Theme.defaultText} `}>Cyan</div>
        </div>
      </div>
    </div>
  );
}
