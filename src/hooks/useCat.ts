import { catState } from '@/recoil/cat';
import { catAction, catAnimationDetail } from '@/types/cat';
import { useRecoilState } from 'recoil';

export const useCat = (): [
  (element: string, catAction: string, second: number) => void,
] => {
  const [, setCat] = useRecoilState(catState);

  const setCatAnimation = (
    elementId: string,
    catActionString: string,
    time: number,
  ) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element === null) return;
      const elementLeft = element.getBoundingClientRect().left;
      const elementTop = element.getBoundingClientRect().top;
      setCat({
        src: catAnimationDetail[catActionString].src,
        catAction: catActionString,
        width: catAnimationDetail[catActionString].width,
        height: catAnimationDetail[catActionString].height,
        top: elementTop + catAnimationDetail[catActionString].top,
        left: elementLeft + catAnimationDetail[catActionString].left,
      });
    }, time);
  };
  return [setCatAnimation];
};
