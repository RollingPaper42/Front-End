import { content } from '@/types/content';
import { useEffect, useRef } from 'react';
import { SetterOrUpdater, useRecoilState } from 'recoil';
import React from 'react';
import { themeState } from '@/recoil/theme';
import { observe } from '@/types/observe';
import { captionFont, bodyFont } from '@/recoil/font';

interface Props {
  content: content;
  boardId: string;
  isAdd: boolean;
  setObserve: SetterOrUpdater<observe>;
  observe: observe;
  setObserveCount: SetterOrUpdater<number>;
}

const ObserveContent = ({
  content,
  boardId,
  isAdd,
  setObserve,
  observe,
  setObserveCount,
}: Props) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [theme] = useRecoilState(themeState);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (!isAdd && isIntersecting) {
            setObserveCount((prev) => prev + 1);
            setObserve((prev) => ({ ...prev, contentId: content.id }));
          } else {
            setObserveCount((prev) => prev - 1);
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

  return (
    <div className="inline">
      <div
        ref={ref}
        className={`
      ${
        !isAdd &&
        observe.boardId === boardId &&
        observe.contentId === content.id
          ? `${theme.textTheme.highlight}  inline  w-full  ${bodyFont.category1} leading-[160%] opacity-100 transition-all`
          : `${theme.textTheme.default}  inline  w-full ${bodyFont.category1} leading-[160%] opacity-30 transition-all`
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
