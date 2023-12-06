import { headlineFont } from '@/recoil/font';
import { observeState } from '@/recoil/observe';
import { themeObj, themeState } from '@/recoil/theme';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  isAdd: boolean;
  title: string;
}

export default function GruopMainTitle({ isAdd, title }: Props) {
  const ref = useRef<HTMLHeadingElement | null>(null);
  const [theme, setTheme] = useRecoilState(themeState);
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting }) => {
          if (!isAdd && isIntersecting) {
            setTheme(themeObj['strcat']);
          }
        });
      },
      {
        rootMargin: '0% 0% -90% 0%',
        threshold: 0,
      },
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [isAdd]);
  return (
    <h1
      ref={ref}
      className={`${theme.textTheme.title} mx-[24px] ${headlineFont.category2}`}
    >{`${title}`}</h1>
  );
}
