import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { hiddenState } from '@/recoil/layoutHidden';

export const useScroll = (options = { scrollEvent: true }) => {
  const [isHidden, setIsHidden] = useRecoilState(hiddenState);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (currentScrollTop > lastScrollTop) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollTop(currentScrollTop);
    };
    if (options.scrollEvent) {
      window.addEventListener('scroll', handleScroll);
    }
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop, options.scrollEvent, setIsHidden]);

  return { isHidden, setIsHidden };
};
