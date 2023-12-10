import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import React from 'react';

import { bodyFont, captionFont } from '@/recoil/font';
import { themeState } from '@/recoil/theme';
import { content } from '@/types/content';
import { observeContent } from '@/types/observe';

interface props {
  content: content;
  observe: observeContent;
  theme: themeState;
  setObserve: Dispatch<SetStateAction<observeContent>>;
}

const ObserveContent = ({ content, observe, setObserve, theme }: props) => {
  const ref = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            setObserve(() => ({
              contentId: content.id,
              photoUrl: content.photoUrl,
              writer: content.writer,
            }));
          }
        });
      },
      {
        rootMargin: '-30% 0% -70% 0%',
        threshold: [0],
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
    <div>
      <div
        ref={ref}
        className={`
      ${
        observe.contentId === content.id
          ? `${theme.textTheme.highlight} inline w-full ${bodyFont.category1} opacity-100 leading-[160%] transition-all `
          : `${theme.textTheme.highlight} inline w-full ${bodyFont.category1} opacity-30  leading-[160%] transition-all `
      }
    `}
      >
        {content.text}
      </div>
      {observe.contentId === content.id && (
        <div
          className={`${theme.bgTheme.writerContainer} absolute text-right right-[22px] z-10 mt-[1px] animate-slide pl-[2px] ${captionFont.category1} text-white opacity-100`}
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
