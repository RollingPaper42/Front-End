import { useEffect, useRef, Dispatch, SetStateAction } from 'react';

interface ObserveProps {
  content: string;
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
  id: number;
  photo: string;
  setImg: any;
}

export default function ObserveComponent({
  content,
  idx,
  setIdx,
  id,
  photo,
  setImg,
}: ObserveProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current && isIntersecting) {
            setIdx(() => id);
            setImg(() => photo);
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
            ? ' w-full text-[20px] opacity-100 duration-500'
            : 'w-full  text-[20px] opacity-10 transition-all duration-500'
        }
      `}
    >
      {content}
    </span>
  );
}
