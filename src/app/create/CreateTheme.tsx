'use client';

import BottomButton from '../../component/BottomButton';
import PreviewTheme from './PreviewTheme';
import ThemeSelect from './ThemeSelect';
import { defaultState } from '@/utils/theme/default';

interface CreateThemeProps {
  onClickChris: () => void;
  onClickMas: () => void;
  onClickNight: () => void;
  onClickPeach: () => void;
  onClickLilac: () => void;
  isPreview: string;
  setIsNext: React.Dispatch<React.SetStateAction<boolean>>;
}

export default function CreateTheme({
  setIsNext,
  onClickChris,
  onClickMas,
  onClickNight,
  onClickPeach,
  onClickLilac,
  isPreview,
}: CreateThemeProps) {
  const cats = [
    {
      id: '1',
      name: '크리스',
      image: '/chrisCat.svg',
      onClick: onClickChris,
      bgStyle: 'bg-chris-bg',
    },
    {
      id: '2',
      name: '마스',
      image: '/masCat.svg',
      onClick: onClickMas,
      bgStyle: 'bg-mas-bg',
    },
    {
      id: '3',
      name: '고요한 밤',
      onClick: onClickNight,
      bgStyle: 'bg-night-bg',
    },
    { id: '4', name: '복숭아', onClick: onClickPeach, bgStyle: 'bg-peach-bg' },
    { id: '5', name: '라일락', onClick: onClickLilac, bgStyle: 'bg-lilac-bg' },
  ];

  return (
    <div className="flex w-full h-full flex-col">
      <div className="basis-[52px] mb-[16px]" />
      <div className="basis-[107px] w-full px-[24px]">
        <div className={`text-[16px] pb-[16px] font-semibold text-white`}>
          테마
        </div>
        <ThemeSelect
          cats={cats}
          isPreview={isPreview}
          defaultState={defaultState}
        />
      </div>
      <PreviewTheme isPreview={isPreview} />
      <div className="fixed bottom-5 flex w-full max-w-md items-center justify-center px-[24px]">
        <BottomButton
          name="다음"
          width="w-full"
          onClickHandler={() => setIsNext(true)}
          disabled={false}
          color={`${defaultState.MiddleButton}`}
          height="h-[46px]"
          textColor={`${defaultState.highLightText}`}
        />
      </div>
    </div>
  );
}
