import Image from 'next/image';

interface ThemeArray {
  id: string;
  name: string;
  image?: string;
  onClick: () => void;
  bgStyle: string;
}

interface Props {
  themes: ThemeArray[];
  isPreview: string;
  defaultState: {
    activateText: string;
  };
}

export default function ThemeSelect({
  themes,
  isPreview,
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
              isPreview === theme.id
                ? 'ring-white ring-offset-default-black ring-2 ring-offset-2'
                : ''
            }`}
            onClick={theme.onClick}
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
