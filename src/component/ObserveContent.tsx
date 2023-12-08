import { useEffect, useRef, useState } from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';

import { bodyFont, captionFont } from '@/recoil/font';
import { observeState } from '@/recoil/observe';
import { themeObj, themeState } from '@/recoil/theme';
import { content } from '@/types/content';

interface props {
  content: content;
  boardId: string;
  isAdd: boolean;
  boardTheme: 'strcat' | 'calm' | 'green' | 'cyan';
}

const ObserveContent = ({ content, boardId, isAdd, boardTheme }: props) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [observe, setObserve] = useRecoilState(observeState);
  const [card, setCard] = useState(false);
  const [theme, setTheme] = useRecoilState(themeState);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, boundingClientRect }) => {
          if (!isAdd && isIntersecting) {
            // setObserve(() => ({
            //   boardId: boardId,
            //   contentId: content.id,
            //   photoUrl: content.photoUrl,
            //   writer: content.writer,
            // }));
            setCard(true);
          } else {
            setCard(false);
          }
        });
      },
      {
        rootMargin: '-30% 0% -70% 0%',
        threshold: [],
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  console.log(content.id, card);
  return (
    <div className="">
      <div
        ref={ref}
        className={`
      ${
        card
          ? `${theme.textTheme.highlight} w-full  ${bodyFont.category1} leading-[160%] opacity-100 transition-all bg-slate-400 scale-150 `
          : `${theme.textTheme.default} w-full ${bodyFont.category1} leading-[160%] opacity-30 transition-all`
      }
    `}
      >
        {content.text}
      </div>
      {!isAdd &&
        observe.boardId === boardId &&
        observe.contentId === content.id && (
          <div
            className={`${theme.bgTheme.writerContainer} absolute right-[22px] z-10 mt-[1px] animate-slide pl-[2px] ${captionFont.category1} text-white opacity-100`}
          >
            <div
              className={`${theme.bgTheme.writerContainer} relative top-[-3px] z-20 w-full whitespace-pre-wrap ${captionFont.category1}`}
            >
              <div
                className={`relative top-[3px] ${theme.textTheme.writer}`}
              >{`From: ${
                observe.writer.length ? observe.writer : '익명의 스트링캣'
              } `}</div>
            </div>
          </div>
        )}
    </div>
  );
};

export default React.memo(ObserveContent);
