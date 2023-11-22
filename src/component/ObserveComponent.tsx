import { content } from '@/types/content';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';
import { observeState } from '@/recoil/observe';
import React from 'react';
import { themeState } from '@/recoil/theme';
interface ObserveProps {
  content: content;
  boardId: number;
}

const ObserveComponent = ({ content, boardId }: ObserveProps) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [observe, setObserve] = useRecoilState(observeState);
  const [theme] = useRecoilState(themeState);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            setObserve(() => ({
              boardId: boardId,
              contentId: content.id,
              photo: content.photo,
              writer: content.writer,
            }));
          }
        });
      },
      {
        rootMargin: '-30% 0% -67% 0%',
        threshold: 0.12,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="inline">
      <div
        ref={ref}
        className={`
      ${
        observe.boardId === boardId && observe.contentId === content.id
          ? `${theme.FontColor1} ' duration-500' inline  w-full text-[22px] opacity-100 transition-all`
          : `${theme.DefaultFontColor} ' duration-500'  inline  w-full text-[22px] opacity-30 transition-all`
      }
    `}
      >
        {content.text}
      </div>
      {observe.boardId === boardId && observe.contentId === content.id && (
        <div
          className={`bg-strcat-green absolute right-[24px] mt-[1px]  animate-slide px-1 text-white`}
        >{`From: ${observe.writer}`}</div>
      )}
    </div>
  );
};

export default React.memo(ObserveComponent);
