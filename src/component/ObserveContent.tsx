import { content } from '@/types/content';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { observeState } from '@/recoil/observe';
import React from 'react';
import { themeObj, themeState } from '@/recoil/theme';
interface props {
  content: content;
  boardId: string;
  isAdd: boolean;
  boardTheme: 'strcat' | 'calm' | 'green' | 'cyan';
}

const ObserveContent = ({ content, boardId, isAdd, boardTheme }: props) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [observe, setObserve] = useRecoilState(observeState);
  const [theme, setTheme] = useRecoilState(themeState);
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
            setTheme(() => themeObj[boardTheme]);
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
  }, [
    boardId,
    content.id,
    content.photo,
    content.writer,
    setObserve,
    isAdd,
    setTheme,
    boardTheme,
  ]);

  return (
    <div className="inline">
      <div
        ref={ref}
        className={`
      ${
        !isAdd &&
        observe.boardId === boardId &&
        observe.contentId === content.id
          ? `${theme.highlightText} ' duration-500' inline  w-full  text-[18px] leading-[160%] opacity-100 transition-all`
          : `${theme.defaultText} ' duration-500'  inline  w-full text-[18px] leading-[160%] opacity-30 transition-all`
      }
    `}
      >
        {content.text}
      </div>
      {!isAdd &&
        observe.boardId === boardId &&
        observe.contentId === content.id && (
          <div
            className={`${theme.writerContainer} absolute right-[22px] z-10 mt-[1px] animate-slide pl-[2px] text-white opacity-100`}
          >
            <div
              className={`${theme.writerContainer} relative top-[-3px] z-20 w-full whitespace-pre-wrap`}
            >
              <div
                className={`relative top-[3px] ${theme.defaultText}`}
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
