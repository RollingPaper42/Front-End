import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [isHidden, setIsHidden] = useState(false);
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
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollTop]);

  return { isHidden, setIsHidden };
};
