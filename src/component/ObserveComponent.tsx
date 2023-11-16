import { content } from '@/types/content';
import { useEffect, useRef, Dispatch, SetStateAction } from 'react';

interface ObserveProps {
  content: content;
  idx: number;
  setIdx: Dispatch<SetStateAction<number>>;
  setImg: any;
}

export default function ObserveComponent({
  content,
  idx,
  setIdx,
  setImg,
}: ObserveProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  useEffect(() => {
    console.log(content);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current && isIntersecting) {
            setIdx(() => content.id);
            setImg(() => content.photo);
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
  }, [content, setIdx, setImg]);

  return (
    <span
      ref={ref}
      className={`
        ${
          idx === content.id
            ? ' w-full text-[20px] opacity-100 duration-500'
            : 'w-full  text-[20px] opacity-10 transition-all duration-500'
        }
      `}
    >
      {content.text}
    </span>
  );
}
