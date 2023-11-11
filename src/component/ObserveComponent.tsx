import { Span } from 'next/dist/trace';
import { useEffect, useRef, useState } from 'react';

export default function ObserveComponent({
  content,
  idx,
  setIdx,
  id,
}: {
  content: any;
  idx: number;
  setIdx: any;
  id: number;
}) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        //console.log(entries);
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
    console.log(observer.takeRecords);
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <span
      ref={ref}
      className={`
        ${
          idx === id
            ? 'font-s w-full text-3xl opacity-100 duration-500'
            : 'w-full text-3xl  opacity-10 transition-all duration-500'
        }
      `}
    >
      {content}
    </span>
  );
}
