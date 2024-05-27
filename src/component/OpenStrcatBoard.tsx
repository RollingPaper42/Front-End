import 'react';

import Link from 'next/link';

import OpenStrcat from './OpenStrcat';
import { openBoard } from '@/types/openBoard';
import { OpenBoardTextColor, OpenBoardThemeColor } from '@/types/theme';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

interface Props {
  openBoard: openBoard[];
}

export default function OpenStrcatBoard({ openBoard }: Props) {
  return (
    <div className="w-full flex flex-row overflow-x-scroll pt-[14px] no-padding">
      <Swiper width={162}>
        {openBoard.map((item, i) => {
          return (
            <div key={'openBoard' + item.title + item.id}>
              <SwiperSlide>
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
              </SwiperSlide>
            </div>
          );
        })}
      </Swiper>
    </div>
  );
}
