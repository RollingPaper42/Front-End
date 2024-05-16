import Link from 'next/link';

import OpenStrcat from './OpenStrcat';
import { openBoard } from '@/types/openBoard';
import { OpenBoardTextColor, OpenBoardThemeColor } from '@/types/theme';

interface Props {
  openBoard: openBoard[];
}

export default function OpenStrcatBoard({ openBoard }: Props) {
  console.log();
  return (
    <div className="w-full flex flex-row overflow-x-scroll pt-[14px] gap-[12px] scrollbar-thin scrollbar-track-strcat-textarea-bg scrollbar-thumb-strcat-bright-yellow">
      {openBoard
        .sort(() => 0.5 - Math.random())
        .map((item, i) => {
          return (
            <div key={'openBoard' + item.title + item.id}>
              <Link href={`/personal/${item.id}`}>
                <OpenStrcat
                  id={item.id}
                  OpenBoardThemeColor={`${OpenBoardThemeColor[item.theme]}`}
                  OpenBoardTextColor={`${OpenBoardTextColor[item.theme]}`}
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
