import { catAnimationState } from '@/recoil/catAnimation';
import Image from 'next/image';
import { useRecoilState } from 'recoil';

export default function CatAnimation() {
  const [catAnimation] = useRecoilState(catAnimationState);

  return (
    <div
      className="fixed z-[55]"
      style={{
        width: `${catAnimation.width}px`,
        height: `${catAnimation.height}px`,
        top: `${catAnimation.top}px`,
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
