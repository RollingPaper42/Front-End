import { useEffect, useRef, Dispatch, SetStateAction } from 'react';

interface ObserveProps {
  content: string;
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
  id: number;
}

export default function ObserveComponent({
  content,
  idx,
  setIdx,
  id,
}: ObserveProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current && isIntersecting) {
            setIdx(() => id);
          }
        });
      },
      {
        rootMargin: '-48% 0px -48% 0px',
        threshold: 0.01,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [id, setIdx]);

  return (
    <span
      ref={ref}
      className={`
        ${
          idx === id
            ? 'font-s w-full text-3xl opacity-100 duration-500'
            : 'w-full  text-3xl opacity-10 transition-all duration-500'
        }
      `}
    >
      {content}
    </span>
  );
}
