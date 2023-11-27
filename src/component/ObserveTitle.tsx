import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';
import { observeState } from '@/recoil/observe';
import React from 'react';
interface Props {
  title: string;
}

const ObserveContent = ({ title }: Props) => {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [, setObserve] = useRecoilState(observeState);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (isIntersecting) {
            setObserve((prev) => ({ ...prev, photoUrl: '' }));
          }
        });
      },
      {
        rootMargin: '-30% 0% -65% 0%',
        threshold: 0,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [setObserve]);

  return (
    <div className="my-[24px] mt-[20px] h-[200px]" ref={ref}>
      <h1 className={` text-[28px] `}>{title}</h1>
    </div>
  );
};

export default React.memo(ObserveContent);
