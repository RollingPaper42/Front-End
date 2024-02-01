import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { hiddenState } from '@/recoil/layoutHidden';

export const useScroll = (isEdit: boolean, options = { scrollEvent: true }) => {
  const [isHidden, setIsHidden] = useRecoilState(hiddenState);
  const [lastScrollTop, setLastScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollTop = window.scrollY;
      if (window.scrollY < 0) {
        return;
      }
      if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
        return;
      }
      if (!isEdit && currentScrollTop > lastScrollTop + 10) {
        setIsHidden(true);
      } else if (currentScrollTop < lastScrollTop - 15) {
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
