import { useRecoilState } from 'recoil';

import { catAnimationState } from '@/recoil/theme/catAnimation';
import Image from 'next/image';

export default function CatAnimation({ isHidden }: { isHidden: boolean }) {
  const [catAnimation] = useRecoilState(catAnimationState);

  return (
    <div
      className={`fixed z-[15] transition-transform ${
        isHidden ? 'translate-y-[0]' : '-translate-y-[104px]'
      }`}
      style={{
        width: `${catAnimation.width}px`,
        height: `${catAnimation.height}px`,
        bottom: `${catAnimation.y}px`,
        left: `${catAnimation.x}px`,
      }}
    >
      <Image
        alt={`${catAnimation.catAction}`}
        src={`${catAnimation.src}`}
        fill
      />
    </div>
  );
}
