'use client';

import { useState } from 'react';

import BottomButton from '../Common/BottomButton';
import PreviewTheme from './PreviewTheme';
import ThemeSelect from './ThemeSelect';
import { getThemes } from './getThemes';
import { defaultState } from '@/utils/theme/default';

interface CreateThemeProps {
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  setThemeName: React.Dispatch<React.SetStateAction<string>>;
}

export default function CreateTheme({
  setIsNext,
  setThemeName,
}: CreateThemeProps) {
  const [preview, setPreview] = useState(1);

  const handlePreview = (value: number, newTheme: string) => {
    setThemeName(newTheme);
    setPreview(value);
  };

  const themes = getThemes(
    () => handlePreview(1, 'sul'),
    () => handlePreview(2, 'night'),
    () => handlePreview(3, 'peach'),
    () => handlePreview(4, 'lilac'),
    () => handlePreview(5, 'chris'),
    () => handlePreview(6, 'mas'),
  );

  return (
    <div className="flex w-full h-full flex-col">
      <div className="basis-[52px] mb-[16px]" />
      <div className="basis-[107px] w-full px-[24px]">
        <div className={`text-[16px] pb-[16px] font-semibold text-white`}>
          테마
        </div>
        <ThemeSelect
          themes={themes}
          preview={preview}
          defaultState={defaultState}
        />
      </div>
      <PreviewTheme themes={themes} preview={preview} />
      <div className="fixed bottom-[12px] flex w-full max-w-md items-center justify-center px-[24px]">
        <BottomButton
          name="다음"
          width="w-full"
          color={`${defaultState.MiddleButton}`}
          textColor={`${defaultState.highLightText}`}
          onClickHandler={() => setIsNext(true)}
        />
      </div>
    </div>
  );
}
