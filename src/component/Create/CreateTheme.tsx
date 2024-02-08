'use client';

import BottomButton from '../Common/BottomButton';
import PreviewTheme from './PreviewTheme';
import ThemeSelect from './ThemeSelect';
import { defaultState } from '@/utils/theme/default';

interface CreateThemeProps {
  onClickSul: () => void;
  onClickNight: () => void;
  onClickPeach: () => void;
  onClickLilac: () => void;
  onClickChris: () => void;
  onClickMas: () => void;
  isPreview: string;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateTheme({
  setIsNext,
  onClickSul,
  onClickNight,
  onClickPeach,
  onClickLilac,
  onClickChris,
  onClickMas,
  isPreview,
}: CreateThemeProps) {
  const themes = [
    {
      id: '1',
      name: '설날',
      image: '/create/sulHat.svg',
      onClick: onClickSul,
      bgStyle: 'bg-strcat-sul',
    },
    {
      id: '2',
      name: '고요한 밤',
      onClick: onClickNight,
      bgStyle: 'bg-strcat-night',
    },
    {
      id: '3',
      name: '복숭아',
      onClick: onClickPeach,
      bgStyle: 'bg-strcat-peach',
    },
    {
      id: '4',
      name: '라일락',
      onClick: onClickLilac,
      bgStyle: 'bg-strcat-lilac',
    },
    {
      id: '5',
      name: '크리스',
      image: '/create/chrisCat.svg',
      onClick: onClickChris,
      bgStyle: 'bg-strcat-chris',
    },
    {
      id: '6',
      name: '마스',
      image: '/create/masCat.svg',
      onClick: onClickMas,
      bgStyle: 'bg-strcat-mas',
    },
  ];

  return (
    <div className="flex w-full h-full flex-col">
      <div className="basis-[52px] mb-[16px]" />
      <div className="basis-[107px] w-full px-[24px]">
        <div className={`text-[16px] pb-[16px] font-semibold text-white`}>
          테마
        </div>
        <ThemeSelect
          themes={themes}
          isPreview={isPreview}
          defaultState={defaultState}
        />
      </div>
      <PreviewTheme isPreview={isPreview} />
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
