import { observeState } from '@/recoil/observe';
import { themeObj, themeState } from '@/recoil/theme';
import { useEffect, useRef } from 'react';
import { useRecoilState } from 'recoil';

interface Props {
  isAdd: boolean;
}

export default function GroupInfo({ isAdd }: Props) {
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
        rootMargin: '0% 0% -80% 0%',
        threshold: 0,
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
      className="mx-[24px] border-b-2 border-gray-400  py-[8px] text-center "
    >
      <p className="text-[14px] text-white">
        스트링캣 리스트. 누르면 해당 스트링캣으로 이동해요.
      </p>
    </div>
  );
}
