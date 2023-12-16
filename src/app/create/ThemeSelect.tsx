import Image from 'next/image';

interface ThemeArray {
  id: string;
  name: string;
  image?: string;
  onClick: () => void;
  bgStyle: string;
}

interface Props {
  cats: ThemeArray[];
  isPreview: string;
  defaultState: {
    activateText: string;
  };
}

export default function ThemeSelect({ cats, isPreview, defaultState }: Props) {
  return (
    <div className="flex w-full flex-row">
      {cats.map((cat) => (
        <div
          key={cat.id}
          className={`flex basis-1/5 flex-col items-center justify-center`}
        >
          <div
            tabIndex={0}
            className={`${cat.bgStyle} h-[45px] w-[45px] rounded-full ${
              isPreview === cat.id
                ? 'ring-white ring-offset-strcat-black ring-2 ring-offset-2'
                : ''
            }`}
            onClick={cat.onClick}
          >
            {cat.image && (
              <Image
                src={cat.image}
                width={42}
                height={43}
                alt={`${cat.name}Cat`}
                className="z-10 mt-[10px]"
              />
            )}
          </div>
          <div className={`mt-[12px] text-[12px] ${defaultState.activateText}`}>
            {cat.name}
          </div>
        </div>
      ))}
    </div>
  );
}
