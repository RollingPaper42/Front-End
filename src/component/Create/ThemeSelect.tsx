import Image from 'next/image';

import { ThemeArray } from '@/types/ThemeArray';

interface Props {
  themes: ThemeArray[];
  preview: number;
  setPreview: React.Dispatch<React.SetStateAction<number>>;
  defaultState: {
    activateText: string;
  };
}

export default function ThemeSelect({
  themes,
  preview,
  setPreview,
  defaultState,
}: Props) {
  return (
    <div className="flex w-full flex-row">
      {themes.map((theme) => (
        <div
          key={theme.id}
          className="flex basis-1/5 flex-col items-center justify-center"
        >
          <div
            className={`${theme.bgStyle} h-[45px] w-[45px] rounded-full ${
              preview === theme.id
                ? 'ring-white ring-offset-default-black ring-2 ring-offset-2'
                : ''
            }`}
            onClick={() => setPreview(theme.id)}
          >
            <div className="flex justify-center items-center h-[43px] pt-[5px]">
              {theme.image && (
                <Image
                  src={theme.image}
                  width={theme.name === '설날' ? 19 : 42}
                  height={theme.name === '설날' ? 21 : 43}
                  alt={theme.name}
                  className="z-10"
                />
              )}
            </div>
          </div>
          <div className={`mt-[12px] text-[12px] ${defaultState.activateText}`}>
            {theme.name}
          </div>
        </div>
      ))}
    </div>
  );
}
