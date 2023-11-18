import { content } from '@/types/content';
import { useEffect, useRef, Dispatch, SetStateAction } from 'react';
import { useRecoilState } from 'recoil';
import { observeState } from '@/recoil/observe';
interface ObserveProps {
  content: content;
  boardId: number;
}

export default function ObserveComponent({ content, boardId }: ObserveProps) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [observe, setObserve] = useRecoilState(observeState);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ target, isIntersecting }) => {
          if (target === ref.current && isIntersecting) {
            setObserve(() => ({
              boardId: boardId,
              contentId: content.id,
              photo: content.photo,
              writer: content.writer,
            }));
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
  }, []);

  return (
    <div
      ref={ref}
      className={`
      ${
        observe.boardId === boardId && observe.contentId === content.id
          ? 'inline  w-full text-[16px] transition-all duration-500 '
          : 'inline  w-full  text-[16px] opacity-10 transition-all duration-500'
      }
    `}
    >
      {content.text}
      {observe.boardId === boardId && observe.contentId === content.id && (
        <div className="absolute  right-[24px]  mt-[-8px] bg-slate-600 text-white">{`From: ${observe.writer}`}</div>
      )}
    </div>
  );
}
