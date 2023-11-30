import { catAnimationState } from '@/recoil/catAnimation';
import { themeState } from '@/recoil/theme';
import { catAnimationDetail } from '@/types/animation';
import { useRecoilState } from 'recoil';

export const useCat = (): [
  (element: string, catAction: string, second: number) => void,
] => {
  const [, setCatAnimation] = useRecoilState(catAnimationState);
  const [theme] = useRecoilState(themeState);

  const runCatAnimation = (
    elementId: string,
    catActionString: string,
    time: number,
  ) => {
    setTimeout(() => {
      const element = document.getElementById(elementId);
      if (element === null) return;
      const elementLeft = element.getBoundingClientRect().left;
      const elementBottom = element.getBoundingClientRect().bottom;
      setCatAnimation({
        src: `/cats/${theme.name}/${catActionString}.gif`,
        catAction: catActionString,
        width: catAnimationDetail[catActionString].width,
        height: catAnimationDetail[catActionString].height,
        bottom:
          screen.height -
          elementBottom +
          catAnimationDetail[catActionString].bottom,
        left: elementLeft + catAnimationDetail[catActionString].left,
      });
    }, time);
  };
  return [runCatAnimation];
};
