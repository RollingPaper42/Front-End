import { catState } from '@/recoil/cat';
import { catAction } from '@/types/cat';
import { useRecoilState } from 'recoil';

export const useCat = (): [
  (element: Element | null, catAction: string, second: number) => void,
] => {
  const [, setCat] = useRecoilState(catState);

  const setCatAnimation = (
    element: Element | null,
    catActionString: string,
    time: number,
  ) => {
    setTimeout(() => {
      if (element === null) return;
      const elementLeft = element.getBoundingClientRect().left;
      const elementTop = element.getBoundingClientRect().top;
      let width = 0;
      let height = 0;
      // 해당 div와 똑같은 left top 위치에 위치하게됨
      let top = 0;
      let left = 0;
      let src = '';
      if (catActionString == catAction.exit) {
        src = '/cats/exit.gif';
        width = 114;
        height = 40;
        top = 8;
        left = elementLeft - 24;
      }
      if (catActionString == catAction.sit) {
        src = '/cats/sit.gif';
        width = 40;
        height = 40;
        top = elementTop - 40;
        left = elementLeft + 200;
      }
      setCat({
        src: src,
        catAction: catActionString,
        width: width,
        height: height,
        top: top,
        left: left,
      });
      console.log('text 2', top, left);
    }, time);
  };
  return [setCatAnimation];
};
