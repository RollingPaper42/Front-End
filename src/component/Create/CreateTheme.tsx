'use client';

import BottomButton from '../Common/BottomButton';
import PreviewTheme from './PreviewTheme';
import ThemeSelect from './ThemeSelect';
import { getThemes } from './getThemes';
import { defaultState } from '@/utils/theme/default';

interface CreateThemeProps {
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
  preview: number;
  setPreview: React.Dispatch<React.SetStateAction<number>>;
  themelist: string[];
}

export default function CreateTheme({
  setIsNext,
  preview,
  setPreview,
  themelist,
}: CreateThemeProps) {
  const themes = getThemes(...themelist);

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
          setPreview={setPreview}
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
