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
      <h1 className={` text-[22px] ${theme.titleText}`}>{`${board.title}`}</h1>
    </div>
  );
};

export default React.memo(ObserveTitle);
