import { content } from '@/types/content';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { observeState } from '@/recoil/observe';
import React from 'react';
import { themeObj } from '@/recoil/theme';
interface props {
  content: content;
  boardId: number;
  isAdd: boolean;
  theme: 'strcat' | 'calm' | 'green' | 'cyan';
}

const ObserveContent = ({ content, boardId, isAdd, theme }: props) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [observe, setObserve] = useRecoilState(observeState);
  useEffect(() => {
    let ratio = 0.01;
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, boundingClientRect }) => {
          ratio = 10 / boundingClientRect.height;
          if (!isAdd && isIntersecting) {
            setObserve(() => ({
              boardId: boardId,
              contentId: content.id,
              photoUrl: content.photo,
              writer: content.writer,
            }));
          }
        });
      },
      {
        rootMargin: '-30% 0% -65% 0%',
        threshold: ratio,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [boardId, content.id, content.photo, content.writer, setObserve, isAdd]);

  return (
    <div className="inline">
      <div
        ref={ref}
        className={`
      ${
        !isAdd &&
        observe.boardId === boardId &&
        observe.contentId === content.id
          ? `${themeObj[theme].FontColor1} ' duration-500' inline  w-full  text-[22px] opacity-100 transition-all`
          : `${themeObj[theme].DefaultFontColor} ' duration-500'  inline  w-full text-[22px] opacity-30 transition-all`
      }
    `}
      >
        {content.text}
      </div>
      {!isAdd &&
        observe.boardId === boardId &&
        observe.contentId === content.id && (
          <div
            className={`bg-strcat-green absolute right-[24px] z-10 mt-[1px] animate-slide  px-1 text-white opacity-100`}
          >{`From: ${observe.writer}`}</div>
        )}
    </div>
  );
};

export default React.memo(ObserveContent);
