import Link from 'next/link';

import OpenStrcat from './OpenStrcat';
import { openBoard } from '@/types/openBoard';

interface Props {
  openBoard: openBoard[];
}

export default function OpenStrcatBoard({ openBoard }: Props) {
  const bgAndBorderColor: Record<string, string> = {
    night: 'bg-strcat-night/50 border-strcat-night',
    peach: 'bg-strcat-peach/50 border-strcat-peach',
    lilac: 'bg-strcat-lilac/50 border-strcat-lilac',
    chris: 'bg-strcat-chris/50 border-strcat-chris',
    mas: 'bg-strcat-mas/50 border-strcat-mas',
    sul: 'bg-strcat-sul/50 border-strcat-sul',
    spring: 'bg-strcat-spring/50 border-strcat-spring',
  };

  const textColor: Record<string, string> = {
    night: 'text-strcat-night',
    peach: 'text-strcat-peach',
    lilac: 'text-strcat-lilac',
    chris: 'text-white',
    mas: 'text-white',
    sul: 'text-strcat-sul',
    spring: 'text-strcat-spring',
  };

  return (
    <div className="w-full flex flex-row  overflow-x-scroll pt-[14px] gap-[12px]">
      {openBoard.map((item, i) => {
        return (
          <div key={'openBoard' + item.title}>
            <Link href={`/personal/${item.id}`}>
              <OpenStrcat
                id={item.id}
                bgAndBorderColor={`${bgAndBorderColor[item.theme]}`}
                timeTextColor={`${textColor[item.theme]}`}
                title={item.title}
                contentCount={item.contentCount}
                contentTextCount={item.contentTextCount}
                lastContentCreatedAt={item.lastContentCreatedAt}
                theme={item.theme}
              />
            </Link>
          </div>
        );
      })}
    </div>
  );
}
