import { useRecoilState } from 'recoil';

import { catAnimationState } from '@/recoil/catAnimation';
import Image from 'next/image';

export default function CatAnimation() {
  const [catAnimation] = useRecoilState(catAnimationState);

  return (
    <div
      className="fixed z-[25]"
      style={{
        width: `${catAnimation.width}px`,
        height: `${catAnimation.height}px`,
        bottom: `${catAnimation.bottom}px`,
        left: `${catAnimation.left}px`,
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
