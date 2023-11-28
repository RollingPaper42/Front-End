import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { observeState } from '@/recoil/observe';
import React from 'react';
import { board } from '@/types/boards';
import { themeObj, themeState } from '@/recoil/theme';
interface Props {
  board: board;
  isAdd: boolean;
}

const ObserveContent = ({ board, isAdd }: Props) => {
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
              theme: board.theme,
            }));
            setTheme(themeObj[board.theme]);
          }
        });
      },
      {
        rootMargin: '-20% 0% -70% 0%',
        threshold: 0,
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
    <div className="my-[24px] mt-[40px] h-[100px]" ref={ref}>
      <h1
        className={` text-[22px] ${theme.defaultText}`}
      >{`\/\/ ${board.title}`}</h1>
    </div>
  );
};

export default React.memo(ObserveContent);
