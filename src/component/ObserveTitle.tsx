import { useEffect, useRef } from 'react';
import React from 'react';
import { useRecoilState } from 'recoil';

import { titleFont } from '@/recoil/font';
import { observeState } from '@/recoil/observe';
import { themeObj, themeState } from '@/recoil/theme/theme';
import { board } from '@/types/boards';

interface Props {
  board: board;
  isAdd: boolean;
}

const ObserveTitle = ({ board, isAdd }: Props) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [, setObserve] = useRecoilState(observeState);
  const [theme, setTheme] = useRecoilState(themeState);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (!isAdd && isIntersecting) {
            setObserve((prev) => ({
              ...prev,
              boardId: board.id,
            }));
            setTheme(themeObj[board.theme]);
          }
        });
      },
      {
        rootMargin: '0% 0% -50% 0%',
        threshold: 0.3,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [setObserve, isAdd]);

  return (
    <div className="mb-[24px] mt-[40px] h-[100px] " ref={ref}>
      <h1
        className={` ${titleFont.category1} ${theme.textTheme.title}`}
      >{`${board.title}`}</h1>
    </div>
  );
};

export default React.memo(ObserveTitle);
