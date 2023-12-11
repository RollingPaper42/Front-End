import { Dispatch, SetStateAction, useEffect, useRef } from 'react';
import React from 'react';

import { themeState } from '@/recoil/state';
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
    <div ref={ref}>
      <div
        className={`inline p-[5px] leading-[31px]
      ${
        observe.contentId === content.id
          ? `${theme.bgTheme.contentContainer} text-black transition-all font-medium opacity-100`
          : `${theme.textTheme.default} font-medium opacity-30`
      }
    `}
      >
        {content.text}
      </div>
      {observe.contentId === content.id && (
        <div
          className={`text-right animate-slide ${theme.textTheme.writer} text-body-size2`}
        >{`From: ${
          observe.writer.length ? observe.writer : '익명의 스트링캣'
        } `}</div>
      )}
    </div>
  );
};

export default React.memo(ObserveContent);
