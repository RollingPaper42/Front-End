import { useRecoilState } from 'recoil';

import { catAnimationState } from '@/recoil/theme/catAnimation';
import { catAnimationDetail } from '@/types/animation';

export const useCat = (): [
  (element: string, catAction: string, second: number, theme: string) => void,
] => {
  const [, setCatAnimation] = useRecoilState(catAnimationState);

  const runCatAnimation = (
    elementId: string,
    catActionString: string,
    time: number,
    theme: string,
  ) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element === null) return;
      const elementX = element.getBoundingClientRect().right;
      const elementBottom = element.getBoundingClientRect().bottom;
      setCatAnimation({
        src: `/cats/${theme}/${catActionString}.gif`,
        catAction: catActionString,
        width: catAnimationDetail[catActionString].width,
        height: catAnimationDetail[catActionString].height,
        y:
          window.innerHeight -
          elementBottom +
          catAnimationDetail[catActionString].y,
        x: elementX + catAnimationDetail[catActionString].x,
      });
    }, time);
  };
  return [runCatAnimation];
};
