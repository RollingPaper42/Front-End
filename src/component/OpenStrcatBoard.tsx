import Link from 'next/link';

import OpenStrcat from './OpenStrcat';
import { openBoard } from '@/types/openBoard';

interface Props {
  openBoard: openBoard[];
}

export default function OpenStrcatBoard({ openBoard }: Props) {
  const bgAndBorderColor: Record<string, string> = {
    'strcat-night': 'bg-strcat-night/50 border-strcat-night',
    'strcat-peach': 'bg-strcat-peach/50 border-strcat-peach',
    'strcat-lilac': 'bg-strcat-lilac/50 border-strcat-lilac',
    'strcat-chris': 'bg-strcat-chris/50 border-strcat-chris',
    'strcat-mas': 'bg-strcat-mas/50 border-strcat-mas',
    'strcat-sul': 'bg-strcat-sul/50 border-strcat-sul',
    'strcat-spring': 'bg-strcat-spring/50 border-strcat-spring',
  };

  const textColor: Record<string, string> = {
    'strcat-night': 'text-strcat-night',
    'strcat-peach': 'text-strcat-peach',
    'strcat-lilac': 'text-strcat-lilac',
    'strcat-chris': 'text-white',
    'strcat-mas': 'text-white',
    'strcat-sul': 'text-strcat-sul',
    'strcat-spring': 'text-strcat-spring',
  };

  const colorList = Array.from(
    { length: 10 },
    (_, index) =>
      bgAndBorderColor[
        Object.keys(bgAndBorderColor)[
          index % Object.keys(bgAndBorderColor).length
        ]
      ],
  );

  const textColorList = Array.from(
    { length: 10 },
    (_, index) =>
      textColor[Object.keys(textColor)[index % Object.keys(textColor).length]],
  );

  return (
    <div className="w-full flex flex-row  overflow-x-scroll pt-[14px] gap-[12px]">
      {openBoard.map((item, i) => {
        return (
          <Link href={`/personal/${item.id}`}>
            <OpenStrcat
              key={`${item.id} + ${item.id}`}
              id={item.id}
              bgAndBorderColor={`${colorList[i]}`}
              timeTextColor={`${textColorList[i]}`}
              title={item.title}
              description={item.description}
              time={item.time}
            />
          </Link>
        );
      })}
    </div>
  );
}
